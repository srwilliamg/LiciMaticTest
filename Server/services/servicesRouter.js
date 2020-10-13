"use strict";

const express = require("express");
const servicesRouter = express.Router();

const RequestHandler = require("../utilities/RequestHandler");
const servicesControllers = require("./controllers/servicesControllers");

servicesRouter.post(
  "/searchGrants",
  RequestHandler(servicesControllers.getSearchGrants)
);

servicesRouter.patch(
  "/searchGrants",
  RequestHandler(servicesControllers.patchGrant)
);

module.exports = servicesRouter;
