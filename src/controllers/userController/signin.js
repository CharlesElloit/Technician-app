const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../models/index");
const { ValidateUserSignin } = require("../../handlers/validation");

const signin = async (req, res) => {
  //1: Validating user inputs / data
  const { error } = ValidateUserSignin(req.body);
  if (error)
    return res.status(400).json({
      error: error.details[0].message
    });

  //2. find the user in the database with the given email
  const user = await db.User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).json({
      errror: `User with ${req.body.email} doesn't exist!`
    });

  //3. if the user exist, compare the current entered password with the one in
  // the database and Check if the password is valid, if it is send a token back
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid)
    return res.status(400).json({
      error: "Incorrect password"
    });

  //Adding some relevant data to be encoded in the token
  const payload = { userId: user._id, email: user.email, name: user.name };

  //returning a token for login user
  const token = jwt.sign(payload, process.env.SECRET_KEY);
  res.status(200).json({ token });

  req.headers.authorization = token;
};

module.exports = signin;
