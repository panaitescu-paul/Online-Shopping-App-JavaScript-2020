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
            "Paul-Dash",

            "Arturo", "Paul", "Constantin-Razvan", "Marius-Daniel", "Dragos-Andrei",
            "Sergio", "Francisco", "Marcelo", "Mariano", "Federico", "Luka", "Toni", "Isco", "David",
            "Rodrigo", "Alvaro", "Thiago", "Dani", "Rodrigo", "Inigo", "Fabian",
            "Rafael", "Feliciano", "Manuel", "Juan-Carlos"
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
                // expect(() => purchase.setFirstName(value)).to.not.throw(error);
            })
        });
    });

    it('should be shorter than 2 characters', () => {
        const data = [
            "P",
            ""
        ];
        data.forEach(value => {
            expect(() => purchase.setFirstName(value)).to.throw('First Name cannot be shorter than 2 characters.');
        });
    });

    it('should be longer than 40 characters.', () => {
        const data = [
            "Paulspaulspaulspaulspaulspaulspaulspaulss",
            "AVeryLongNameAVeryLongNameAVeryLongNameAVeryLongName"
        ];
        data.forEach(value => {
            expect(() => purchase.setFirstName(value)).to.throw('First Name cannot be longer than 40 characters.');
        });
    });

    it('should have incorrect formatting', () => {
        const data = [
            "Paul-Nondanishalphabet诶诶诶诶诶诶",
            "Paul-Specialcharacters!@#$%^&*()",
            "IncorrectExample!",
            "_IncorrectExample_",
            "(IncorrectExample)",
            "[IncorrectExample]",
            "{IncorrectExample}",
        ];
        data.forEach(value => {
            expect(() => purchase.setFirstName(value)).to.throw('First Name is of incorrect formatting.');
        });
    });

    it('should not be a string.', () => {
        const data = [
            5,
            100, 10.5, -100, +100, 100000000000000000000, true, false, undefined, null,
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
            "Panaitescu-Dash",

            "Mora-Rioja", "Panaitescu", "Tarau", "Munteanu", "Mocanasu",
            "Ramos", "De-Gea", "Moreno-Machado", "Morata", "Busquets", "Morrison", "Alcantara", "Alba", "Carvajal",
            "Ruiz-Pena", "Alvaro", "Thiago", "Corbero", "Alex-Høgh", "Gustaf-Skarsgård", "Fabian",
            "Nadal", "Lopez", "Carlos-Ferrero", "Moya", "Sanchez-Vicario", "Ferrer",
            "Muguruza", "Bruguera", "Muguruza", "Coltrane"
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
            "P",
            ""
        ];
        data.forEach(value => {
            expect(() => purchase.setLastName(value)).to.throw('Last Name cannot be shorter than 2 characters.');
        });
    });

    it('should be longer than 60 characters.', () => {
        const data = [
            "Panaitescupanaitescupanaitescupanaitescupanaitescupanaitescul",
            "AVeryLongNameAVeryLongNameAVeryLongNameAVeryLongNameAVeryLongName"
        ];
        data.forEach(value => {
            expect(() => purchase.setLastName(value)).to.throw('Last Name cannot be longer than 60 characters.');
        });
    });

    it('should have incorrect formatting', () => {
        const data = [
            "Panaitescu-Nondanishalphabet诶诶诶诶诶诶",
            "Panaitescu-Specialcharacters!@#$%^&*()",
            "IncorrectExample!",
            "_IncorrectExample_",
            "(IncorrectExample)",
            "[IncorrectExample]",
            "{IncorrectExample}",
        ];
        data.forEach(value => {
            expect(() => purchase.setLastName(value)).to.throw('Last Name is of incorrect formatting.');
        });
    });

    it('should not be a string.', () => {
        const data = [
            5,
            100, 10.5, -100, +100, 100000000000000000000, true, false, undefined, null,
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
                13,
                1, 3, 5, 7, 10, 12
            ];
            data.forEach(value => {
                expect(() => purchase.setAge(value)).to.throw('Age cannot be smaller than 14.');
            });
        });

        it('should be bigger than 150.', () => {
            const data = [
                151,
                152, 160, 180, 200, 300, 500, 700, 800, 900, 1000, 3000, 10000,
            ];
            data.forEach(value => {
                expect(() => purchase.setAge(value)).to.throw('Age cannot be bigger than 150.');
            });
        });

        it('should not be an integer.', () => {
            const data = [
                23.5,
                "twenty-three$",
                10.5, "text", true, false, undefined, null,
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
            "Botanisk Centralbibliotek, Sølvgade 83, opg. S, DK-1307 København K., DENMARK",

            "Santiago Bernabeu Stadium - Av. de Concha Espina, 1, 28036 Madrid, Spain",
            "Polytechnic University of Madrid - 28040 Madrid, Spain",
            "Museo Nacional del Prado - Calle de Ruiz, 28014 Madrid, Spain",
            "Real Club Puerta de Hierro - 28035 Madrid, Spain",
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
            "thisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwentysevencharactersthisistwentys",

            "Santiago Bernabeu Stadium - Av. de Concha Espina, 1, 28036 Madrid, Spain - Santiago Bernabeu Stadium - Av. de Concha Espina, 1, 28036 Madrid, Spain",
            "Polytechnic University of Madrid - 28040 Madrid, Spain - Polytechnic University of Madrid - 28040 Madrid, Spain - Polytechnic University of Madrid - 28040 Madrid, Spain",
            "Museo Nacional del Prado - Calle de Ruiz, 28014 Madrid, Spain - Museo Nacional del Prado - Calle de Ruiz, 28014 Madrid, Spain - Museo Nacional del Prado - Calle de Ruiz, 28014 Madrid, Spain",
            "Real Club Puerta de Hierro - 28035 Madrid, Spain - Real Club Puerta de Hierro - 28035 Madrid, Spain - - Real Club Puerta de Hierro - 28035 Madrid, Spain"
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
            100,
            10.5, -100, +100, 100000000000000000000, true, false, undefined, null,
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
            "1234123412341234",
            "1111222233334444",
            "9999888855553333",
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
            "12341234123412345",
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
            5,
            100, 10.5, -100, +100, 100000000000000000000, true, false, undefined, null,
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
            "012",
            "111",
            "999",
            "555",
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
            "OI2",
            "ABC",
        ];
        data.forEach(value => {
            expect(() => purchase.setCardSecurityCode(value)).to.throw('Card security code is of incorrect formatting.');
        });
    });

    it('should not be a string', () => {
        const data = [
            5,
            100, 10.5, -100, +100, 100000000000000000000, true, false, undefined, null,
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
            "GLS",
            "",
        ];
        data.forEach(value => {
            expect(() => purchase.setDeliveryOption(value)).to.throw('Invalid delivery option.');
        });
    });

    it('should not be a string', () => {
        const data = [
            5,
            2.5,
            100, 10.5, -100, +100, 100000000000000000000, true, false, undefined, null,
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
            ["1", true],
            ["1", false],
            ["1", undefined],
            ["1", null],
        ];
        data.forEach(value => {
            expect(() => purchase.setProductQuantity(value[0], value[1])).to.throw('quantity must be an integer.');
        });
    });

    it('should have Invalid product id.', () => {
        const data = [
            ["31", 5],
            ["-10", 5],
            ["300", 5],
            ["ABC", 5],
            ["5.5", 5],
            ["true", 5],
            ["false", 5],
            ["undefined", 5],
            ["null", 5],
        ];
        data.forEach(value => {
            expect(() => purchase.setProductQuantity(value[0], value[1])).to.throw('Invalid product id.');
        });
    });

    it('should not have a string id', () => {
        const data = [
            [1, 5],
            [5.5, 5],
            [100000000000000000000, 5],
            [true, 5],
            [false, 5],
            [undefined, 5],
            [null, 5],
        ];
        data.forEach(value => {
            expect(() => purchase.setProductQuantity(value[0], value[1])).to.throw('id must be a string.');
        });
    });
});


