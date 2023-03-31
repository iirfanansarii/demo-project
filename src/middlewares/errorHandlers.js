const errorHandler = async (err, req, res, next) => {

  console.log("ERROR IN ERROR HANLDER ", err);
  console.log(err.stack);
 if (err.parent.sqlMessage && err.parent.sqlState) {

    res.status(500).json({
      status: 500,
      data: {},
      msg: err.parent.sqlMessage || " DB error has occurred."
    });

  }

else{
  const error_code = err.code || 500;
  res.status(error_code).json({
    status: error_code,
    data: {},
    msg: err.message ||"An application error has occurred.",
  });
};

}
module.exports = errorHandler;
