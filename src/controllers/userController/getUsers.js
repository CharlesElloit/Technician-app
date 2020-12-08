const db = require("../../models/index");

//gets all users from the database
//eslint-disable-nextline
const getAllUsers = async (req, res) => {
  const users = await db.User.find();
  if (!users)
    return res.status(404).json({
      error: "users not found!"
    });

  res.status(200).json(users);
};

//gets a single user from the database
const getSingleUser = async (req, res) => {
  const user = await db.User.findById({_id: req.params.id})
  if(!user)
   return res.status(400).json({
     error: "User not found"
   })
  
   res.status(200).json(user)
  }

module.exports = getAllUsers