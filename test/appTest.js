const assert = require('chai').assert;
const app = require('../app.js');
const chai = require('chai'); // another way of doing things
const expect = chai.expect;

describe('App', function() {
  it('App should return "hello"', function() {
    assert.equal(app.sayHello(), 'hello');
  }),

  it('App method sayHi should return "hi"', function() {
    // it's generally a good idea to store the values in a variable
    let result = app.sayHi();
    assert.equal(result, 'hi');
  }),

  // test typeOf
  it('sayHi should return type string', function() {
    let result = app.sayHi();
    assert.typeOf(result, 'string');
  }),

  // Use natural language test
  it('addNumbers returns a number', function() {
    expect(app.addNumbers(0, 1)).to.be.a("number");
  })

})
