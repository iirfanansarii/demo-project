const express = require("express");
const logger = require("./middlewares/logger");
const port = process.env.PORT || 4000;

require("dotenv").config();
require("./config/connection");

const corsOptions = require("./config/corsoption");
const app = express();

app.use(logger);
app.use(corsOptions);
app.use(express.json());

const userRoute = require("./routes/user.route");
const facilityRoute = require("./routes/facility.route");

app.use(userRoute);
app.use(facilityRoute);

app.listen(port, () => {
  console.log(`server is listening on port ${port} `);
});
