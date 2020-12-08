const bcrypt =  require("bcrypt")
const db = require("../../models/index")
const { ValidateUserSignup } = require("../../handlers/validation")

const signup = async (req, res) => {
  //Validating user inputs / data
  const { error } = ValidateUserSignup(req.body);
  if (error)
    return res.status(400).json({
      error: error.details[0].message
    });
    
  //checks if the passwords are the same
  if(req.body.password !== req.body.confirmPassword)
    return res.status(400).json({
      error: 'Password must match'
    })

  //check if the user exist
  const isUserExist = await db.User.findOne({ email: req.body.email });
  if (isUserExist)
    return res.status(400).json({
      error: `User with ${req.body.email} already exist!`
    });

  //Encrpting user password before saving to the database
  const hashed_password = await bcrypt.hash(req.body.password, 12);
  if (!hashed_password)
    return res.status(500).json({ message: "Something went wrong! :)" });

  //Creating new user after it passes all the above validation base on the user data
  const newUser = new db.User({
    name: req.body.name,
    email: req.body.email,
    password: hashed_password
  });

  //saving the data to the database
 const savedUser = await newUser.save();
  if (!savedUser)
    return res.status(500).json({
      error: "Oops something went wrong Please try again!"
    })

  res.status(201).json({ 
      userId: savedUser.id, 
      message: "User created Successfully!"
   });
};

module.exports = signup