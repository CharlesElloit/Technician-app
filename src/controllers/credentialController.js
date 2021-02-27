const db = require("../models/index");
const jwt = require("jsonwebtoken");

//create a credentails
exports.createCredentails = async (req, res) => {
  //1- validation
  //set the userId
  const userId = req.headers.userId;

  const user = await db.User.findById({ _id: userId });

  if (!user) {
    return res.status(400).json({
      error: "Oops too bad for you! Sorry"
    });
  }

  const token = req.headers.authorization.split("Bearer ")[1];

  const isValidUserId = await jwt.verify(token, process.env.SECRET_KEY);

  if (!isValidUserId) {
    return res.status(403).json({
      error: "Unauthorized Access"
    });
  }

  //we need to get the technicianId
  const technician = await db.Technician.findOne({ userId: userId });
  if (technician) {
    console.log("technician found!");
    req.body.technician = technician._id;
  }

  req.body.user = userId;

  const userCredentails = new db.Credentials(req.body);

  //2- get validated data and store it with user id
  const credentails = await db.Credentials.create(userCredentails);

  if (!credentails)
    return res.status(500).json({
      message: "Oops something went wrong Please try again!"
    });

  const savedCredentials = await credentails.save();
  if (!savedCredentials)
    return res.status(500).json({
      error: "Oops something bad happen while creating your credentails"
    });

  res.status(201).json({
    message: `Credentails for user ${req.headers.userId} is created Successfully!`
  });
};

//getUserCredentails
exports.getCredentail = async (req, res) => {
  const userCredentails = await db.Credentials.findOne({
    user: req.headers.userId
  })
    .populate("user", ["name", "email"])
    .populate(["technician"]);

  if (!userCredentails) {
    return res.status(400).json({
      error: "User credentails not found!"
    });
  }

  return res.status(200).json(userCredentails);
};

//update User Credentails
exports.updateCredentail = async (req, res) => {
  //validation
  //update the info
  const { userId } = req.headers;

  // const updateUserCredentials = new db.Credentials(req.body);
  const newCredentails = await db.Credentials.findOneAndUpdate(
    { user: userId },
    req.body,
    {
      new: true,
      runValidators: true,
      context: "query"
    }
  );

  if (!newCredentails)
    return res.status(500).json({
      error: "Oops something went wrong"
    });

  return res.status(200).json({
    message: `userCredentails ${userId} updated Successfully!`
  });
};
