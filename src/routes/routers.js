const express = require("express");
const router = express.Router();

const techianController = require("../controllers/index");

// This is a helper function which will catch errors
const { catchErrorsHandler } = require("../handlers/errorHandler");

// All of our application route should go here
router.post("/api/techians", catchErrorsHandler(techianController.createTechian));
router.get("/api/techians", catchErrorsHandler(techianController.getAllTechians));
router.get("/api/techian/:id", catchErrorsHandler(techianController.getTechian));

module.exports = router;
