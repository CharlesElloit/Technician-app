const bcrypt = require("bcrypt");
const Technician = require("../models/Techian.model");

// This route is for creating a techian

// eslint-disable-next-line
exports.createTechnician = async (req, res) => {
  //TODO:
  //check if the technician isn't already created

  const technician = new Technician(req.body);
  const success = await technician.save();
  if (!success)
    return res
      .status(500)
      .json({ message: "Something went wrong try again!!!!" });
  return res.status(201).json({ message: "Techian created Successfully!" });
};

// This route should login techian
// eslint-disable-next-line
exports.loginTechnician = async (req, res) => {
  const technician = await Technician.findOne({ email: req.body.email });
  if (!technician)
    return res
      .status(401)
      .json({ message: "Please provide correct email and password combo!" });
  const password_hash = bcrypt.hash(req.body.password, 12);

  const valid = bcrypt(password_hash, technician.password);
  if (!valid)
    res.status(500).json({ message: "Something went wrong try again!!!" });

  res.status(200).json({
    userId: technician.id,
    token: "fakeToke"
  });
};

// This route get all of the techian in our database and send it as
// a json format

// eslint-disable-next-line
exports.getAllTechicians = async (req, res) => {
  const technicians = await Technician.find();
  if (!technicians)
    return res.status(404).json({
      message: "Techians not found"
    });
  return res.status(200).json(technicians);
};

//This route gets a single techian information

// eslint-disable-next-line
exports.getTechnician = async (req, res) => {
  const technician = await Technician.findById({ _id: req.params.id });
  if (!technician)
    return res.status(400).json({
      error: new Error("There is no user with that id!")
    });

  res.status(200).json(technician);
};

//this is test for the master branch to see if tahe dev is upto date
exports.home = (req, res) => {
  res.send('Welcome to Technician Application')
}