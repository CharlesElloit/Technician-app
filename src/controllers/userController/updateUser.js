const db = require("../../models/index");
const bcrypt = require("bcrypt");

const { validateUserUpdate } = require("../../handlers/validation");

//Not yet tested
const updateUser = async (req, res) => {
  //1: Validating user inputs / data
  const { error } = validateUserUpdate(req.body);
  if (error)
    return res.status(400).json({
      error: error.details[0].message
    });

  //check if password and confirm password are the same
  let hashed_password;

  if (req.body.password) {
    if (!req.body.confirmPassword)
      return res.status(401).json({
        error: "Oops Confirm password field is required!"
      });

    if (req.body.password !== req.body.confirmPassword)
      return res.status(401).json({
        error: "Oops your pass combo does'nt match."
      });

    hashed_password = await bcrypt.hash(req.body.password, 12);
  }

  const _id = req.headers.userId;

  const updatedUser = new db.User({
    _id,
    name: req.body.name,
    email: req.body.email,
    password: hashed_password
  });

  //2: finding and updating the user
  const user = await db.User.findOneAndUpdate({ _id }, updatedUser, {
    new: true,
    runValidators: true,
    context: "query"
  });

  if (!user)
    return res.status(400).json({
      error: "User not found"
    });

  res.status(200).json({
    message: `User ${user._id} Updated successfully!`
  });
};

module.exports = updateUser;
