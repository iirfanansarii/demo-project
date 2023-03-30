const uploadFile = (req, res) => {
  const file = req.file;
  console.log(file);
};

module.exports = uploadFile;
