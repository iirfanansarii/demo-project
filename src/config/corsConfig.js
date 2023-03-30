const cors = require("cors");

const whiteList = [
  'https://mysite.com',
  'http://localhost:3000'
];

const corsOptions ={
  origin: (origin,callback)=>{ 
      if(whiteList.includes(origin) || !origin){ 
          callback(null,true) 
      }
      else{
          callback(new Error('Not allowed by CORS'));
      }
  },
  optionSuccessStatus: 200
}

module.exports = cors(corsOptions);
