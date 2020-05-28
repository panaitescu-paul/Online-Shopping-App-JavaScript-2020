/*----------------------------------------------------------*
*                     Terminal commands                     *
*-----------------------------------------------------------*
*           Path Navigation:        ls / dir                *
*                                   cd to folder            *
*-----------------------------------------------------------*
*           Install Dependencies:   npm install             *
*           Run Unit Tests:         npm test                *
*           Code Coverage:          npm run coverage        *
* ----------------------------------------------------------*/

let mocha = require('mocha');
let chai = require('chai');
let describe = mocha.describe;
let expect = chai.expect;
let assert = require('chai').assert;

chai.should();
const loadJsonFile = require('load-json-file');
let Purchase = require("./purchase");


/*----------------------------------------------------------*
*                Unit Tests based on Test Cases             *
*-----------------------------------------------------------*/

describe('Test the First Name field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    it('should be valid', () => {
        const data = [
            "Pa",
            "Pau",
            "Paulspaulspaulspaulspaulspaulspaulspaul",
            "Paulspaulspaulspaulspaulspaulspaulspauls",
            "Paul-Danish-Alphabet-Æo-Øo",
            "Paul-Dash"
        ];
        const errors = [
            'First Name cannot be shorter than 2 characters.',
            'First Name cannot be longer than 40 characters.',
            'First Name is of incorrect formatting.',
            'firstName must be a string.'
        ];
        data.forEach(value => {
            errors.forEach(error => {
                expect(() => purchase.setFirstName(value)).to.not.throw(error);
            })
        });
    });

    it('should be shorter than 2 characters', () => {
        const data = [
            "P"
        ];
        data.forEach(value => {
            expect(() => purchase.setFirstName(value)).to.throw('First Name cannot be shorter than 2 characters.');
        });
    });

    it('should be longer than 40 characters.', () => {
        const data = [
            "Paulspaulspaulspaulspaulspaulspaulspaulss"
        ];
        data.forEach(value => {
            expect(() => purchase.setFirstName(value)).to.throw('First Name cannot be longer than 40 characters.');
        });
    });

    it('should have incorrect formatting', () => {
        const data = [
            "Paul-Nondanishalphabet诶诶诶诶诶诶",
            "Paul-Specialcharacters!@#$%^&*()"
        ];
        data.forEach(value => {
            expect(() => purchase.setFirstName(value)).to.throw('First Name is of incorrect formatting.');
        });
    });

    it('should not be a string.', () => {
        const data = [
            5
        ];
        data.forEach(value => {
            expect(() => purchase.setFirstName(value)).to.throw('firstName must be a string.');
        });
    });
});

describe('Test the Last Name field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    it('should be valid', () => {
        const data = [
            "Pa",
            "Pan",
            "Panaitescupanaitescupanaitescupanaitescupanaitescuanaitesc",
            "Panaitescupanaitescupanaitescupanaitescupanaitescuanaitescu",
            "Panaitescu-Danish-Alphabet-Æo-Øo",
            "Panaitescu-Dash"
        ];
        const errors = [
            'Last Name cannot be shorter than 2 characters.',
            'Last Name cannot be longer than 60 characters.',
            'Last Name is of incorrect formatting.',
            'lastName must be a string.'
        ];
        data.forEach(value => {
            errors.forEach(error => {
                expect(() => purchase.setLastName(value)).to.not.throw(error);
            })
        });
    });

    it('should be shorter than 2 characters', () => {
        const data = [
            "P"
        ];
        data.forEach(value => {
            expect(() => purchase.setLastName(value)).to.throw('Last Name cannot be shorter than 2 characters.');
        });
    });

    it('should be longer than 60 characters.', () => {
        const data = [
            "Panaitescupanaitescupanaitescupanaitescupanaitescupanaitescul"
        ];
        data.forEach(value => {
            expect(() => purchase.setLastName(value)).to.throw('Last Name cannot be longer than 60 characters.');
        });
    });

    it('should have incorrect formatting', () => {
        const data = [
            "Panaitescu-Nondanishalphabet诶诶诶诶诶诶",
            "Panaitescu-Specialcharacters!@#$%^&*()"
        ];
        data.forEach(value => {
            expect(() => purchase.setLastName(value)).to.throw('Last Name is of incorrect formatting.');
        });
    });

    it('should not be a string.', () => {
        const data = [
            5
        ];
        data.forEach(value => {
            expect(() => purchase.setLastName(value)).to.throw('lastName must be a string.');
        });
    });
});

