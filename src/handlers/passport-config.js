const passport = require("passport")
const User = require("../models/User.model")

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())