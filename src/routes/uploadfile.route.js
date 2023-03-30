const router = require("express").Router();
const path = require("path");
const uploadFile = require("../controllers/upload.controller");
const fileUpload = require("../helper/upload");

const upload = fileUpload(path.join(__dirname, process.env.UPLOAD_FILE_PATH));

router.post("/upload/file", upload.single("demofile"), uploadFile);

module.exports = router;
