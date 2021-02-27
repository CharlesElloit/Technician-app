const router = require("express").Router();
const techianController = require("../controllers/technicianController");
const auth = require("../../middlewares/auth");

// This is a helper function which will catch errors
const { catchErrorsHandler } = require("../handlers/errorHandler");

// All of our application route should go hered
router.get("/", techianController.home);
router.post(
  "/technicians",
  auth,
  catchErrorsHandler(techianController.createTechnician)
);
router.get(
  "/technicians",
  catchErrorsHandler(techianController.getAllTechicians)
);
router.get(
  "/technician/:id",
  catchErrorsHandler(techianController.getTechnician)
);

module.exports = router;
