class CartProduct {
    id;
    quantity;

    constructor(id, quantity) {
        this.id = id;
        this.quantity = quantity;
    }
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