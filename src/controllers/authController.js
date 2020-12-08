exports.isLoggedIn = (req, res, next) => {
  //first check if the user is authenticated
  if (req.isAuthenticated())
    return next()
  
  res.redirect("/signin")
}