describe('Test the Age field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    describe('Age field', () => {
        it('should be valid', () => {
            const data = [
                14,
                15,
                149,
                150
            ];
            const errors = [
                'Age cannot be smaller than 14.',
                'Age cannot be bigger than 150.',
                'age must be an integer.'
            ];
            data.forEach(value => {
                errors.forEach(error => {
                    expect(() => purchase.setAge(value)).to.not.throw(error);
                })
            });
        });

        it('should be smaller than 14.', () => {
            const data = [
                13
            ];
            data.forEach(value => {
                expect(() => purchase.setAge(value)).to.throw('Age cannot be smaller than 14.');
            });
        });

        it('should be bigger than 150.', () => {
            const data = [
                151
            ];
            data.forEach(value => {
                expect(() => purchase.setAge(value)).to.throw('Age cannot be bigger than 150.');
            });
        });

        it('should be an integer.', () => {
            const data = [
                23.5,
                "twenty-three$"
            ];
            data.forEach(value => {
                expect(() => purchase.setAge(value)).to.throw('age must be an integer.');
            });
        });
    });
});

describe('Test the Email field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    it('should be valid', () => {
        const data = [
            ["paulp", "@gmail.com"],
            ["PaulP", "@gmail.com"],
            ["PaulP123", "@gmail.com"],
            ["Paul_P.12-3", "@gmail.com"],
            ["paulp@", "gmail.com"],
            ["paulp@", "gmail1.com"],
            ["paulp@", "g-mail.com"],
            ["p@g.co", ""],
            ["p@g.com", ""],
            ["this-email-address-is-fifty-nine-characters-long@g-mail.com", ""],
            ["this-email-address-is-about-sixty-characters-long@g-mail.com", ""],
        ];
        const errors = [
            'Email cannot be shorter than 6 characters.',
            'Email cannot be longer than 60 characters.',
            'Email is of incorrect formatting.',
            'email must be a string.',
        ];
        data.forEach(value => {
            errors.forEach(error => {
                expect(() => purchase.setEmail(value[0] + value[1])).to.not.throw(error);
            })
        });
    });

    it('should be shorter than 6 characters', () => {
        const data = [
            ["p@g.c", ""],
        ];
        data.forEach(value => {
            expect(() => purchase.setEmail(value[0] + value[1])).to.throw('Email cannot be shorter than 6 characters.');
        });
    });

    it('should be longer than 60 characters.', () => {
        const data = [
            ["this-email-address-is-cca-sixty-one-characters-long@gmail.com", ""],
        ];
        data.forEach(value => {
            expect(() => purchase.setEmail(value[0] + value[1])).to.throw('Email cannot be longer than 60 characters.');
        });
    });

    it('should have incorrect formatting', () => {
        const data = [
            ["PåulP", "@gmail.com"],
            ["Paul P=12+3", "@gmail.com"],
            ["paulp@", "gmåil.com"],
            ["paulp@", "gmail."],
            ["this-email-address-is-missing-the-at-sign.com", ""],
        ];
        data.forEach(value => {
            expect(() => purchase.setEmail(value[0] + value[1])).to.throw('Email is of incorrect formatting.');
        });
    });

    it('should be a string.', () => {
        const data = [
            [123, 321],
            [121, 123],
        ];
        data.forEach(value => {
            expect(() => purchase.setEmail(value[0] + value[1])).to.throw('email must be a string.');
        });
    });
});

describe('Test the Address field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    it('should be valid', () => {
        const data = [
            "Albert",
            "Alberts",
            "Niels Bohrs Alle 23, 5230 Odense M, Odense, Denmark but the address needs to be exactly one hundred nineteen, soo......",
            "thisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwenty",
            "Botanisk Centralbibliotek, Sølvgade 83, opg. S, DK-1307 København K., DENMARK"
        ];
        const errors = [
            'Address cannot be shorter than 6 characters.',
            'Address cannot be longer than 120 characters.',
            'Address is of incorrect formatting.',
            'address must be a string.'
        ];
        data.forEach(value => {
            errors.forEach(error => {
                expect(() => purchase.setAddress(value)).to.not.throw(error);
            })
        });
    });

    it('should be shorter than 6 characters.', () => {
        const data = [
            "Alber"
        ];
        data.forEach(value => {
            expect(() => purchase.setAddress(value)).to.throw('Address cannot be shorter than 6 characters.');
        });
    });

    it('should be longer than 120 characters.', () => {
        const data = [
            "thisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwentys"
        ];
        data.forEach(value => {
            expect(() => purchase.setAddress(value)).to.throw('Address cannot be longer than 120 characters.');
        });
    });

    it('should have incorrect formatting', () => {
        const data = [
            "Martin Rebas, Gyllenkrooksgatan 1, 412 84 GÖTEBORG, SWEDEN",
            "Peter Mogensen, c/o Fictional Company, Niels Bohrs Alle 23, 1330"
        ];
        data.forEach(value => {
            expect(() => purchase.setAddress(value)).to.throw('Address is of incorrect formatting.');
        });
    });

    it('should not be a string.', () => {
        const data = [
            100
        ];
        data.forEach(value => {
            expect(() => purchase.setAddress(value)).to.throw('address must be a string.');
        });
    });
});

