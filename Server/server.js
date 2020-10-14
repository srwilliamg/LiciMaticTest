'use strict';

const express = require("express");
const chalk = require("chalk");
const log4js = require('log4js');
const cors = require('cors');

const port = process.env.PORT || 5000;

console.log(chalk.greenBright.bold("\nStarting LiciMaticTest server"));

const ErrorsMiddleware = require('./middleware/errorsMiddleware');
const LogMiddleware = require('./middleware/logMiddleware');
const {initLogger } = require('./utilities/logger');

// routes file
const routes = require('./routes');

const app = express();

initLogger();

app.use(express.json());
app.use(LogMiddleware);
app.use(cors());

const whitelist = [process.env.REACT_APP_API_URL];
const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {
      origin: true
    };
  } else {
    corsOptions = {
      origin: false
    };
  }

  return callback(null, corsOptions);
};

cors(corsOptionsDelegate);

app.use(`/api`, routes);

app.use(ErrorsMiddleware);

app.listen(port, () =>
  console.log(chalk.blueBright.bold(`Server running on port ${port}`))
);
