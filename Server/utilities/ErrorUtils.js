'use strict';

const ErrorUtils = module.exports;

class FormattedError extends Error {
  constructor(message, status, code) {
    super(message);

    Error.captureStackTrace(this, this.constructor);

    this.status = status;
    this.code = code;
  }
}

ErrorUtils.FormattedError = FormattedError;

ErrorUtils.getErrorLog = ({ message, code }) => `${message} :: code ${code}`;