describe('Test the Card Number field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    it('should be valid', () => {
        const data = [
            "1234123412341234"
        ];
        const errors = [
            'Card number must be exactly 16 digits.',
            'Card number is of incorrect formatting.',
            'cardNumber must be a string.'
        ];
        data.forEach(value => {
            errors.forEach(error => {
                expect(() => purchase.setCardNumber(value)).to.not.throw(error);
            })
        });
    });

    it('should be exactly 16 digits.', () => {
        const data = [
            "123412341234123",
            "12341234123412345"
        ];
        data.forEach(value => {
            expect(() => purchase.setCardNumber(value)).to.throw('Card number must be exactly 16 digits.');
        });
    });

    it('should have incorrect formatting', () => {
        const data = [
            "1234-1234-1234-1",
            "1234 1234 1234 1"
        ];
        data.forEach(value => {
            expect(() => purchase.setCardNumber(value)).to.throw('Card number is of incorrect formatting.');
        });
    });

    it('should not be a string.', () => {
        const data = [
            5
        ];
        data.forEach(value => {
            expect(() => purchase.setCardNumber(value)).to.throw('cardNumber must be a string.');
        });
    });
});

describe('Test the Card Security Code field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    it('should be valid', () => {
        const data = [
            "012"
        ];
        const errors = [
            'Card security code must be exactly 3 digits.',
            'Card security code is of incorrect formatting.',
            'cardSecurityCode must be a string.'
        ];
        data.forEach(value => {
            errors.forEach(error => {
                expect(() => purchase.setCardSecurityCode(value)).to.not.throw(error);
            })
        });
    });

    it('should be exactly 3 digits', () => {
        const data = [
            "01",
            "0123"
        ];
        data.forEach(value => {
            expect(() => purchase.setCardSecurityCode(value)).to.throw('Card security code must be exactly 3 digits.');
        });
    });

    it('should have incorrect formatting', () => {
        const data = [
            "OI2"
        ];
        data.forEach(value => {
            expect(() => purchase.setCardSecurityCode(value)).to.throw('Card security code is of incorrect formatting.');
        });
    });

    it('should not be a string', () => {
        const data = [
            5
        ];
        data.forEach(value => {
            expect(() => purchase.setCardSecurityCode(value)).to.throw('cardSecurityCode must be a string.');
        });
    });
});

describe('Test the Delivery Options field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    it('should be valid', () => {
        const data = [
            "Nearest Pickup Point",
            "Company Delivery",
            "Home Delivery"
        ];
        const errors = [
            'Invalid delivery option.',
            'deliveryOption must be a string.'
        ];
        data.forEach(value => {
            errors.forEach(error => {
                expect(() => purchase.setDeliveryOption(value)).to.not.throw(error);
            })
        });
    });

    it('should be invalid delivery option', () => {
        const data = [
            "PostNord",
            "GLS"
        ];
        data.forEach(value => {
            expect(() => purchase.setDeliveryOption(value)).to.throw('Invalid delivery option.');
        });
    });

    it('should not be a string', () => {
        const data = [
            5,
            2.5
        ];
        data.forEach(value => {
            expect(() => purchase.setDeliveryOption(value)).to.throw('deliveryOption must be a string.');
        });
    });
});

describe('Test the Product Quantity field', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
        purchase.PRODUCTS = await loadJsonFile("products.json");
    });

    it('should be valid', () => {
        const data = [
            ["1", 0],
            ["1", 1],
            ["1", 2],
            ["1", 9],
            ["1", 10],
        ];
        const errors = [
            'Quantity cannot be negative.',
            'Quantity cannot be bigger than 10.',
            'quantity must be an integer.',
            'Invalid product id.',
            'id must be a string.'
        ];
        data.forEach(value => {
            errors.forEach(error => {
                expect(() => purchase.setProductQuantity(value[0], value[1])).to.not.throw(error);
            })
        });
    });

    it('should be negative', () => {
        const data = [
            ["1", -1],
        ];
        data.forEach(value => {
            expect(() => purchase.setProductQuantity(value[0], value[1])).to.throw('Quantity cannot be negative.');
        });
    });

    it('should be bigger than 10', () => {
        const data = [
            ["1", 11],
        ];
        data.forEach(value => {
            expect(() => purchase.setProductQuantity(value[0], value[1])).to.throw('Quantity cannot be bigger than 10.');
        });
    });

    it('should not be an integer', () => {
        const data = [
            ["1", 5.5],
            ["1", "abcd#!@"],
        ];
        data.forEach(value => {
            expect(() => purchase.setProductQuantity(value[0], value[1])).to.throw('quantity must be an integer.');
        });
    });

    it('should have Invalid product id.', () => {
        const data = [
            ["31", 5],
        ];
        data.forEach(value => {
            expect(() => purchase.setProductQuantity(value[0], value[1])).to.throw('Invalid product id.');
        });
    });

    it('should not have a string id', () => {
        const data = [
            [1, 5],
        ];
        data.forEach(value => {
            expect(() => purchase.setProductQuantity(value[0], value[1])).to.throw('id must be a string.');
        });
    });
});


