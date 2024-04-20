const Joi = require("joi");

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    "string.base": "Username should be a type of 'text'",
    "string.empty": `Username cannot be an empty field`,
    // "string.min": `username should have a minimum length of {#limit}`,
    "any.required": "Username is a required field",
  }),
  password: Joi.string().required().messages({
    "string.base": `Password should be a type of 'text'`,
    "string.empty": `Password cannot be an empty field`,
    // "string.min": `username should have a minimum length of {#limit}`,
    "any.required": `Passworf is a required field`,
  }),
});

module.exports = loginSchema;
