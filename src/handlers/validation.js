const Joi = require("joi");

/*

Those function below are for validating the user input, so in our routes
before we process them and save it to the database

*/

//validating user signup
exports.ValidateUserSignup = data => {
  const userSchema = Joi.object({
    name: Joi.string()
      .required()
      .min(3)
      .max(30)
      .trim(),
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
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9@]{6,30}$")),
    confirmPassword: Joi.string()
      .trim()
      .max(30)
      .min(6)
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9@]{6,30}$"))
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
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9@]{6,30}$"))
  });

  return userSchema.validate(data);
};

//validating when the user is updating his/her account info
exports.validateUserUpdate = data => {
  const userSchema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(100)
      .trim()
      .strip(),
    email: Joi.string()
      .trim()
      .lowercase()
      .max(255)
      .email()
      .strip(),
    password: Joi.string()
      .trim()
      .max(30)
      .min(6)
      .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")),
    confirmPassword: Joi.string()
      .trim()
      .max(30)
      .min(6)
      .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
  });

  return userSchema.validate(data);
};

//validation for creating a user credentails
exports.validateUserCredentails = data => {
  const credentailSchema = Joi.object({
    fullname: Joi.string()
      .max(100)
      .min(6)
      .lowercase()
      .trim()
      .strip(),
    profilePic: Joi.string()
      .strip()
      .trim()
  });

  return credentailSchema.validate(data);
};
