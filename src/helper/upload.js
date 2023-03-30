const multer = require("multer");
const shortid = require("shortid");

const fileUpload = (uploadPath) => {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, uploadPath);
    },
    filename(req, file, cb) {
      cb(null, `${shortid.generate()}-${file.originalname}`);
    },
  });
  const upload = multer({ storage });
  return upload;
};

module.exports = fileUpload;