/*----------------------------------------------------------*
*          Additional Unit Tests for 100% Coverage          *
*-----------------------------------------------------------*/


describe('Test the Assigned Value for different fields', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    describe('Check the First Name assigned value', () => {
        it('should assign a string value to the variable', () => {
            purchase.setFirstName("Constantin-Razvan")
            assert.isString(purchase.buyer.firstName);
        });
        it('should be equal with the chosen value', () => {
            const validValues = ["Arturo", "Paul", "Constantin-Razvan", "Marius-Daniel", "Dragos-Andrei"];

            validValues.forEach(value => {
                purchase.setFirstName(value);
                purchase.buyer.firstName.should.equal(value);
            });
        });
    });

    describe('Check the Last Name assigned value', () => {
        it('should assign a string value to the variable', () => {
            purchase.setLastName("Mora-Rioja")
            assert.isString(purchase.buyer.lastName);
        });
        it('should be equal with the chosen value', () => {
            const validValues = ["Mora-Rioja", "Panaitescu", "Tarau", "Munteanu", "Mocanasu"];

            validValues.forEach(value => {
                purchase.setLastName(value);
                purchase.buyer.lastName.should.equal(value);
            });
        });
    });

    describe('Check the Age assigned value', () => {
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

    describe('check Email assigned value', () => {
        it('should assign a string value to the variable', function () {
            const validValue = "paul@gmail.com";

            purchase.setEmail(validValue);
            assert.isString(purchase.buyer.email);
        });
        it('should assign valid Email to the variable', function () {
            const validValues = ["paul@gmail.com", "constantin@gmail.com", "marius@gmail.com", "dragos@gmail.com"];

            validValues.forEach(value => {
                purchase.setEmail(value);
                purchase.buyer.email.should.equal(value);
            });
        });
    });

    describe('check Address assigned value', () => {
        it('should assign a string value to the variable', function () {
            const validValue = "Santiago Bernabeu Stadium - Av. de Concha Espina, 1, 28036 Madrid, Spain";

            purchase.setAddress(validValue);
            assert.isString(purchase.shippingInfo.address);
        });
        it('should assign valid Address to the variable', function () {
            const validValues = [
                "Polytechnic University of Madrid - 28040 Madrid, Spain",
                "Museo Nacional del Prado - Calle de Ruiz, 28014 Madrid, Spain",
                "Real Club Puerta de Hierro - 28035 Madrid, Spain"
            ];

            validValues.forEach(value => {
                purchase.setAddress(value);
                purchase.shippingInfo.address.should.equal(value);
            })
        });
    });

    describe('check Card Number assigned value', () => {
        it('should assign a string value to the variable', function () {
            const validValue = "1234123412341234";

            purchase.setCardNumber(validValue);
            assert.isString(purchase.shippingInfo.cardNumber);
        });
        it('should assign valid Card Number to the variable', function () {
            const validValues = ["1234123412341234", "5678567856785678", "9012901290129012"];

            validValues.forEach(value => {
                purchase.setCardNumber(value);
                purchase.shippingInfo.cardNumber.should.equal(value);
            })
        });
    });

    describe('check Card Security Codes assigned value', () => {
        it('should assign a string value to the variable', function () {
            const validValue = "123";

            purchase.setCardSecurityCode(validValue);
            assert.isString(purchase.shippingInfo.cardSecurityCode);
        });
        it('should assign valid Card Security Codes to the variable', function () {
            const validValues = ["123", "456", "789" ,"012"];

            validValues.forEach(value => {
                purchase.setCardSecurityCode(value);
                purchase.shippingInfo.cardSecurityCode.should.equal(value);
            })
        });
    });

    describe('Check the Delivery Option assigned value', () => {
        it('should assign a string value to the variable', () => {
            purchase.setDeliveryOption("Home Delivery")
            assert.isString(purchase.shippingInfo.deliveryOption);
        });
        it('should be equal with the chosen value', () => {
            const validValues = ["Nearest Pickup Point", "Company Delivery", "Home Delivery"];

            validValues.forEach(value => {
                purchase.setDeliveryOption(value);
                purchase.shippingInfo.deliveryOption.should.equal(value);
            });
        });
    });
});

describe('Test the Delivery Option functionality', () => {
    let purchase;

    beforeEach(async () => {
        purchase = new Purchase();
    });

    describe('Check the Total Price increase based on Delivery Option', () => {
        it('should have the Total Price 50 for the "Nearest Pickup Point" Delivery Option', () => {
            purchase.setDeliveryOption("Nearest Pickup Point")
            purchase.totalPrice.should.equal(50);
        });
        it('should have the Total Price 75 for the "Company Delivery" Option', () => {
            purchase.setDeliveryOption("Company Delivery")
            purchase.totalPrice.should.equal(75);
        });
        it('should have the Total Price 100 for the "Home Delivery" Option', () => {
            purchase.setDeliveryOption("Home Delivery")
            purchase.totalPrice.should.equal(100);
        });
    });
});

describe('Test the Product Quantity functionality', () => {
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
        it('should throw an error if the Shopping Cart is empty after it had Products', () => {
            purchase.setFirstName("Paul");
            purchase.setLastName("Panaitescu");
            purchase.setAge(21);
            purchase.setEmail("paul0000@stud.kea.dk");
            purchase.setAddress("Albertslund");
            purchase.setCardNumber("1234123412341234");
            purchase.setCardSecurityCode("123");
            purchase.setDeliveryOption("Home Delivery");
            purchase.setProductQuantity("1", 5);
            purchase.setProductQuantity("1", 0);
            purchase.setProductQuantity("2", 5);
            purchase.setProductQuantity("2", 0);

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

    describe('Check Adult-only Products', () => {
        it('should throw an error if the Shopping Cart contains Adult-only Products for a person under 18', () => {
            purchase.setFirstName("Constantin-Razvan");
            purchase.setLastName("Tarau");
            purchase.setAge(17);
            purchase.setEmail("cons0343@stud.kea.dk");
            purchase.setAddress("Albertslund");
            purchase.setCardNumber("1234123412341234");
            purchase.setCardSecurityCode("123");
            purchase.setDeliveryOption("Home Delivery");
            purchase.setProductQuantity("3", 3);
            purchase.setProductQuantity("5", 2);
            purchase.setProductQuantity("10", 1);
            purchase.setProductQuantity("16", 4);

            expect(() => purchase.buyProducts()).to.throw('Shopping cart contains adult-only items.');
        });
        it('should not throw an error if the Shopping Cart contains Adult-only Products for an adult person', () => {
            purchase.setFirstName("Constantin-Razvan");
            purchase.setLastName("Tarau");
            purchase.setAge(21);
            purchase.setEmail("cons0343@stud.kea.dk");
            purchase.setAddress("Albertslund");
            purchase.setCardNumber("1234123412341234");
            purchase.setCardSecurityCode("123");
            purchase.setDeliveryOption("Home Delivery");
            purchase.setProductQuantity("3", 3);
            purchase.setProductQuantity("5", 2);
            purchase.setProductQuantity("10", 1);
            purchase.setProductQuantity("16", 4);

            expect(() => purchase.buyProducts()).to.not.throw('Shopping cart contains adult-only items.');
        });
    });

    describe('Check Buy Products return value', () => {
        it('should return the corresponding Personal Info, Shipping Info and Products for: 3 cheese and 2 water', () => {
            purchase.setFirstName("Constantin-Razvan");
            purchase.setLastName("Tarau");
            purchase.setAge(21);
            purchase.setEmail("cons0343@stud.kea.dk");
            purchase.setAddress("Albertslund");
            purchase.setCardNumber("1234123412341234");
            purchase.setCardSecurityCode("123");
            purchase.setDeliveryOption("Home Delivery");
            purchase.setProductQuantity("3", 3);
            purchase.setProductQuantity("5", 2);

            purchase.buyProducts().should.equal(`Name: Constantin-Razvan Tarau\n` +
                `Age: 21\n` +
                `Email: cons0343@stud.kea.dk\n` +
                `Address: Albertslund\n` +
                `Delivery: Home Delivery\n` +
                `Products: \n` +
                ` • Cheese: 36 DKK\n` +
                ` • Water: 20 DKK\n` +
                `Total Price: 156 DKK`
            );
        });
        it('should return the corresponding Personal Info, Shipping Info and Products for: ' +
            '2 cucumber, 5 tomato, 2 wine, 6 beer, 1 sangria, 1 bread, 0 tequila, 3 apple pie, 2 apple', () => {
            purchase.setFirstName("Constantin-Razvan");
            purchase.setLastName("Tarau");
            purchase.setAge(21);
            purchase.setEmail("cons0343@stud.kea.dk");
            purchase.setAddress("Albertslund");
            purchase.setCardNumber("1234123412341234");
            purchase.setCardSecurityCode("123");
            purchase.setDeliveryOption("Company Delivery");

            purchase.setProductQuantity("1", 2);
            purchase.setProductQuantity("0", 5);
            purchase.setProductQuantity("8", 2);
            purchase.setProductQuantity("9", 6);
            purchase.setProductQuantity("13", 1);
            purchase.setProductQuantity("16", 1);
            purchase.setProductQuantity("12", 0);
            purchase.setProductQuantity("17", 3);
            purchase.setProductQuantity("20", 2);

            purchase.buyProducts().should.equal(`Name: Constantin-Razvan Tarau\n` +
                `Age: 21\n` +
                `Email: cons0343@stud.kea.dk\n` +
                `Address: Albertslund\n` +
                `Delivery: Company Delivery\n` +
                `Products: \n` +
                ` • Cucumber: 10 DKK\n` +
                ` • Tomato: 15 DKK\n` +
                ` • Wine: 50 DKK\n` +
                ` • Beer: 48 DKK\n` +
                ` • Sangria: 100 DKK\n` +
                ` • Bread: 9 DKK\n` +
                ` • Apple Pie: 27 DKK\n` +
                ` • Apple: 8 DKK\n` +
                `Total Price: 342 DKK`
            );
        });
        it('should return the corresponding Personal Info, Shipping Info and Products for: ' +
            '10 onion, 8 apple, 9 agua fresca, 4 milk, 1 vodka, 3 cucumber, 0 banana, 7 orange, 5 orange juice', () => {
            purchase.setFirstName("Constantin-Razvan");
            purchase.setLastName("Tarau");
            purchase.setAge(21);
            purchase.setEmail("cons0343@stud.kea.dk");
            purchase.setAddress("Albertslund");
            purchase.setCardNumber("1234123412341234");
            purchase.setCardSecurityCode("123");
            purchase.setDeliveryOption("Company Delivery");

            purchase.setProductQuantity("2", 10);
            purchase.setProductQuantity("20", 8);
            purchase.setProductQuantity("15", 9);
            purchase.setProductQuantity("4", 4);
            purchase.setProductQuantity("11", 1);
            purchase.setProductQuantity("1", 3);
            purchase.setProductQuantity("19", 0);
            purchase.setProductQuantity("18", 7);
            purchase.setProductQuantity("18", 7);
            purchase.setProductQuantity("6", 5);
            purchase.setProductQuantity("6", 4);

            purchase.buyProducts().should.equal(`Name: Constantin-Razvan Tarau\n` +
                `Age: 21\n` +
                `Email: cons0343@stud.kea.dk\n` +
                `Address: Albertslund\n` +
                `Delivery: Company Delivery\n` +
                `Products: \n` +
                ` • Onion: 20 DKK\n` +
                ` • Apple: 32 DKK\n` +
                ` • Agua Fresca: 675 DKK\n` +
                ` • Milk: 32 DKK\n` +
                ` • Vodka: 130 DKK\n` +
                ` • Cucumber: 15 DKK\n` +
                ` • Orange: 28 DKK\n` +
                ` • Orange Juice: 56 DKK\n` +
                `Total Price: 1063 DKK`
            );
        });
        it('should return the corresponding Personal Info, Shipping Info and Products for: ' +
            'each 21 Available Items, with Quantity 1', () => {
            purchase.setFirstName("Paul");
            purchase.setLastName("Panaitescu");
            purchase.setAge(23);
            purchase.setEmail("paul0000@stud.kea.dk");
            purchase.setAddress("Albertslund");
            purchase.setCardNumber("1111222233334444");
            purchase.setCardSecurityCode("987");
            purchase.setDeliveryOption("Home Delivery");

            purchase.setProductQuantity("0", 1);
            purchase.setProductQuantity("1", 1);
            purchase.setProductQuantity("2", 1);
            purchase.setProductQuantity("3", 1);
            purchase.setProductQuantity("4", 1);
            purchase.setProductQuantity("5", 1);
            purchase.setProductQuantity("6", 1);
            purchase.setProductQuantity("7", 1);
            purchase.setProductQuantity("8", 1);
            purchase.setProductQuantity("9", 1);
            purchase.setProductQuantity("10", 1);
            purchase.setProductQuantity("11", 1);
            purchase.setProductQuantity("12", 1);
            purchase.setProductQuantity("13", 1);
            purchase.setProductQuantity("14", 1);
            purchase.setProductQuantity("15", 1);
            purchase.setProductQuantity("16", 1);
            purchase.setProductQuantity("17", 1);
            purchase.setProductQuantity("18", 1);
            purchase.setProductQuantity("19", 1);
            purchase.setProductQuantity("20", 1);

            purchase.buyProducts().should.equal(
                'Name: Paul Panaitescu\n' +
                'Age: 23\n' +
                'Email: paul0000@stud.kea.dk\n' +
                'Address: Albertslund\n' +
                'Delivery: Home Delivery\n' +
                'Products: \n' +
                ' • Tomato: 3 DKK\n' +
                ' • Cucumber: 5 DKK\n' +
                ' • Onion: 2 DKK\n' +
                ' • Cheese: 12 DKK\n' +
                ' • Milk: 8 DKK\n' +
                ' • Water: 10 DKK\n' +
                ' • Orange Juice: 14 DKK\n' +
                ' • Bubble Water: 8 DKK\n' +
                ' • Wine: 25 DKK\n' +
                ' • Beer: 8 DKK\n' +
                ' • Whiskey: 200 DKK\n' +
                ' • Vodka: 130 DKK\n' +
                ' • Tequila: 160 DKK\n' +
                ' • Sangria: 100 DKK\n' +
                ' • Spanish Sherry: 300 DKK\n' +
                ' • Agua Fresca: 75 DKK\n' +
                ' • Bread: 9 DKK\n' +
                ' • Apple Pie: 9 DKK\n' +
                ' • Orange: 4 DKK\n' +
                ' • Banana: 5 DKK\n' +
                ' • Apple: 4 DKK\n' +
                'Total Price: 1191 DKK'
            );
        });
        it('should return the corresponding Personal Info, Shipping Info and Products for: ' +
            'each 21 Available Item, with Quantity 10', () => {
            purchase.setFirstName("Paul");
            purchase.setLastName("Panaitescu");
            purchase.setAge(23);
            purchase.setEmail("paul0000@stud.kea.dk");
            purchase.setAddress("Albertslund");
            purchase.setCardNumber("1111222233334444");
            purchase.setCardSecurityCode("987");
            purchase.setDeliveryOption("Home Delivery");

            purchase.setProductQuantity("0", 10);
            purchase.setProductQuantity("1", 10);
            purchase.setProductQuantity("2", 10);
            purchase.setProductQuantity("3", 10);
            purchase.setProductQuantity("4", 10);
            purchase.setProductQuantity("5", 10);
            purchase.setProductQuantity("6", 10);
            purchase.setProductQuantity("7", 10);
            purchase.setProductQuantity("8", 10);
            purchase.setProductQuantity("9", 10);
            purchase.setProductQuantity("10", 10);
            purchase.setProductQuantity("11", 10);
            purchase.setProductQuantity("12", 10);
            purchase.setProductQuantity("13", 10);
            purchase.setProductQuantity("14", 10);
            purchase.setProductQuantity("15", 10);
            purchase.setProductQuantity("16", 10);
            purchase.setProductQuantity("17", 10);
            purchase.setProductQuantity("18", 10);
            purchase.setProductQuantity("19", 10);
            purchase.setProductQuantity("20", 10);

            purchase.buyProducts().should.equal(
                'Name: Paul Panaitescu\n' +
                'Age: 23\n' +
                'Email: paul0000@stud.kea.dk\n' +
                'Address: Albertslund\n' +
                'Delivery: Home Delivery\n' +
                'Products: \n' +
                ' • Tomato: 30 DKK\n' +
                ' • Cucumber: 50 DKK\n' +
                ' • Onion: 20 DKK\n' +
                ' • Cheese: 120 DKK\n' +
                ' • Milk: 80 DKK\n' +
                ' • Water: 100 DKK\n' +
                ' • Orange Juice: 140 DKK\n' +
                ' • Bubble Water: 80 DKK\n' +
                ' • Wine: 250 DKK\n' +
                ' • Beer: 80 DKK\n' +
                ' • Whiskey: 2000 DKK\n' +
                ' • Vodka: 1300 DKK\n' +
                ' • Tequila: 1600 DKK\n' +
                ' • Sangria: 1000 DKK\n' +
                ' • Spanish Sherry: 3000 DKK\n' +
                ' • Agua Fresca: 750 DKK\n' +
                ' • Bread: 90 DKK\n' +
                ' • Apple Pie: 90 DKK\n' +
                ' • Orange: 40 DKK\n' +
                ' • Banana: 50 DKK\n' +
                ' • Apple: 40 DKK\n' +
                'Total Price: 11010 DKK'
            );
        });
        it('should return the corresponding Personal Info, Shipping Info and Products after Quantity change for: ' +
            'first three Available Items, with Quantity 5', () => {
            purchase.setFirstName("Paul");
            purchase.setLastName("Panaitescu");
            purchase.setAge(23);
            purchase.setEmail("paul0000@stud.kea.dk");
            purchase.setAddress("Albertslund");
            purchase.setCardNumber("1111222233334444");
            purchase.setCardSecurityCode("987");
            purchase.setDeliveryOption("Home Delivery");

            purchase.setProductQuantity("0", 10);
            purchase.setProductQuantity("1", 10);
            purchase.setProductQuantity("2", 10);

            purchase.setProductQuantity("0", 5);
            purchase.setProductQuantity("1", 5);
            purchase.setProductQuantity("2", 5);

            purchase.buyProducts().should.equal(
                'Name: Paul Panaitescu\n' +
                'Age: 23\n' +
                'Email: paul0000@stud.kea.dk\n' +
                'Address: Albertslund\n' +
                'Delivery: Home Delivery\n' +
                'Products: \n' +
                ' • Tomato: 15 DKK\n' +
                ' • Cucumber: 25 DKK\n' +
                ' • Onion: 10 DKK\n' +
                'Total Price: 150 DKK'
            );
        });
    });
});

