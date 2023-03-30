const router = require("express").Router();
const registerUserValidation = require("../validations/create-user-validation/create-user-validation");
const loginUserValidation = require("../validations/login-user-validation/login-user-validation");

const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/users.controller");

router.post("/user/register", registerUserValidation, registerUser);
router.post("/user/login", loginUserValidation, loginUser);
router.get("/users", getUsers);

module.exports = router;
