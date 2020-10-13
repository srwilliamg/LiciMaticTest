"use strict";

const express = require("express");
const servicesRouter = express.Router();

const RequestHandler = require("../utilities/RequestHandler");
const servicesControllers = require("./controllers/servicesControllers");

servicesRouter.post(
  "/grants",
  RequestHandler(servicesControllers.scrapGrants)
);

servicesRouter.patch(
  "/grants",
  RequestHandler(servicesControllers.patchGrant)
);

servicesRouter.get(
  "/grants",
  RequestHandler(servicesControllers.getGrants)
);

module.exports = servicesRouter;
