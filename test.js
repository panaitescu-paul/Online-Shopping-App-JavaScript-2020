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

        describe('check email datatype', () => {
            it('should accept string values', function () {
                const validValues = ["", "asd", "asd@fgh.jkl"];

                validValues.forEach(value => {
                    expect(() => purchase.setEmail(value)).to.not.throw('email must be a string.');
                })
            });

            it('should not accept anything other than string values', function () {
                const invalidValues = [1, 1.1, true, null, undefined];

                invalidValues.forEach(value => {
                    expect(() => purchase.setEmail(value)).to.throw('email must be a string.');
                })
            });
        });

        describe('check email length', () => {
            it('should not accept empty string values', function () {
                const invalidValues = [""];

                invalidValues.forEach(value => {
                    expect(() => purchase.setEmail(value)).to.throw('Email cannot be empty.');
                })
            });

            it('should not accept string values longer than 60 characters', function () {
                const invalidValues = ["asdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfg1",
                    "asdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfg12"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setEmail(value)).to.throw('Email cannot be longer than 60 characters.');
                })
            });

            it('should accept string values shorten than 60 characters', function () {
                const validValues = ["asd@email.com", "asd98714@email.com", "asdfgh@email.com"];

                validValues.forEach(value => {
                    expect(() => purchase.setEmail(value)).to.not.throw('Email cannot be longer than 60 characters.');
                })
            });
        });

        describe('check email formatting', () => {
            it('should not accept invalid email formats', function () {
                const invalidValues = ["asdfgh.com", "asd98714@2134com", "asdfghemailro"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setEmail(value)).to.throw('Email is of incorrect formatting.');
                })
            });

            it('should accept valid email formats', function () {
                const validValues = ["asd@fgh.com", "asd98714@2134.com", "asdfgh@email.ro"];

                validValues.forEach(value => {
                    expect(() => purchase.setEmail(value)).to.not.throw('Email is of incorrect formatting.');
                })
            });
        });

        describe('check assigned value', () => {
            it('should assign a string value to the variable', function () {
                const validValue = "asd@fgh.com";

                purchase.setEmail(validValue);
                assert.isString(purchase.buyer.email);
            });

            it('should assign valid emails to the variable', function () {
                const validValues = ["asd@fgh.com", "asd98714@2134.com", "asdfgh@email.ro"];

                validValues.forEach(value => {
                    purchase.setEmail(value);
                    purchase.buyer.email.should.equal(value);
                })
            });
        });
    });
    describe('Address', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('check address datatype', () => {
            it('should accept string values', function () {
                const validValues = ["asd-14", "asd. 14, Footown Barvenue", "asd-14, Foo. Barvenue, 2630 Yeetsville, Republic of Kekistan"];

                validValues.forEach(value => {
                    expect(() => purchase.setAddress(value)).to.not.throw('address must be a string.');
                })
            });

            it('should not accept anything other than string values', function () {
                const invalidValues = [1, 1.1, true, null, undefined];

                invalidValues.forEach(value => {
                    expect(() => purchase.setAddress(value)).to.throw('address must be a string.');
                })
            });
        });

        describe('check address length', () => {
            it('should not accept empty string values', function () {
                const invalidValues = [""];

                invalidValues.forEach(value => {
                    expect(() => purchase.setAddress(value)).to.throw('Address cannot be empty.');
                })
            });

            it('should not accept string values longer than 120 characters', function () {
                const invalidValues = ["asdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfg1",
                    "asdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfgasdfg12"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setAddress(value)).to.throw('Address cannot be longer than 120 characters.');
                })
            });

            it('should accept string values shorten than 120 characters', function () {
                const validValues = ["asd-14", "asd. 14, Footown Barvenue", "asd-14, Foo. Barvenue, 2630 Yeetsville, Republic of Kekistan"];

                validValues.forEach(value => {
                    expect(() => purchase.setAddress(value)).to.not.throw('Address cannot be longer than 120 characters.');
                })
            });
        });

        describe('check address formatting', () => {
            it('should accept valid address formats', function () {
                const validValues = ["asd-14", "asd. 14, Footown Barvenue", "asd-14, Foo. Barvenue, 2630 Yeetsville, Republic of Kekistan"];

                validValues.forEach(value => {
                    expect(() => purchase.setAddress(value)).to.not.throw('Address is of incorrect formatting.');
                })
            });

            it('should not accept invalid email formats', function () {
                const invalidValues = ["asd+14", "a$d. 14, Footown_Barvenue", "asd@14, Foo. Barvenue, 2630 Y€€tsville, Republic of K€kistan"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setAddress(value)).to.throw('Address is of incorrect formatting.');
                })
            });
        });

        describe('check assigned value', () => {
            it('should assign a string value to the variable', function () {
                const validValue = "asd. 14, Footown Barvenue";

                purchase.setAddress(validValue);
                assert.isString(purchase.shippingInfo.address);
            });

            it('should assign valid addresses to the variable', function () {
                const validValues = ["asd-14", "asd. 14, Footown Barvenue", "asd-14, Foo. Barvenue, 2630 Yeetsville, Republic of Kekistan"];

                validValues.forEach(value => {
                    purchase.setAddress(value);
                    purchase.shippingInfo.address.should.equal(value);
                })
            });
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
