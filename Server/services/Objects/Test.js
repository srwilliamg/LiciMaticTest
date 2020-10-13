"use strict";
const Grant = require("../../models/index").grant;
const Scraper = require("../Scrapers/Scraper");

const Test = module.exports;

const MAIN_SECTION = "Test";

Test.getSearchGrants = async (bodyData, options) => {
  const section = `${MAIN_SECTION}.getSearchGrants`;
  const { logger = console } = options;
  
  logger.info(section, "starts");

  const searchGrantsList = await Scraper.getData();

  await Grant.bulkCreate(searchGrantsList);

  logger.info(section, "end bulkCreate");

  return Grant.findAll();
};

Test.patchGrant = async (bodyData, options) => {
  const section = `${MAIN_SECTION}.patchGrant`;
  const { logger = console } = options;
  
  logger.info(section, "starts");

  // const updateFields = bodyData;
  // const grant = req.user;
  // const validFields = Object.keys(grant.get({
  //   plain: true
  // }));

  // const isValidRequest = updateFields.every((updateField) => validFields.includes(updateField));
  
  // if(!isValidRequest){
  //   response = {};
  //   response.message = "Invalid fields in the request.";
  //   response.error = "002";
  //   res.status(503).json(response);
  // }

  // updateFields.forEach(field => {
  //   user[field] = req.body[field];
  // });

  // await grant.save();

  // logger.info(section, "end bulkCreate");

  return Grant.findAll();
};