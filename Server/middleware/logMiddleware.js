'use strict';

const { logger } = require('../utilities/logger');
const { v4: uuidv4 } = require('uuid');

module.exports = (req, res, next) => {
  req.uuid = uuidv4();
  req.logger = logger;
  return next();
};
