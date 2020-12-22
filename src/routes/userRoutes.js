const express = require("express")
const router = express.Router()
const auth = require("../../middlewares/auth")
const userController = require("../controllers/userController");
const credentailsController = require("../controllers/credentialController")
const { catchErrorsHandler } = require("../handlers/errorHandler");

router.post("/signup", catchErrorsHandler(userController.signup));
router.post("/signin", catchErrorsHandler(userController.signin));
router.post("/signout", catchErrorsHandler(userController.signout));
router.get("/users", auth, catchErrorsHandler(userController.getAllUsers));
router.get("/user/:id", auth, catchErrorsHandler(userController.getSingleUser))
//Not yet tested
router.put("/users", auth, catchErrorsHandler(userController.updateUser))
router.post("/forgotpassword", catchErrorsHandler(userController.forgotPassword))
router.get("/account/reset/:token",  catchErrorsHandler(userController.reset))
router.post("/account/reset/:token", catchErrorsHandler(userController.updatePassword))

//credentails 
router.post("/credentials", auth, catchErrorsHandler(credentailsController.createCredentails))
router.get("/credentials/_id", catchErrorsHandler(credentailsController.getCredentails))
module.exports = router 
