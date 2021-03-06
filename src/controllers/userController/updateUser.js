const db = require("../../models/index")
const { validateUserUpdate } = require("../../handlers/validation")

//Not yet tested
const updateUser = async (req, res) => {
  //1: Validating user inputs / data
  const { error } = validateUserUpdate(req.body);
  if (error)
    return res.status(400).json({
      error: error.details[0].message
    });
  
  //check if password and confirm password are the same

  const _id = req.headers.userId;

  //2: finding and updating the user
  const user = await db.User.findOneAndUpdate(
    {_id},
    req.body, 
    {new: true, runValidators: true, context: "query"})

  if(!user)
    return res.status(400).json({
      error: "User not found"
    })

  res.status(200).json({
    message: `User ${user._id} Updated successfully!`
  })
}

module.exports = updateUser;