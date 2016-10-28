'use strict';

const app = require('express')();
const logger = require('winston');

require('./src')(app, logger, (err, configuredApp, config) => {
  if (err) {
    logger.error('Start error', err);
    // we don't want our app to start in an unstable state
    throw err;
  }
  configuredApp.listen(config.api.port, () => logger.info(`API started and listening on ${config.api.port}`));
});
