const { createWriteStream } = require("fs");
const path = require("path");
const morgan = require("morgan");

const logFilePath = path.join(__dirname, "..", "logs", "logs.log");

const logger =
  (morgan("combined", {
    stream: createWriteStream(logFilePath, { flags: "a" }),
  }),
  morgan("dev"));

module.exports = logger;
