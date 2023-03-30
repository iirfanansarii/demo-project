const express = require("express");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandlers");
const { invalidAPI } = require("./constants/error-message");

const port = process.env.PORT || 4000;

require("dotenv").config();
require("./config/connection");

const corsOptions = require("./config/corsoption");
const app = express();

app.use(logger);
app.use(corsOptions);
app.use(express.json());
app.use(errorHandler);

/* route */
const userRoute = require("./routes/user.route");
const facilityRoute = require("./routes/facility.route");
const uploadfileRoute = require("./routes/uploadfile.route");

app.use(userRoute);
app.use(facilityRoute);
app.use(uploadfileRoute);

/* Invalid Endpoint */
app.use("/*", (req, res) => {
  res.status(404).json({ message: invalidAPI });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port} `);
});
