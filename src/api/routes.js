'use strict';

const bodyParser = require('body-parser');
const compression = require('compression');

module.exports = (app, domains, services, config, logger, f) => {
  const handlers = require('./handlers')(domains, config, logger);

  app.use(compression({ threshold: 512 }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/hello', handlers.hello.say);
  app.get('/hello/:name', handlers.hello.greet);

  f(null, app, config);
};
