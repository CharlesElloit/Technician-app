const router = require("express").Router()
const userController = require("../controllers/userController");
const { catchErrorsHandler } = require("../handlers/errorHandler");

router.post("/api/signup", catchErrorsHandler(userController.signup));
router.post("/api/signin", catchErrorsHandler(userController.signin));
router.post("/api/signout", catchErrorsHandler(userController.signout));
router.get("/api/users", catchErrorsHandler(userController.getAllUsers));
router.get("/api/user/:id", catchErrorsHandler(userController.getSingleUser))
router.put("/api/users/:id", catchErrorsHandler(userController.updateUser))

module.exports = router