// Order of execution:
// npm i
// to run just the tests: npm test
// to test code coverage: npm run coverage
let mocha = require('mocha');
let chai = require('chai');
let describe = mocha.describe;
let expect = chai.expect;
let assert = require('chai').assert;

chai.should();