var chai = require('chai');
var secret = require('../04-hoisting');
var expect = chai.expect;

describe('04-hoisting', function () {
  it('Can get secret', function () {
    expect(secret).to.equal('butts');
  });
});
