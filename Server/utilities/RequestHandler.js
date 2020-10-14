"use strict";

const requestHandler = "RequestHandler";

module.exports = (callback) => async (req, res, next) => {
  const { logger = console } = req;
  const requestContent = `
  params: ${JSON.stringify(req.params)}
  query data: ${JSON.stringify(req.query)}
  body data: ${JSON.stringify(req.body)}
  `;

  logger.trace(requestHandler, `${req.uuid} Request:${requestContent}`);

  try {
    await callback(req, res, next);
  } catch (e) {
    logger.error(requestHandler, `${e.code}: ${e.message}`);
    next(e);
  }
};
