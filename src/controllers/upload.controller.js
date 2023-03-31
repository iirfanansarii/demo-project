const { fileUploaded } = require("../constants/error-message");
const Upload = require("../models/upload.model");

const uploadFile = async (req, res ,next) => {
  let {id:userId} = req.user;
  const file = req.file;
  
  try{

  await Upload.create({
    user_id:userId,
    file_path:file.path
  });
  
  res.status(201).json({ message: fileUploaded, file });
}
catch(error){
  next(error)
}
};

module.exports = uploadFile;
