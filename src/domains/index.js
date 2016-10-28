'use strict';

module.exports = () => {
  return {
    Hello: require('./Hello.Repository')()
  };
};
