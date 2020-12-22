const { db } = require("../../models/User.model");

function login(req, res, callback) {
  db.User.findOne({email: req.body.email}, function(err, user) {
    if(err) return callback(err)

    user.comparePassword(req.body.password, function(err, isMatch) {
      if(err) return callback(err)
      if(!isMatch) return res.status(401).send("Incorrect Password")

      const payload = {id: user._id, email: user.email}

      jwt.sign(payload, config.secret, {}, function(err, callback) {
        if(err) return callback(err)

        user.token = token
        user.save((err) => {
          if(err) return callback(err)
          res.json({token})
        })
      })
    })
  })
}