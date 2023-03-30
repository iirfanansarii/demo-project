const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Facility = sequelize.define(
  "Facility",
  {
    Facility_Id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
    },
    Facility_Name: {
      type: DataTypes.STRING(30),
    },
    Facility_Phone: {
      type: DataTypes.INTEGER,
    },
    Facility_Emergency_Phone: {
      type: DataTypes.INTEGER,
    },
    Facility_On_Call_Number: {
      type: DataTypes.INTEGER,
    },
    Facility_Form_Details: {
      type: DataTypes.STRING(10),
    },
    Facility_Start_Date: {
      type: DataTypes.DATE,
    },
    Facility_End_Date: {
      type: DataTypes.DATE,
    },
    Facility_Expiry_Date: {
      type: DataTypes.DATE,
    },
    Facility_Street: {
      type: DataTypes.STRING(25),
    },
    Facility_City: {
      type: DataTypes.STRING(10),
    },
    Facility_State: {
      type: DataTypes.STRING(10),
    },
    Facility_Zip: {
      type: DataTypes.INTEGER,
    },
    Facility_Mailing_Address: {
      type: DataTypes.STRING(30),
    },
    Facility_Latitude: {
      type: DataTypes.STRING(10),
    },
    Facility_Longitude: {
      type: DataTypes.STRING(10),
    },
    Facility_24: {
      type: DataTypes.INTEGER,
    },
    Facility_Capacity: {
      type: DataTypes.INTEGER,
    },
    Facility_Email: {
      type: DataTypes.STRING(20),
    },
  },
  {
    tableName: "Facility",
  }
);

module.exports = Facility;
