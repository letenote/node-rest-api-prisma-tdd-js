import ResponseError from "../error/ResponseError.js";

const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res.status(err.status).json({
      data: null,
      error: true,
      message: err.message
    }).end();
  } else {
    res.status(500).json({
      data: null,
      error: true,
      message: err.message
    }).end();
  }
}

export {
  errorMiddleware
}