const {
  getFacility,
  addFacility,
} = require("../controllers/facility.controller");

const authToken = require("../middlewares/authToken");

const router = require("express").Router();

router.post("/facility", authToken, addFacility);
router.get("/facilities", authToken, getFacility);

module.exports = router;
