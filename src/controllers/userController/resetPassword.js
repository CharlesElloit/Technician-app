const db = require("../../models/index")

const resetPassword = async (req, res) => {
  //find the user that has the token and the token hasn't expires yet
  //The $gt means greater than
  const user = await db.User.findOne({
    resetPasswordToken: req.params.token, 
    resetPasswordExpires: { $gt: Date.now() }
  })
  /*
    if the above search query fail either because there is no token found or 
    the token already expires then we error
  */
  if(!user)  
    return res.status(400).json({
      error: "Password reset was either invalid or has expires"
    })
  
  /* 
   if they made it here then we need to direct them to where they will 
   update their password
  */
  res.status(200).json({
    message: 'confirm to reset you password'
  })
}

module.exports = resetPassword
