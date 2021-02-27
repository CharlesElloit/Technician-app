const db = require("../models/index");

// eslint-disable-next-line
exports.createTechnician = async (req, res) => {
  //validation
  //create the technician information.

  const technicianData = new db.Technician({
    rate: req.body.rate,
    rating: req.body.rating,
    status: req.body.status,
    occupation: req.body.occupation,
    experience: req.body.experience,
    userId: req.headers.userId
  });

  const technician = await db.Technician.create(technicianData);

  if (!technician)
    return res.status(500).json({
      error: "something went wrong"
    });

  const savedTechnicianData = await technician.save();
  if (!savedTechnicianData)
    return res.status(500).json({
      error: "Oops your credentials is not saved please try again!"
    });

  //flip the isTechnician boolen from false to true

  return res.status(201).json({ message: "Techian created Successfully!" });
};

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
  const technician = await Technician.findById({ _id: req.params.id }).populate(
    ""
  );
  if (!technician)
    return res.status(400).json({
      error: new Error("There is no user with that id!")
    });

  res.status(200).json(technician);
};

//this is test for the master branch to see if tahe dev is upto date
exports.home = (req, res) => {
  res.send("Welcome to Technician Application");
};