/*----------------------------------------------------------*
*          Additional Unit Tests for 100% Coverage          *
*-----------------------------------------------------------*/


describe('Test the Product Quantity (2)', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
        purchase.PRODUCTS = await loadJsonFile("products.json");
    });

    describe('check Product Quantity changes', () => {
        it('should start with an empty list of Products', function () {
            purchase.productsList.should.deep.equal([]);
        });
        it('should add a Product to the list of Products', function () {
            purchase.setProductQuantity("0", 1);
            purchase.productsList[0].should.deep.equal({id: "0", quantity: 1});
        });
        it('should update the Quantity of an existing Product', function () {
            purchase.setProductQuantity("0", 1);
            purchase.setProductQuantity("0", 4);
            purchase.productsList[0].should.deep.equal({id: "0", quantity: 4});
        });
        it('should not add a Product if Quantity is 0', function () {
            purchase.setProductQuantity("0", 0);
            expect(purchase.productsList[0]).to.not.deep.equal({id: "0", quantity: 0});
        });
        it('should remove an existing Product if Quantity is 0', function () {
            purchase.setProductQuantity("0", 1);
            purchase.setProductQuantity("0", 0);
            expect(purchase.productsList[0]).to.not.deep.equal({id: "0", quantity: 0});
        });
    });

    describe('check Total Price update', () => {
        it('should increase by the Price and Quantity of a new Product', function () {
            const product = purchase.PRODUCTS[0];
            purchase.setProductQuantity(product.id, 5);
            purchase.totalPrice.should.deep.equal(product.price * 5);
        });
        it('should change to the Price and new Quantity of an existing Product', function () {
            const product = purchase.PRODUCTS[0];
            purchase.setProductQuantity(product.id, 5);
            purchase.setProductQuantity(product.id, 8);
            purchase.totalPrice.should.deep.equal(product.price * 8);
        });
        it('should change to zero if the Product is removed', function () {
            const product = purchase.PRODUCTS[0];
            purchase.setProductQuantity(product.id, 5);
            purchase.setProductQuantity(product.id, 0);
            purchase.totalPrice.should.deep.equal(0);
        });
    });
});


//-------

describe('Test the Buy Products functionality', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
        purchase.PRODUCTS = await loadJsonFile("products.json");
    });

    describe('Check the Buy Products return type', () => {
        it('should return string values', () => {
            purchase.setFirstName("Constantin-Razvan");
            purchase.setLastName("Tarau");
            purchase.setAge(21);
            purchase.setEmail("cons0343@stud.kea.dk");
            purchase.setAddress("Albertslund");
            purchase.setCardNumber("1234123412341234");
            purchase.setCardSecurityCode("123");
            purchase.setDeliveryOption("Home Delivery");
            purchase.setProductQuantity("1", 3);
            purchase.setProductQuantity("2", 2);

            assert.isString(purchase.buyProducts());
        });
    });

    describe('Check if Shopping Cart is empty', () => {
        it('should throw an error if the Shopping Cart is empty', () => {
            purchase.setFirstName("Constantin-Razvan");
            purchase.setLastName("Tarau");
            purchase.setAge(21);
            purchase.setEmail("cons0343@stud.kea.dk");
            purchase.setAddress("Albertslund");
            purchase.setCardNumber("1234123412341234");
            purchase.setCardSecurityCode("123");
            purchase.setDeliveryOption("Home Delivery");

            expect(() => purchase.buyProducts()).to.throw('Shopping cart cannot be empty.');
        });
        it('should not throw an error if the Shopping Cart has Products', () => {
            purchase.setFirstName("Constantin-Razvan");
            purchase.setLastName("Tarau");
            purchase.setAge(21);
            purchase.setEmail("cons0343@stud.kea.dk");
            purchase.setAddress("Albertslund");
            purchase.setCardNumber("1234123412341234");
            purchase.setCardSecurityCode("123");
            purchase.setDeliveryOption("Home Delivery");
            purchase.setProductQuantity("0", 6);
            purchase.setProductQuantity("17", 3);
            purchase.setProductQuantity("2", 4);
            purchase.setProductQuantity("10", 9);

            expect(() => purchase.buyProducts()).to.not.throw('Shopping cart cannot be empty.');
        });
    });


});

