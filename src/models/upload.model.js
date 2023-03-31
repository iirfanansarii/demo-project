const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Upload = sequelize.define( "upload",
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    file_path: {
      type: DataTypes.STRING(100),
    }
  });

module.exports = Upload;
