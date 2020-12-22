const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer "))
    token = req.headers.authorization.split("Bearer ")[1]

  else return res.status(401).json({
     error: "Unauthorized Access"
  })

  //verify the token
  const verifiedToken =  jwt.verify(token, process.env.SECRET_KEY)
  if(!verifiedToken)
    return res.status(401).json({
      error: "Oops You'r Unauthorized to access this resources. Sorry!!"
    })

  //setting user information in the headers 
  req.headers.userId = verifiedToken.userId,
  req.headers.name = verifiedToken.name,
  req.headers.email = verifiedToken.email
  
  //pass the executation to the next middleware in the chain
  next()
}

module.exports = auth