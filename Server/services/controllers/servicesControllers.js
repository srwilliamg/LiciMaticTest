'use strict';

const ServiceControllers = module.exports;

const Grants = require('../Objects/Grants');
const MAIN_SECTION = 'serviceControllers';

ServiceControllers.scrapGrants = async (req, res) => {
  const section = `${MAIN_SECTION}.scrapGrants`;
  const { body: bodyData, logger = console } = req;

  logger.info(section, 'starts');

  const response = await Grants.scrapGrants(bodyData, { logger });

  res.send(response);
};

ServiceControllers.patchGrant = async (req, res) => {
  const section = `${MAIN_SECTION}.patchGrant`;
  const { body: bodyData, logger = console } = req;

  logger.info(section, 'starts');

  const response = await Grants.patchGrant(bodyData, { logger });
  
  res.send(response);
};

ServiceControllers.getGrants = async (req, res) => {
  const section = `${MAIN_SECTION}.getGrants`;
  const { body: bodyData, logger = console } = req;

  logger.info(section, 'starts');

  const response = await Grants.getGrants(bodyData, { logger });
  
  res.send(response);
};
