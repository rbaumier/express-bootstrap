'use strict';

module.exports = (domains) => {
  return {
    say(req, res) {
      res.send(domains.Hello.say());
    },

    greet(req, res) {
      res.send(domains.Hello.greet(req.params.name));
    }
  };
};
