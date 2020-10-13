"use strict";
const Grant = require("../../models/index").grant;
const Scraper = require("../Scrapers/Scraper");

const Grants = module.exports;

const MAIN_SECTION = "Grants";

Grants.scrapGrants = async (bodyData, options) => {
  const section = `${MAIN_SECTION}.scrapGrants`;
  const { logger = console } = options;

  logger.info(section, "starts");

  const searchGrantsList = await Scraper.getData();

  await Grant.destroy({truncate: true});

  await Grant.bulkCreate(searchGrantsList);

  logger.info(section, "end bulkCreate");

  return Grant.findAll();
};

Grants.patchGrant = async (bodyData, options) => {
  const section = `${MAIN_SECTION}.patchGrant`;
  const { logger = console } = options;

  logger.info(section, "starts");

  return Grant.findAll();
};

Grants.getGrants = async (bodyData, options) => {
  const section = `${MAIN_SECTION}.getGrants`;
  const { logger = console } = options;

  logger.info(section, "starts");

  return Grant.findAll();
};
