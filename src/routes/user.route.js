const {
  registerUser,
  login,
  users,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/user/register", registerUser);
router.post("/user/login", login);
router.get("/users", users);

module.exports = router;
