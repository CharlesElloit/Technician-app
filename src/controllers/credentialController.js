const db = require("../models/index")
//create a credentails
exports.createCredentails = async (req, res) => {
  //1- validation
  //set the userId 
  req.body.userId = req.headers.userId
  req.body.name = req.headers.name
  
  //2- get validated data and store it with user id
  const credentails = await db.Credentials.create(req.body); 
  if(!credentails) 
    return res.status(500).json({
      message: "Oops something went wrong Please try again!",
    })

  const savedCredentials = await credentails.save()
  if(!savedCredentials)
    return res.status(500).json({
      error: "Oops something bad happen while creating your credentails"
    })

  res.status(201).json({
    message: `Credentails for user ${req.headers.userId} is created Successfully!`
  })
}

//getUserCredentails
exports.getCredentails = async (req, res) => {
   const userCredentails = await findOne({_id: req.params._id}).populate("User")
   if(!userCredentails) {
     return res.status(400).json({
       error: "User credentails not found!"
     })
   }

   return res.status(200).json(userCredentails)
}