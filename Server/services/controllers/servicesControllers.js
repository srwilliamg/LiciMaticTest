'use strict';

const ServiceControllers = module.exports;

const Grants = require('../Objects/Grants');
const CONTROLLER = 'serviceControllers';
const scrapGrants = 'scrapGrants';
const patchGrant = 'patchGrant';
const getGrants = 'getGrants';

ServiceControllers.scrapGrants = async (req, res) => {
  const { logger, uuid } = req;
  const controllerService = `${uuid} - ${CONTROLLER}-${scrapGrants}`;

  logger.trace(controllerService, 'start');

  const response = await Grants.scrapGrants(uuid, logger);

  logger.trace(controllerService, 'end');

  res.send(response);
};

ServiceControllers.patchGrant = async (req, res) => {
  const { logger, uuid } = req;
  const controllerService = `${uuid} - ${CONTROLLER}-${patchGrant}`;

  logger.trace(controllerService, 'start');

  const response = await Grants.patchGrant(uuid, logger);
  
  logger.trace(controllerService, 'end');

  res.send(response);
};

ServiceControllers.getGrants = async (req, res) => {
  const { logger, uuid } = req;
  const controllerService = `${uuid} - ${CONTROLLER}-${getGrants}`;

  logger.trace(controllerService, 'start');

  const response = await Grants.getGrants(uuid, logger);

  logger.trace(controllerService, 'end');
  
  res.send(response);
};
