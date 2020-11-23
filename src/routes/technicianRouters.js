const router = require("express").Router()
const techianController = require("../controllers/technicianController");
// This is a helper function which will catch errors
const { catchErrorsHandler } = require("../handlers/errorHandler");

// All of our application route should go hered
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

module.exports = router;
