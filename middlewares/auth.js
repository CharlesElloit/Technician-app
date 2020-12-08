const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer "))
    token = req.headers.authorization.split("Bearer ")[1]

  else return res.status(401).json({
     error: "Unauthorized access"
  })

  //verify the token
  const verifiedToken =  jwt.verify(token, process.env.SECRET_KEY)
  if(!verifiedToken)
    return res.status(401).json({
      error: "Oops You'r Unauthorized to access this resources. Sorry!!"
    })

  req.headers.userId = verifiedToken.userId
  
  next()
}

module.exports = auth