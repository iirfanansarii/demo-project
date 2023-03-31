const router = require("express").Router();
const path = require("path");
const uploadFile = require("../controllers/upload.controller");
const fileUpload = require("../helper/upload");

const upload = fileUpload(path.join(__dirname, process.env.UPLOAD_FILE_PATH));
const authToken = require("../middlewares/authToken");

router.post("/upload/file", [authToken, upload.single("demofile")], uploadFile);

module.exports = router;
