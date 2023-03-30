const errorHandler = async (err, req, res, next) => {
  const error_code = err.code || 500;
  res.status(error_code).json({
    status: error_code,
    data: {},
    msg: err.message,
  });
};

module.exports = errorHandler;
