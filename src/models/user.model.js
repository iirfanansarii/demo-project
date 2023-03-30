const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const User = sequelize.define(
  "Users",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    userpass: {
      type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "Users",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);

module.exports = User;
