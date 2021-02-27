const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/auth");
const userController = require("../controllers/userController");
const credentailsController = require("../controllers/credentialController");
const { catchErrorsHandler } = require("../handlers/errorHandler");

//User Routes
router.post("/signup", catchErrorsHandler(userController.signup));
router.post("/signin", catchErrorsHandler(userController.signin));
router.post("/signout", catchErrorsHandler(userController.signout));
router.get("/users", auth, catchErrorsHandler(userController.getAllUsers));
router.get("/user/:id", auth, catchErrorsHandler(userController.getSingleUser));
router.put("/user", auth, catchErrorsHandler(userController.updateUser));
router.post(
  "/forgotpassword",
  catchErrorsHandler(userController.forgotPassword)
);
router.get("/account/reset/:token", catchErrorsHandler(userController.reset));
router.post(
  "/account/reset/:token",
  catchErrorsHandler(userController.updatePassword)
);

//credentails
router.post(
  "/credentials",
  auth,
  catchErrorsHandler(credentailsController.createCredentails)
);
router.get(
  "/credential",
  auth,
  catchErrorsHandler(credentailsController.getCredentail)
);

//Not tested yet
router.put(
  "/credential",
  auth,
  catchErrorsHandler(credentailsController.updateCredentail)
);

module.exports = router;
