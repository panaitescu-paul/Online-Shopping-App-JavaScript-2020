// Order of execution:
// ls / dir
// cd to folder
// npm i
// to run just the tests: npm test
// to test code coverage: npm run coverage
let mocha = require('mocha');
let chai = require('chai');
let describe = mocha.describe;
let expect = chai.expect;
let assert = require('chai').assert;

chai.should();

const loadJsonFile = require('load-json-file');

let Purchase = require("../ma2-testing-project/purchase");

describe('Purchase', () => {
    describe('Product quantity', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('', () => {
            it('should be a boolean', () => {
                console.log(PRODUCTS);
                // purchase.internetConnection(true);
                // assert.isBoolean(purchase.isInternetConnection);
            });
            it('should only accept boolean values', () => {
                // const invalidValues = ['true', 1, 1.1];
                // const errorMessage = 'isInternetConnectionChecked must be a boolean.';
                // for (let i = 0; i < invalidValues.length; i++) {
                //     console.log(invalidValues[i]);
                //     expect(() => purchase.internetConnection(invalidValues[i])).to.throw(errorMessage);
                // }
            });
        });

        describe('', () => {
            it('should be equal with true', () => {
                // purchase.internetConnection(true);
                // purchase.isInternetConnection.should.equal(true);
            });
        });
    });
    describe('First name', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('', () => {

        });
    });
    describe('Last name', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('', () => {

        });
    });
    describe('Age', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('', () => {

        });
    });
    describe('Email', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('', () => {

        });
    });
    describe('Address', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('', () => {

        });
    });
    describe('Card number', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('', () => {

        });
    });
    describe('Card security code', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('', () => {

        });
    });
    describe('Delivery option', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('', () => {

        });
    });
    describe('Buy products', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('', () => {

        });
    });
});
