'use strict';

module.exports = () => {
  return {
    say() {
      return `Hello`;
    },

    greet(name) {
      return `Hello ${name}!`;
    }
  };
};
