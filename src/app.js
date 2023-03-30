require("dotenv").config();
require("./config/dbConfig");

const express = require("express");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandlers");
const { invalidAPI } = require("./constants/error-message");
const corsConfig = require("./config/corsConfig");
const port = process.env.PORT || 4000;
const app = express();

app.use(logger);
app.use(errorHandler);
app.use(corsConfig);
app.use(express.json({ limit: "50mb" }));

/* route */
const userRoute = require("./routes/user.route");
const uploadfileRoute = require("./routes/uploadfile.route");
const facilityRoute = require("./routes/facility.route");

app.use("/v1/", userRoute);
app.use("/v1/", facilityRoute);
app.use("/v1", uploadfileRoute);

/* Invalid Endpoint */
app.use("/*", (req, res) => {
  res.status(404).json({ message: invalidAPI });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port} `);
});
