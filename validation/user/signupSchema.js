const Joi = require("joi");

const signupSchema = Joi.object({
  first_name: Joi.string()
    .pattern(new RegExp("^[a-zA-Z]+$"))
    .required()
    .messages({
      "string.pattern.base": "First name should contain alphabetical only",
      "string.empty": `First name cannot be an empty field`,
      "any.required": "First name is a required field",
    }),
  last_name: Joi.string()
    .pattern(new RegExp("^[a-zA-Z]+$"))
    .required()
    .messages({
      "string.pattern.base": "Last name should contain alphabetical only",
      "string.empty": `Last name cannot be an empty field`,
      "any.required": "Last name is a required field",
    }),
  username: Joi.string().required().messages({
    "string.base": "Username should be a type of 'text'",
    "string.empty": `Username cannot be an empty field`,
    "any.required": "Username is a required field",
  }),
  password: Joi.string().required().min(6).max(50).messages({
    "string.min": `Password should have a minimum length of {#limit}`,
    "string.base": `Password should be a type of 'text'`,
    "string.empty": `Password cannot be an empty field`,
    "any.required": `Password is a required field`,
  }),
});

module.exports = signupSchema;
