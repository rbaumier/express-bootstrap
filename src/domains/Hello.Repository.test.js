'use strict';
require('../bootstrap.test.js');

const HelloRepo = require('./Hello.Repository')();

describe('Hello.Repository', () => {
  beforeEach(done => {
    done();
  });

  afterEach(done => {
    done();
  });

  it('should say hello', done => {
    t.strictEqual(HelloRepo.say(), 'Hello');
    done();
  });

  it('should greet me', done => {
    t.strictEqual(HelloRepo.greet('John'), 'Hello John!');
    done();
  });
});
