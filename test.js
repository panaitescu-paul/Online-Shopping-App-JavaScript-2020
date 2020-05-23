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

        describe('Check the product id', () => {
            it('should accept string values', () => {
                const validValues = ["", "2", "sdaasad", "33", "-33.22", "false"];

                validValues.forEach(value => {
                    expect(() => purchase.setProductQuantity(value, 2)).to.not.throw('id must be a string.');
                });
            });
            it('should throw an error message if the id is not a string', () => {
                const invalidValues = [1, 33, 2.44, true, -99];

                invalidValues.forEach(value => {
                    expect(() => purchase.setProductQuantity(value, 4)).to.throw('id must be a string.');
                });
            });
            it('should throw an error message if the id is not in the list of products', () => {
                const invalidValues = ["-1", "22", "100", "id", "true"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setProductQuantity(value, 4)).to.throw('Invalid product id.');
                });
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
