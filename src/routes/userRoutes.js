const express = require("express")
const router = express.Router()
const auth = require("../../middlewares/auth")
const userController = require("../controllers/userController");
const {upload, resizeImage} = require("../../middlewares/upload");
const { catchErrorsHandler } = require("../handlers/errorHandler");

router.post("/signup", catchErrorsHandler(userController.signup));
router.post("/signin", catchErrorsHandler(userController.signin));
router.post("/signout", catchErrorsHandler(userController.signout));
router.get("/users", auth, catchErrorsHandler(userController.getAllUsers));
router.get("/user/:id", auth, catchErrorsHandler(userController.getSingleUser))
router.put("/users/:id", auth, upload, catchErrorsHandler(resizeImage), catchErrorsHandler(userController.updateUser))
router.post("/forgotpassword", catchErrorsHandler(userController.forgotPassword))
router.get("/account/reset/:token",  catchErrorsHandler(userController.reset))
router.post("/account/reset/:token", catchErrorsHandler(userController.updatePassword))

module.exports = router 
