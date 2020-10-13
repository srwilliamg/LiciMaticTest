'use strict';

const ErrorUtils = require('./ErrorUtils');

module.exports = (handler) => async (req, res, next) => {
  const { logger = console } = req;
  const section = 'RequestHandler';
  const requestContent = `params: ${JSON.stringify(req.params)}
  query data: ${JSON.stringify(req.query)}
  body data: ${JSON.stringify(req.body)}`;

  logger.info(section, `Request:${requestContent}`);

  try {
    await handler(req, res, next);
  } catch (error) {
    logger.error(section, ErrorUtils.getErrorLog(error));

    next(error);
  }
};
