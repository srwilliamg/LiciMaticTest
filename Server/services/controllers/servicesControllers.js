'use strict';

const ServiceControllers = module.exports;

const Test = require('../Objects/Test');
const MAIN_SECTION = 'serviceControllers';

ServiceControllers.getSearchGrants = async (req, res) => {
  const section = `${MAIN_SECTION}.getSearchGrants`;
  const { body: bodyData, logger = console } = req;

  logger.info(section, 'starts');

  const response = await Test.getSearchGrants(bodyData, { logger });

  res.send({ message: response });
};

ServiceControllers.patchGrant = async (req, res) => {
  const section = `${MAIN_SECTION}.patchGrant`;
  const { body: bodyData, logger = console } = req;

  logger.info(section, 'starts');

  const response = await Test.patchGrant(bodyData, { logger });
  
  res.send({ message: response });
};
