const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const techianController = require("../controllers/techianController");

// This is a helper function which will catch errors
const { catchErrorsHandler } = require("../handlers/errorHandler");

// All of our application route should go here
router.post(
  "/api/technicians",
  catchErrorsHandler(techianController.createTechnician)
);
router.get(
  "/api/technicians",
  catchErrorsHandler(techianController.getAllTechicians)
);
router.get(
  "/api/technician/:id",
  catchErrorsHandler(techianController.getTechnician)
);
router.post("/api/auth/signin", catchErrorsHandler(userController.signin));
router.post("/api/auth/signup", catchErrorsHandler(userController.signup));
router.post("/api/auth/signout", catchErrorsHandler(userController.signout));
router.get("/api/users", catchErrorsHandler(userController.getAllUsers));

module.exports = router;
