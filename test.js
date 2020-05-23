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
    });
    describe('First name', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('Check the first name data type', () => {
            it('should accept string values', () => {
                const validValues = ["", "Name", "sdaasad", "33", "-33.22", "false"];

                validValues.forEach(value => {
                    expect(() => purchase.setFirstName(value)).to.not.throw('firstName must be a string.');
                });
            });
            it('should throw an error if the first name is not a string', () => {
                const invalidValues = [1, 33, 2.44, true, -99];

                invalidValues.forEach(value => {
                    expect(() => purchase.setFirstName(value)).to.throw('firstName must be a string.');
                });
            });
        });

        describe('Check the first name length', () => {
            it('should throw an error if the first name is shorter than 2 characters', () => {
                const invalidValues = ["", "T", "S", "1"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setFirstName(value)).to.throw('First Name cannot be shorter than 2 characters.');
                });
            });
            it('should accept characters longer than 2 for the first name', () => {
                const validValues = ["To", "12", "Mi", "Jack", "Lawrence"];

                validValues.forEach(value => {
                    expect(() => purchase.setFirstName(value)).to.not.throw('First Name cannot be shorter than 2 characters.');
                });
            });
            it('should throw an error if the first name is longer than 40 characters', () => {
                const invalidValues = ["12345678901234567890123456789012345678901", "sasasddsfsfdfsddsadsdssdfdasffdsfdasdsddssdafasdfasdsdfsfdaasfd"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setFirstName(value)).to.throw('First Name cannot be longer than 40 characters.');
                });
            });
            it('should accept characters shorter than 40 for the first name', () => {
                const validValues = ["James", "Thomas", "1234567890123456789012345678901234567890", "Lawrence"];

                validValues.forEach(value => {
                    expect(() => purchase.setFirstName(value)).to.not.throw('First Name cannot be longer than 40 characters.');
                });
            });
        });
        describe('Check the first name formatting', () => {
            it('should throw an error if the first name is of incorrect formatting', () => {
                const invalidValues = ["NULL", "21211221", "lawrence", "james", "Constantin-razvan", "constantin-razvan", "constantin-Razvan", "true",
                "Răzvan", "发发发发", "Razvan!!!!", "Constantin#", "Itziar-Ituño"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setFirstName(value)).to.throw('First Name is of incorrect formatting.');
                });
            });
            it('should accept character for first name of correct formatting', () => {
                const validValues = ["Lawrence", "James", "Constantin-Razvan", "Mark-Daniel", "Gustaf-Skarsgård", "Alex-Høgh"];

                validValues.forEach(value => {
                    expect(() => purchase.setFirstName(value)).to.not.throw('First Name is of incorrect formatting.');
                });
            });
        });
        describe('Check the first name assigned value', () => {
            it('should assign a string value to the variable', () => {
                purchase.setFirstName("Constantin-Razvan")
                assert.isString(purchase.buyer.firstName);
            });
            it('should be equal with the chosen value', () => {
                const validValues = ["Constantin-Razvan", "Marius-Daniel", "Dragos-Andrei", "Paul"];

                validValues.forEach(value => {
                    purchase.setFirstName(value);
                    purchase.buyer.firstName.should.equal(value);
                });
            });
        });
    });
    describe('Last name', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('Check the last name data type', () => {
            it('should accept string values', () => {
                const validValues = ["", "Name", "dsvasvdsd", "22", "-111.1", "true"];

                validValues.forEach(value => {
                    expect(() => purchase.setLastName(value)).to.not.throw('lastName must be a string.');
                });
            });
            it('should throw an error if the last name is not a string', () => {
                const invalidValues = [0, 2, 5.102, true, -39];

                invalidValues.forEach(value => {
                    expect(() => purchase.setLastName(value)).to.throw('lastName must be a string.');
                });
            });
        });

        describe('Check the last name length', () => {
            it('should throw an error if the last name is shorter than 2 characters', () => {
                const invalidValues = ["", "M", "Z", "1", "-"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setLastName(value)).to.throw('Last Name cannot be shorter than 2 characters.');
                });
            });
            it('should accept characters longer than 2 for the last name', () => {
                const validValues = ["To", "12", "Vilanova", "Morrison", "Andersen", "false"];

                validValues.forEach(value => {
                    expect(() => purchase.setLastName(value)).to.not.throw('Last Name cannot be shorter than 2 characters.');
                });
            });
            it('should throw an error if the last name is longer than 60 characters', () => {
                const invalidValues = ["1234567890123456789012345678901234567890123456789012345678901", "jhfjsdhsfjdfjdsjkfdskjfdsjfdsjkfjksdfjksdjkfdsjfkdsjkfsdfjdsjkfdskjfdskjfsdjkfdjkffdjksfdsjkfsjkdfds"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setLastName(value)).to.throw('Last Name cannot be longer than 60 characters.');
                });
            });
            it('should accept characters shorter than 60 for the last name', () => {
                const validValues = ["James", "Thomas", "123456789012345678901234567890123456789012345678901234567890", "Shouldacceptcharactersshorterthan60forthelastname"];

                validValues.forEach(value => {
                    expect(() => purchase.setLastName(value)).to.not.throw('Last Name cannot be longer than 40 characters.');
                });
            });
        });
        describe('Check the last name formatting', () => {
            it('should throw an error if the last name is of incorrect formatting', () => {
                const invalidValues = ["NULL", "21211221", "eriksen", "mocanasu", "Constantin-razvan", "constantin-razvan", "constantin-Razvan", "true",
                    "Țărău", "发发发发", "Panaitescu!!!!", "Munteanu#", "Corberó"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setLastName(value)).to.throw('Last Name is of incorrect formatting.');
                });
            });
            it('should accept character for last name of correct formatting', () => {
                const validValues = ["Tarau", "Corbero", "Munteanu", "Panaitescu", "Skarsgård", "Ilsø", "Århus", "Ellebæk"];

                validValues.forEach(value => {
                    expect(() => purchase.setLastName(value)).to.not.throw('Last Name is of incorrect formatting.');
                });
            });
        });
        describe('Check the last name assigned value', () => {
            it('should assign a string value to the variable', () => {
                purchase.setLastName("Ellebæk")
                assert.isString(purchase.buyer.lastName);
            });
            it('should be equal with the chosen value', () => {
                const validValues = ["Tarau", "Munteanu", "Mocanasu", "Panaitescu"];

                validValues.forEach(value => {
                    purchase.setLastName(value);
                    purchase.buyer.lastName.should.equal(value);
                });
            });
        });
    });
    describe('Age', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('Check the age data type', () => {
            it('should accept number values', () => {
                const validValues = [0, -999, 12, 1099999];

                validValues.forEach(value => {
                    expect(() => purchase.setAge(value)).to.not.throw('age must be a number.');
                });
            });
            it('should throw an error if the age is not a number', () => {
                const invalidValues = ["", "1", true, "character"]; // 22.22

                invalidValues.forEach(value => {
                    expect(() => purchase.setAge(value)).to.throw('age must be a number.');
                });
            });
        });

        describe('Check the age boundaries', () => {
            it('should throw an error if the age is smaller than 14', () => {
                const invalidValues = [13, 12, 0, 1, 6, 7, -1, -14];

                invalidValues.forEach(value => {
                    expect(() => purchase.setAge(value)).to.throw('Age cannot be smaller than 14.');
                });
            });
            it('should accept age bigger than 14', () => {
                const validValues = [14, 15, 22, 100, 114, 150, 149];

                validValues.forEach(value => {
                    expect(() => purchase.setAge(value)).to.not.throw('Age cannot be smaller than 14.');
                });
            });
            it('should throw an error if the age is bigger than 150', () => {
                const invalidValues = [151, 152, 180, 200, 1000, 2020, 9999999];

                invalidValues.forEach(value => {
                    expect(() => purchase.setAge(value)).to.throw('Age cannot be bigger than 150.');
                });
            });
            it('should accept age smaller than 150', () => {
                const validValues = [150, 149, 100, 75, 15, 14];

                validValues.forEach(value => {
                    expect(() => purchase.setAge(value)).to.not.throw('Age cannot be bigger than 150.');
                });
            });
        });
        describe('Check the age assigned value', () => {
            it('should assign a number value to the variable', () => {
                purchase.setAge(21);
                assert.isNumber(purchase.buyer.age);
            });
            it('should be equal with the chosen value', () => {
                const validValues = [21, 23, 14, 150];

                validValues.forEach(value => {
                    purchase.setAge(value);
                    purchase.buyer.age.should.equal(value);
                });
            });
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

            it('should accept string values shorter than 60 characters', function () {
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

            it('should accept string values shorter than 120 characters', function () {
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

        describe('check card number datatype', () => {
            it('should accept string values', function () {
                const validValues = ["1234123412341234", "5678567856785678", "9012901290129012"];

                validValues.forEach(value => {
                    expect(() => purchase.setCardNumber(value)).to.not.throw('cardNumber must be a string.');
                })
            });

            it('should not accept anything other than string values', function () {
                const invalidValues = [1, 1.1, true, null, undefined];

                invalidValues.forEach(value => {
                    expect(() => purchase.setCardNumber(value)).to.throw('cardNumber must be a string.');
                })
            });
        });

        describe('check card number length', () => {
            it('should not accept string values longer than 16 characters', function () {
                const invalidValues = ["12341234123412345", "567856785678567890", "9012901290129012345"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setCardNumber(value)).to.throw('Card number must be exactly 16 digits.');
                })
            });

            it('should not accept string values shorter than 16 characters', function () {
                const validValues = ["", "123412341234123", "56785678567856", "9012901290129"];

                validValues.forEach(value => {
                    expect(() => purchase.setCardNumber(value)).to.throw('Card number must be exactly 16 digits.');
                })
            });

            it('should accept string values that are exactly 16 characters', function () {
                const validValues = ["asdf1234asdf1234", "1234123412341234", "!@#$asdf&*()kjhg"];

                validValues.forEach(value => {
                    expect(() => purchase.setCardNumber(value)).to.not.throw('Card number must be exactly 16 characters.');
                })
            });
        });

        describe('check card number formatting', () => {
            it('should accept valid card number formats', function () {
                const validValues = ["1234123412341234", "5678567856785678", "9012901290129012"];

                validValues.forEach(value => {
                    expect(() => purchase.setCardNumber(value)).to.not.throw('Card number is of incorrect formatting.');
                })
            });

            it('should not accept invalid card number formats', function () {
                const invalidValues = ["asdf1234asdf1234", "5678 5678 5678 5", "!@#$asdf&*()kjhg"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setCardNumber(value)).to.throw('Card number is of incorrect formatting.');
                })
            });
        });

        describe('check assigned value', () => {
            it('should assign a string value to the variable', function () {
                const validValue = "1234123412341234";

                purchase.setCardNumber(validValue);
                assert.isString(purchase.shippingInfo.cardNumber);
            });

            it('should assign valid card numbers to the variable', function () {
                const validValues = ["1234123412341234", "5678567856785678", "9012901290129012"];

                validValues.forEach(value => {
                    purchase.setCardNumber(value);
                    purchase.shippingInfo.cardNumber.should.equal(value);
                })
            });
        });
    });
    describe('Card security code', () => {
        let purchase;
        let PRODUCTS;

        beforeEach(async () => {
            purchase = new Purchase();
            PRODUCTS = await loadJsonFile("products.json");
        });

        describe('check card security code datatype', () => {
            it('should accept string values', function () {
                const validValues = ["123", "456", "789"];

                validValues.forEach(value => {
                    expect(() => purchase.setCardSecurityCode(value)).to.not.throw('cardSecurityCode must be a string.');
                })
            });

            it('should not accept anything other than string values', function () {
                const invalidValues = [1, 1.1, true, null, undefined];

                invalidValues.forEach(value => {
                    expect(() => purchase.setCardSecurityCode(value)).to.throw('cardSecurityCode must be a string.');
                })
            });
        });

        describe('check card security code length', () => {
            it('should not accept string values longer than 3 characters', function () {
                const invalidValues = ["1234", "12345", "asdfg"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setCardSecurityCode(value)).to.throw('Card security code must be exactly 3 digits.');
                })
            });

            it('should not accept string values shorter than 3 characters', function () {
                const validValues = ["", "12", "1", "a", "ad"];

                validValues.forEach(value => {
                    expect(() => purchase.setCardSecurityCode(value)).to.throw('Card security code must be exactly 3 digits.');
                })
            });

            it('should accept string values that are exactly 3 characters', function () {
                const validValues = ["123", "456", "asd", "!@#"];

                validValues.forEach(value => {
                    expect(() => purchase.setCardSecurityCode(value)).to.not.throw('Card security code must be exactly 3 digits.');
                })
            });
        });

        describe('check card security code formatting', () => {
            it('should accept valid card security code formats', function () {
                const validValues = ["123", "456", "789", "012"];

                validValues.forEach(value => {
                    expect(() => purchase.setCardSecurityCode(value)).to.not.throw('Card security code is of incorrect formatting.');
                })
            });

            it('should not accept invalid card number formats', function () {
                const invalidValues = ["asd", "!@#", "as2"];

                invalidValues.forEach(value => {
                    expect(() => purchase.setCardSecurityCode(value)).to.throw('Card security code is of incorrect formatting.');
                })
            });
        });

        describe('check assigned value', () => {
            it('should assign a string value to the variable', function () {
                const validValue = "123";

                purchase.setCardSecurityCode(validValue);
                assert.isString(purchase.shippingInfo.cardSecurityCode);
            });

            it('should assign valid card security codes to the variable', function () {
                const validValues = ["123", "456", "789" ,"012"];

                validValues.forEach(value => {
                    purchase.setCardSecurityCode(value);
                    purchase.shippingInfo.cardSecurityCode.should.equal(value);
                })
            });
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
