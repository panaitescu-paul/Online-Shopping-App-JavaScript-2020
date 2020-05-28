const DELIVERY_OPTIONS = [
    {
        name: "Nearest Pickup Point",
        price: 50
    },
    {
        name: "Company Delivery",
        price: 75
    },
    {
        name: "Home Delivery",
        price: 100
    }
];

// Regular expressions for formatting
const regExpName = /^([A-ZÆØÅ][a-zæøå]+(-[A-ZÆØÅ][a-zæøå]+)*)$/;
const regExpEmail = /^[A-Za-z]([\-._]?[0-9A-Za-z]+)*@([0-9A-Za-z]([\-._]?[0-9A-Za-z]+)*)+\.[A-Za-z]{2,}$/;
const regExpAddress = /^([0-9A-Za-zÆØÅæøå.,\-\s]{6,120})$/;
const regExpCcNumber = /^[\d]{16}$/;
const regExpCcCsc = /^[\d]{3}$/;

class Purchase {
    PRODUCTS = [];
    productsList;
    buyer;
    shippingInfo;
    totalPrice;

    constructor() {
        this.productsList = [];
        this.buyer = new Buyer();
        this.shippingInfo = new ShippingInfo();
        this.totalPrice = 0;
    }

    refreshTotalPrice() {
        this.totalPrice = 0;
        this.productsList.forEach((cartProduct) => {
            let product = this.PRODUCTS.find(value => value.id === cartProduct.id);

            this.totalPrice += product.price * cartProduct.quantity;
        });

        if (this.shippingInfo.deliveryOption) {
            this.totalPrice += DELIVERY_OPTIONS.find(value => value.name === this.shippingInfo.deliveryOption).price;
        }
    }

    buyProducts() {
        this.checkFirstName(this.buyer.firstName);
        this.checkLastName(this.buyer.lastName);
        this.checkAge(this.buyer.age);
        this.checkEmail(this.buyer.email);
        this.checkAddress(this.shippingInfo.address);
        this.checkCardNumber(this.shippingInfo.cardNumber);
        this.checkCardSecurityCode(this.shippingInfo.cardSecurityCode);
        this.checkDeliveryOption(this.shippingInfo.deliveryOption);
        this.checkProductsList(this.productsList, this.buyer.age);

        let products = "";
        this.productsList.forEach(cartProduct => {
            let product = this.PRODUCTS.find(value => value.id === cartProduct.id);
            products += `\n \u2022 ${product.name}: ${(product.price * cartProduct.quantity)} DKK`
        });

        return `Name: ${this.buyer.firstName} ${this.buyer.lastName}\n` +
            `Age: ${this.buyer.age}\n` +
            `Email: ${this.buyer.email}\n` +
            `Address: ${this.shippingInfo.address}\n` +
            `Delivery: ${this.shippingInfo.deliveryOption}\n` +
            `Products: ${products}\n` +
            `Total Price: ${this.totalPrice} DKK`;
    }

    setProductQuantity(id, quantity) {
        if (typeof id !== 'string') throw new Error('id must be a string.');
        if (this.PRODUCTS.findIndex(value => value.id === id) === -1) throw new Error('Invalid product id.');

        if (typeof quantity !== 'number' || !Number.isInteger(quantity)) throw new Error('quantity must be an integer.');
        if (quantity < 0) throw new Error('Quantity cannot be negative.');
        if (quantity > 10) throw new Error('Quantity cannot be bigger than 10.');

        let cartProductIndex = this.productsList.findIndex(value => value.id === id);
        if (cartProductIndex !== -1) {
            // Product is already in list
            if (quantity !== 0) {
                // Product quantity will be updated
                this.productsList[cartProductIndex].quantity = quantity;
            } else {
                // Product will be removed from list
                this.productsList.splice(cartProductIndex, 1);
            }
        } else {
            // Product needs to be added to list
            if (quantity !== 0) {
                this.productsList.push({id: id, quantity: quantity});
            }
        }

        this.refreshTotalPrice();
    }

    setFirstName(firstName) {
        try {
            if (typeof firstName !== 'string') throw new Error('firstName must be a string.');
            this.checkFirstName(firstName);
        } catch (e) {
            this.buyer.firstName = "";

            throw e;
        }

        this.buyer.firstName = firstName;
    }

    setLastName(lastName) {
        try {
            if (typeof lastName !== 'string') throw new Error('lastName must be a string.');
            this.checkLastName(lastName);
        } catch (e) {
            this.buyer.lastName = "";

            throw e;
        }

        this.buyer.lastName = lastName;
    }

    setAge(age) {
        try {
            if (typeof age !== 'number' || !Number.isInteger(age)) throw new Error('age must be an integer.');
            this.checkAge(age);
        } catch (e) {
            this.buyer.age = -1;

            throw e;
        }

        this.buyer.age = age;
    }

