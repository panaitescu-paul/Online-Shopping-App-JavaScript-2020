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

let PRODUCTS = [];

const regExpName = /^([A-ZÆØÅ][a-zæøå]+(-[A-ZÆØÅ][a-zæøå]+)*)$/;
const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regExpCardNum = /^([0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4})+/;

class Purchase {
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
            let product = PRODUCTS.find(value => value.id === cartProduct.id);

            this.totalPrice += product.price * cartProduct.quantity;
        });

        if (this.shippingInfo.deliveryOption) {
            this.totalPrice += DELIVERY_OPTIONS.find(value => value.name === this.shippingInfo.deliveryOption).price;
        }
    }

    buyProducts() {
        let products = "";
        this.productsList.forEach(cartProduct => {
            let product = PRODUCTS.find(value => value.id === cartProduct.id);
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
        if (PRODUCTS.findIndex(value => value.id === id) === -1) throw new Error('Invalid product id.');

        if (typeof quantity !== 'number') throw new Error('quantity must be a number.');
        if (quantity < 0) throw new Error('quantity cannot be negative.');
        if (quantity > 10) throw new Error('quantity too big.');

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
            this.productsList.push({id: id, quantity: quantity});
        }

        this.refreshTotalPrice();
    }

    setFirstName(firstName) {
        if (typeof firstName !== 'string') throw new Error('firstName must be a string.');
        if (firstName.length < 2) throw new Error('firstName cannot be shorter than 2 characters.');
        if (firstName.length > 40) throw new Error('firstName cannot be longer than 40 characters.');
        if (!regExpName.test(firstName)) throw new Error('firstName is of incorrect formatting.');

        this.buyer.firstName = firstName;
    }

    setLastName(lastName) {
        if (typeof lastName !== 'string') throw new Error('lastName must be a string.');
        if (lastName.length < 2) throw new Error('lastName cannot be shorter than 2 characters.');
        if (lastName.length > 60) throw new Error('lastName cannot be longer than 60 characters.');
        if (!regExpName.test(lastName)) throw new Error('lastName is of incorrect formatting.');

        this.buyer.lastName = lastName;
    }

    setAge(age) {
        if (typeof age !== 'number') throw new Error('age must be a number.');
        if (age < 14) throw new Error('age cannot be smaller than 14.');
        if (age > 150) throw new Error('age cannot be bigger than 150.');

        this.buyer.age = age;
    }

    setEmail(email) {
        if (typeof email !== 'string') throw new Error('email must be a string.');
        if (email.length <= 0) throw new Error('email cannot be empty.');
        if (email.length > 60) throw new Error('email cannot be longer than 60 characters.');
        if (!regExpEmail.test(email)) throw new Error('email is of incorrect formatting.');

        this.buyer.email = email;
    }

    //TODO: add exception throwing for setters and relevant boundary checks
    setAddress(address) {
        this.shippingInfo.address = address;
    }

    setCardNumber(cardNumber) {
        this.shippingInfo.cardNumber = cardNumber;
    }

    setCardSecurityCode(cardSecurityCode) {
        this.shippingInfo.cardSecurityCode = cardSecurityCode;
    }

    setDeliveryOption(deliveryOption) {
        this.shippingInfo.deliveryOption = deliveryOption;
        this.refreshTotalPrice();
    }
}

class Buyer {
    firstName;
    lastName;
    age;
    email;
}

class ShippingInfo {
    cardNumber;
    cardSecurityCode;
    address;
    deliveryOption;
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

