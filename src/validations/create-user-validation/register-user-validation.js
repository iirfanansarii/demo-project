const { registerUser } = require("./register-user-validation-schema");

const registerUserValidation = async (req, res, next) => {
  const value = await registerUser.validate(req.body);
  if (value.error) {
    return res.json({
      message: value.error.details[0].message,
    });
  }
};

module.exports = registerUserValidation;
