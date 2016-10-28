'use strict';

module.exports = (domains) => {
  return {
    hello: require('./hello.handlers')(domains)
  };
};
