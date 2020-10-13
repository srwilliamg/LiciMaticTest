'use strict';

const express = require("express");
const chalk = require("chalk");
const log4js = require('log4js');

const port = process.env.PORT || 5000;

console.log(chalk.greenBright.bold("\nStarting LiciMaticTest server"));

const ErrorsHandlerMiddleware = require('./middleware/ErrorsHandlerMiddleware');
const LoggerMiddleware = require('./middleware/LoggerMiddleware');
const { logger, initLogger } = require('./utilities/Logger');

// routes file
const routes = require('./routes');

const app = express();

initLogger();

app.use(log4js.connectLogger(logger));
app.use(express.json());
app.use(LoggerMiddleware);

app.use(`/api`, routes);

app.use(ErrorsHandlerMiddleware);

app.listen(port, () =>
  console.log(chalk.blueBright.bold(`Server running on port ${port}`))
);
