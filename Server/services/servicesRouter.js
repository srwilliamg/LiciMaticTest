"use strict";

const express = require("express");
const servicesRouter = express.Router();

const RequestHandler = require("../utilities/requestHandler");
const servicesControllers = require("./controllers/servicesControllers");

servicesRouter.post(
  "/grants",
  RequestHandler(servicesControllers.scrapGrants)
);

servicesRouter.get(
  "/grants",
  RequestHandler(servicesControllers.getGrants)
);

// TODO
servicesRouter.patch(
  "/grants",
  RequestHandler(servicesControllers.patchGrant)
);


module.exports = servicesRouter;
