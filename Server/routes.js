'use strict';

const express = require('express');

const servicesRouter = require('./services/servicesRouter');

const routes = express.Router();

routes.use('/services', servicesRouter);

module.exports = routes;
