const joi = require("joi");

const registerUserSchema = {
  registerUser: joi.object({
    username: joi.string().trim().min(5).max(100).empty().required().messages({
      "string.empty": "Enter user name ",
      "string.min": "Username should not be less than of {#limit} character",
      "string.max": "Username should not be more than of  {#limit} character",
    }),

    email: joi
      .string()
      .trim()
      .empty()
      .pattern(
        new RegExp(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      )
      .required()
      .messages({
        "string.empty": "Enter your email",
        "string.pattern.base": "Enter a valid email",
      }),

    userpass: joi
      .string()
      .empty()
      .min(8)
      .max(15)
      .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/)
      .required()
      .messages({
        "string.empty": "Enter your password",
        "string.min": "Your password must contain at least {#limit} character",
        "string.max":
          "Your password should not contain more than {#limit} character",
        "string.pattern.base":
          "Your password must contain at least one uppercase character, one lowercase character, one digit, and one special character.",
        "string.base": '{#label} should be a type of "text"',
      }),

    isAdmin: joi.boolean().optional(),
  }),
};

module.exports = registerUserSchema;
