const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const validation = require("../handlers/validation");

//eslint-disable-next-line
exports.signup = async (req, res) => {
  //Validating user inputs / data
  const { error } = validation.ValidateUserSignup(req.body);
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
  const isUserExist = await User.findOne({ email: req.body.email });
  if (isUserExist)
    return res.status(400).json({
      error: `User with ${req.body.email} already exist!`
    });

  //Encrpting user password before saving to the database
  const hashed_password = await bcrypt.hash(req.body.password, 12);
  if (!hashed_password)
    return res.status(500).json({ message: "Something went wrong! :)" });

  //Creating new user after it passes all the above validation base on the user data
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashed_password
  });

  //saving the data to the database
  await user.save();
  if (user)
    res
      .status(201)
      .json({ userId: user.id, message: "User created Successfully!" });
};

//eslint-disable-next-line
exports.signin = async (req, res) => {
  //1: Validating user inputs / data
  const { error } = validation.ValidateUserSignin(req.body);
  if (error)
    return res.status(400).json({
      error: error.details[0].message
    });

  //2. find the user in the database with the given email
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).json({
      errror: `User with ${req.body.email} doesn't exist!`
    });

  //2. if the user exist, compare the current entered password with the one
  // the database
  //Check if the password is valid, if it is send a token back
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid)
    return res.status(400).json({
      error: "Incorrect password combo"
    });

  //returning a token for login in user
  const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
  res.status(200).json({
    token: token
  });
};

//eslint-disable-next-line
exports.signout = (req, res) => {
  res.send("Your'r log out");
};


//gets all users from the database
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users)
    return res.status(404).json({
      error: "users not found!"
    });

  res.status(200).json(users);
};

//gets a single user from the database
exports.getSingleUser = async (req, res) => {
  const user = await User.findById({_id: req.params.id})
  if(!user)
   return res.status(400).json({
     error: "User not found"
   })
  
   res.status(200).json(user)
}


//updating user info
exports.updateUser = async (req, res) => {
  //1: Validating user inputs / data
  const { error } = validation.validateUserUpdate(req.body);
  if (error)
    return res.status(400).json({
      error: error.details[0].message
    });

    //finding and updating the user
  const user = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
  if(!user)
    return res.status(400).json({
      error: "User not found"
    })

  res.status(200).json(user)
}