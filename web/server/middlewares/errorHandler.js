function errorHandler(error, req, res, next) {
  let status;
  let message;

  switch (error.name) {
    case "NotFound":
      status = 404;
      message = "Data not Found";
      break;

    case "SequelizeValidationError":
      status = 400;
      message = error.errors[0].msg;
      break;

    case "EmailRequired":
      status = 400;
      message = "Email is required";
      break;

    case "PasswordRequired":
      status = 400;
      message = "Password is required";
      break;

    case "Invalid":
      status = 401;
      message = "Invalid email/password";
      break;

    case "Unauthorized":
    case "JsonWebTokenError":
      status = 401;
      message = "Invalid token";
      break;

    case "Forbidden":
      status = 403;
      message = "You are not authorized";
      break;
    case "AlreadyExist":
      status = 400;
      message = "Email must be unique";
      break;
    case "Above2":
      status = 400;
      message = "Minimun cast are 2";
      break;
    case "BadRequest":
      status = 400;
      message = "Bad Request";
      break;
    default:
      status = 500;
      message = "Internal Server Error";
      break;
  }
  res.status(status).json({ message });
}

module.exports = errorHandler;
