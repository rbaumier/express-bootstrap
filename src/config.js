'use strict';

module.exports = (logger) => {
  const env = require('common-env/withLogger')(logger);
  return env.getOrElseAll({
    api: {
      port: 3003
    }
  });
};
