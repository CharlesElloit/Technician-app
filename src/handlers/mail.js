const nodemailer = require("nodemailer")

const mailTransporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS // naturally, replace both with your real credentials or an application-specific password
  }
})

exports.send = mailDetails => {
  const mailOptions = {
    from: "Charles Elloit <noreply@charles.com",
    to: mailDetails.user.email,
    subject: mailDetails.subject,
    html: 'Testing the mail sender',
    text: 'Testing the mail sender'
  }
  mailTransporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })}



