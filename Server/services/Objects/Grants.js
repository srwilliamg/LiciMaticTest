"use strict";
const Grant = require("../../models/index").grant;
const Scraper = require("../scrapers/scraper");

const Grants = module.exports;

const OBJECT = "Grants";
const scrapGrants = 'scrapGrants';
const patchGrant = 'patchGrant';
const getGrants = 'getGrants';

Grants.scrapGrants = async (uuid, logger) => {
  const logContent = `${uuid} - ${OBJECT}-${scrapGrants}`;

  logger.trace(logContent, "start");

  const searchGrantsList = await Scraper.getData();

  await Grant.destroy({truncate: true});

  await Grant.bulkCreate(searchGrantsList);

  logger.trace(logContent, "end");
  
  return Grant.findAll();
};

Grants.patchGrant = async (uuid, logger) => {
  const logContent = `${uuid} - ${OBJECT}-${patchGrant}`;

  logger.trace(logContent, "findAll");
  
  return Grant.findAll();
};

Grants.getGrants = async (uuid, logger) => {
  const logContent = `${uuid} - ${OBJECT}-${getGrants}`;

  logger.trace(logContent, "findAll");
  
  return Grant.findAll();
};
