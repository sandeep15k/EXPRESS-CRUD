const { constant } = require("../constant");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.status ? res.status : 500;
  switch (statusCode) {
    case constant.VALIDATION_FAILED:
      res.json({
        title: "Validation failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constant.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constant.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constant.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log("No error");
      break;
  }
  res.json({ title: "Not found", message: err.message, stackTrace: err.stack });
};
module.exports = errorHandler;