    setEmail(email) {
        try {
            if (typeof email !== 'string') throw new Error('email must be a string.');
            this.checkEmail(email);
        } catch (e) {
            this.buyer.email = "";

            throw e;
        }

        this.buyer.email = email;
    }

    setAddress(address) {
        try {
            if (typeof address !== 'string') throw new Error('address must be a string.');
            this.checkAddress(address);
        } catch (e) {
            this.shippingInfo.address = "";

            throw e;
        }

        this.shippingInfo.address = address;
    }

    setCardNumber(cardNumber) {
        try {
            if (typeof cardNumber !== 'string') throw new Error('cardNumber must be a string.');
            this.checkCardNumber(cardNumber);
        } catch (e) {
            this.shippingInfo.cardNumber = "";

            throw e;
        }

        this.shippingInfo.cardNumber = cardNumber;
    }

    setCardSecurityCode(cardSecurityCode) {
        try {
            if (typeof cardSecurityCode !== 'string') throw new Error('cardSecurityCode must be a string.');
            this.checkCardSecurityCode(cardSecurityCode);
        } catch (e) {
            this.shippingInfo.cardSecurityCode = "";

            throw e;
        }

        this.shippingInfo.cardSecurityCode = cardSecurityCode;
    }

    setDeliveryOption(deliveryOption) {
        try {
            if (typeof deliveryOption !== 'string') throw new Error('deliveryOption must be a string.');
            this.checkDeliveryOption(deliveryOption);
        } catch (e) {
            this.shippingInfo.deliveryOption = "";
            this.refreshTotalPrice();

            throw e;
        }

        this.shippingInfo.deliveryOption = deliveryOption;
        this.refreshTotalPrice();
    }

    checkFirstName(firstName) {
        if (firstName.length < 2) throw new Error('First Name cannot be shorter than 2 characters.');
        if (firstName.length > 40) throw new Error('First Name cannot be longer than 40 characters.');
        if (!regExpName.test(firstName)) throw new Error('First Name is of incorrect formatting.');
    }

    checkLastName(lastName) {
        if (lastName.length < 2) throw new Error('Last Name cannot be shorter than 2 characters.');
        if (lastName.length > 60) throw new Error('Last Name cannot be longer than 60 characters.');
        if (!regExpName.test(lastName)) throw new Error('Last Name is of incorrect formatting.');
    }

    checkAge(age) {
        if (age < 14) throw new Error('Age cannot be smaller than 14.');
        if (age > 150) throw new Error('Age cannot be bigger than 150.');
    }

    checkEmail(email) {
        if (email.length < 6) throw new Error('Email cannot be shorter than 6 characters.');
        if (email.length > 60) throw new Error('Email cannot be longer than 60 characters.');
        if (!regExpEmail.test(email)) throw new Error('Email is of incorrect formatting.');
    }

    checkAddress(address) {
        if (address.length < 6) throw new Error('Address cannot be shorter than 6 characters.');
        if (address.length > 120) throw new Error('Address cannot be longer than 120 characters.');
        if (!regExpAddress.test(address)) throw new Error('Address is of incorrect formatting.');
    }

    checkCardNumber(cardNumber) {
        if (cardNumber.length !== 16) throw new Error('Card number must be exactly 16 digits.');
        if (!regExpCcNumber.test(cardNumber)) throw new Error('Card number is of incorrect formatting.');
    }

    checkCardSecurityCode(cardSecurityCode) {
        if (cardSecurityCode.length !== 3) throw new Error('Card security code must be exactly 3 digits.');
        if (!regExpCcCsc.test(cardSecurityCode)) throw new Error('Card security code is of incorrect formatting.');
    }

    checkDeliveryOption(deliveryOption) {
        if (DELIVERY_OPTIONS.findIndex(value => value.name === deliveryOption) === -1) throw new Error('Invalid delivery option.');
    }

    checkProductsList(productsList, buyerAge) {
        if (productsList.length === 0) throw new Error('Shopping cart cannot be empty.');

        productsList.forEach(cardProduct => {
            let product = this.PRODUCTS.find(product => product.id === cardProduct.id);

            if (product.isForAdults && buyerAge < 18) throw new Error('Shopping cart contains adult-only items.')
        })
    }
}

class Buyer {
    firstName;
    lastName;
    age;
    email;

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.age = -1;
        this.email = "";
    }
}

class ShippingInfo {
    cardNumber;
    cardSecurityCode;
    address;
    deliveryOption;

    constructor() {
        this.cardNumber = "";
        this.cardSecurityCode = "";
        this.address = "";
        this.deliveryOption = "";
    }
}

class CartProduct {
    id;
    quantity;
}

class Product {
    id;
    name;
    price;
    isForAdults;
}

module.exports = Purchase;
