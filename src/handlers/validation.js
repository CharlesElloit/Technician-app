const Joi = require("joi");

//validating user signup
exports.ValidateUserSignup = data => {
  const userSchema = Joi.object({
    name: Joi.string()
      .required()
      .min(3)
      .max(30)
      .trim()
      .lowercase(),
    email: Joi.string()
      .trim()
      .lowercase()
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .trim()
      .max(30)
      .min(6)
      .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
  });

  return userSchema.validate(data);
};

//validating user signin
exports.ValidateUserSignin = data => {
  const userSchema = Joi.object({
    email: Joi.string()
      .trim()
      .lowercase()
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .trim()
      .max(30)
      .min(6)
      .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
  });

  return userSchema.validate(data);
};
