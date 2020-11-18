const express = require("express");
const router = express.Router();

const userController = require("../src/controllers/userController");
const techianController = require("../../controllers/techianController");

// This is a helper function which will catch errors
const { catchErrorsHandler } = require("../handlers/errorHandler");

// All of our application route should go here
router.post(
  "/api/techians",
  catchErrorsHandler(techianController.createTechnician)
);
router.get(
  "/api/techians",
  catchErrorsHandler(techianController.getAllTechicians)
);
router.get(
  "/api/techian/:id",
  catchErrorsHandler(techianController.getTechnician)
);
router.post("/api/auth/login", catchErrorsHandler(userController.login));
router.post("/api/auth/sigup", catchErrorsHandler(userController.signup));

module.exports = router;
