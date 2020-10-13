"use strict";

const log4js = require("log4js");

const Logger = module.exports;

Logger.initLogger = () => {
  log4js.configure({
    appenders: { LiciMaticTestLogs: { type: "file", filename: "LiciMaticTestLogs.log" } },
    categories: {
      default: { appenders: ["LiciMaticTestLogs"], level: "debug" },
    },
  });
};

Logger.logger = log4js.getLogger("LiciMaticTestLogs");
