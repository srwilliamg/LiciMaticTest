"use strict";

module.exports = (error, req, res, next) => {
  const { status = 500, message = "An error has ocurred", code = 500 } = error;
  const errorResponse = { error: { code, message } };
  return res.status(status).send(errorResponse);
};
