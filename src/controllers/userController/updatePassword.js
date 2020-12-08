const bcrypt = require("bcrypt")
const db = require("../../models/index")

const updatePassword = async (req, res) => {
  //validation updating password here
  //checking if the two passwords are the same 
  if(req.body.password !== req.body.confirmPassword)
    return res.status(400).json({
      error: "Your password don't match"
    })

//find the user that has that token and the token hasn't expires yet
  const user = await db.User.findOne({
    resetPasswordToken: req.params.token, 
    resetPasswordExpires: { $gt: Date.now() }
  })

  if(!user)  
    return res.status(400).json({
      error: "Password reset was either invalid or has expires"
  })

  //if we have a user then we to set their password to the new password
  //TODO:
  //1: encrypt the user password 
  const hashed_password = await bcrypt.hash(req.body.password, 12)
  
  //set the updated password in database 
  await user.updateOne({password: hashed_password}, {new: true})

  //after saving the new password we need to delete the resetPasswordToken and resetPasswordExpires
  //from the database
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  //Then save user 
  await user.save()
  
  res.status(200).json({
    message: "Password Updated successfully!"
  })
}

module.exports = updatePassword