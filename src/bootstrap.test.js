'use strict';
require('./bootstrap');

// You must require this file inside each tests
// or use mocha -r bootstrap.test.js
// (-r === require file)

global.chai = require('chai');
global.t = chai.assert;
// you might also want to uncomment the following lines for promise-based tests
// chai.use(require('chai-as-promised'));
// chai.should();
