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

let PRODUCTS = [
    // new Product(),
    // new Product()
];

const regExpName = /^([A-ZÆØÅ][a-zæøå]+(-[A-ZÆØÅ][a-zæøå]+)*)$/;

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
    }

    buyProducts() {
        let products = "";
        this.productsList.forEach(cartProduct => {
            let product = PRODUCTS.find(value => value.id === cartProduct.id);
            products += `\n${product.name}: ${(product.price * cartProduct.quantity)}`
        });

        return `Name: ${this.buyer.firstName} ${this.buyer.lastName}\n
        Age: ${this.buyer.age}\n
        Email: ${this.buyer.email}\n
        Address: ${this.shippingInfo.address}\n
        Delivery: ${this.shippingInfo.deliveryOption}\n
        Products: ${products}\n
        Total Price: ${this.totalPrice}`;
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
        if (firstName.length < 2) throw new Error('firstName cannot be shorter than 2 characters');
        if (firstName.length > 40) throw new Error('firstName cannot be longer than 40 characters');
        if (!regExpName.test(firstName)) throw new Error('firstName is of incorrect formatting.');

        this.buyer.firstName = firstName;
    }

    setLastName(lastName) {
        if (typeof lastName !== 'string') throw new Error('lastName must be a string.');
        if (lastName.length < 2) throw new Error('lastName cannot be shorter than 2 characters');
        if (lastName.length > 60) throw new Error('lastName cannot be longer than 60 characters');
        if (!regExpName.test(lastName)) throw new Error('lastName is of incorrect formatting.');

        this.buyer.lastName = lastName;
    }

    setAge(age) {
        if (typeof age !== 'number') throw new Error('lastName must be a string.');
        if (age < 2) throw new Error('lastName cannot be shorter than 2 characters');
        if (age > 60) throw new Error('lastName cannot be longer than 60 characters');
        if (age > 60) throw new Error('lastName cannot be longer than 60 characters');

        this.buyer.age = age;
    }

    setEmail(email) {
        this.buyer.email = email;
    }

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

function loadJSON(fileName) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', fileName, false); // Replace 'products' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status === 200) {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            // callback(xobj.responseText);
            return xobj.responseText;
        }
    };
    xobj.send(null);
    return JSON.parse(xobj.responseText);
}