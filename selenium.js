// Order of execution:
// npm i
// to run just the tests: npm run selenium
const {Builder, By} = require('selenium-webdriver');
let mocha = require('mocha');
let chai = require('chai');
let describe = mocha.describe;
let chrome = require('selenium-webdriver/chrome');
let chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

chai.should();
const sleepTime = 1000;
let driver = new Builder().forBrowser('chrome').build();