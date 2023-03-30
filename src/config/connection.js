const { Sequelize } = require("sequelize");
const { DB_NAME, DB_ADMIN_NAME, DB_ADMIN_PASS, DB_HOSTNAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_ADMIN_NAME, DB_ADMIN_PASS, {
  host: DB_HOSTNAME,
  dialect: "mysql",
  logging: false,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

sequelize.sync({ force: false });
module.exports = sequelize;
