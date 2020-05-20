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

const PRODUCTS = [
    new Product(),
    new Product()
];

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

    setProductQuantity(id, quantity) {
        if (quantity < 0) {
            throw `Quantity cannot be negative: ${quantity}`;
        } else if (quantity > 10) {
            throw `Quantity too large: ${quantity}`;
        }

        if (PRODUCTS.findIndex(value => value.id === id)) {
            throw `Invalid product id: ${id}`;
        }

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

    setFirstName(firstName) {

        this.buyer.firstName = firstName;
    }

    setLastName(lastName) {

        this.buyer.lastName = lastName;
    }

    setAge(age) {
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