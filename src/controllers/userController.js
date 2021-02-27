module.exports = {
  signup: require("./userController/signup"),
  signin: require("./userController/signin"),
  getAllUsers: require("./userController/getUsers"),
  //  getSingleUser: require("./userController/getS")
  updateUser: require("./userController/updateUser"),
  resetPassword: require("./userController/resetPassword"),
  forgotPassword: require("./userController/forgotPassword"),
  updatePassword: require("./userController/updatePassword")
};

//eslint-disable-next-line
exports.signout = (req, res) => {
  res.send("Your'r log out");
};
