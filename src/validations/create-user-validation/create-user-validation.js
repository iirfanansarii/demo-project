const { registerUser } = require("./create-user-validation-schema");

const registerUserValidation = async (req, res, next) => {
  const value = await registerUser.validate(req.body);
  if (value.error) {
    return res.json({
      message: value.error.details[0].message,
    });
  }
  // next(value.error);
};

module.exports = registerUserValidation;
