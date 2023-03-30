const { fileUploaded } = require("../constants/error-message");

const uploadFile = (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(201).json({ message: fileUploaded, file });
};

module.exports = uploadFile;
