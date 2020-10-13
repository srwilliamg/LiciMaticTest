'use strict';

const { logger } = require('../utilities/Logger');

module.exports = (req, res, next) => {
  req.logger = logger;

  return next();
};
