const crypto = require("crypto")
const db = require("../../models/index")
const mail = require("../../handlers/mail")
  
const forgotPassword = async (req, res) => {
  // 1: check if user exist in the database
  const user = await db.User.findOne({email: req.body.email})
  if(!user)
    return res.status(400).json({
      eror: "No account found with that email."
    })

  // 2 setting a reset token and expiry date on their account
  user.resetPasswordToken = crypto.randomBytes(25).toString("hex")
  user.resetPasswordExpires = Date.now() + 1800000 //30 mintues from the current time
  const savedUser = await user.save()
  
  if(!savedUser)
    return res.status(500).json({
      error: 'Oops something went wrong!'
    })
  
  // 3: send them an email with the created token
  // using nodemailer
  const resetLink = `http://${req.headers.host}/account/reset/${user.resetPasswordToken}` //This will generate a link for us to send the user.
  // res.send(resetLink)
  await mail.send({
    user,
    subject: 'Password Reset',
    resetLink
  })

  res.status(200).json({
    message: "Link was sent successfully"
  })
}


module.exports = forgotPassword