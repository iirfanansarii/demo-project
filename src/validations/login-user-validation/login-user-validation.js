const { loginUser } = require("./login-user-validation-schema");

const loginUserValidation = async (req, res, next) => {
  const value = await loginUser.validate(req.body);
  if (value.error) {
    return res.json({
      message: value.error.details[0].message,
    });
  }
  next();
};

module.exports = loginUserValidation;
