require("dotenv").config();
const express = require("express");
const logger = require("./middlewares/logger");
const port = process.env.PORT || 4000; 
let multer = require('multer');


require("./config/connection");

const corsConfig = require("./config/corsConfig");
const app = express();

app.use(logger);
app.use(corsConfig);
app.use(express.json({limit: '50mb'}));

const userRoute = require("./routes/user.route");
const facilityRoute = require("./routes/facility.route");

//app.use(multer({ dest: './uploads/' }));
app.use('/v1/',userRoute);
app.use('/v1/',facilityRoute);

app.listen(port, () => {
  console.log(`server is listening on port ${port} `);
});
