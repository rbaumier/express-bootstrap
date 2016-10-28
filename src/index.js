'use strict';
require('./bootstrap');

module.exports = function(app, logger, f) {
  const config = require('./config')(logger);
  const services = require('./services')(config);

  // this is where you should connect your database, if you have one

  const domains = require('./domains')();

  require('./api')(app, domains, services, config, logger, f);
};
