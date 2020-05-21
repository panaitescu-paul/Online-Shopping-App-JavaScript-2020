PRODUCTS = loadJson("products.json");
let purchase = new Purchase();

function showProductList() {
    let rows = document.getElementById("products");
    PRODUCTS.forEach(function (product, index) {

        let tableRow = document.createElement("tr");
        rows.appendChild(tableRow);

        tableRow.innerHTML = `<th scope="row">${index + 1}</th>
                         <td>${product.name}</td>
                         <td>${product.price} DKK</td> 
                         <td><input type="number" id="${product.name}" value="0" min="0" max="10" class="form-control"></td>`;

        document.getElementById(product.name).addEventListener("input", (e) => {
            try {
                console.log("Product id: ", product.id);
                console.log("Product quantity: ", e.target.value);
                purchase.setProductQuantity(product.id, Number(e.target.value));
                console.log("Total price: ", purchase.totalPrice);
                document.getElementById("totalPrice").innerHTML = purchase.totalPrice;
            } catch (error) {
                console.log(error);
            }
        });
    });
}

function showDeliveryOptions() {
    let elements = document.getElementById("deliveryOptions");
    DELIVERY_OPTIONS.forEach(function (element) {

        let div = document.createElement("div");
        div.classList.add("form-check");
        elements.appendChild(div);

        div.innerHTML = `<input class="form-check-input" type="radio" name="deliveryOption" id="${element.name}" value="${element.name}">
                         <label class="form-check-label" for="${element.name}">${element.name} - ${element.price} DKK</label>`;

        document.getElementById(element.name).addEventListener("input", (e) => {
            try {
                console.log("Delivery option: ", e.target.id);
                purchase.setDeliveryOption(e.target.id);
                console.log("Total price: ", purchase.totalPrice);
                document.getElementById("totalPrice").innerHTML = purchase.totalPrice;
            } catch (error) {
                console.log(error);
            }
        });
    });

    document.getElementById(DELIVERY_OPTIONS[0].name).required = true;
}

function setFirstName() {
    let firstName = document.getElementById("firstName").value;
    try {
        console.log("First name: ", firstName);
        purchase.setFirstName(firstName);
    } catch (error) {
        console.log("Error: ", error);
    }
}

function setLastName() {
    let lastName = document.getElementById("lastName").value;
    try {
        console.log("Last name: ", lastName);
        purchase.setLastName(lastName);
    } catch (error) {
        console.log("Error: ", error);
    }
}

function setAge() {
    let age = document.getElementById("age").value;
    try {
        console.log("Age: ", age);
        purchase.setAge(Number(age));
    } catch (error) {
        console.log("Error: ", error);
    }
}

function setEmailAddress() {
    let emailAddress = document.getElementById("emailAddress").value;
    try {
        console.log("Email: ", emailAddress);
        purchase.setEmail(emailAddress);
    } catch (error) {
        console.log("Error: ", error);
    }
}

function setAddress() {
    let address = document.getElementById("address").value;
    try {
        console.log("Address: ", address);
        purchase.setAddress(address);
    } catch (error) {
        console.log("Error: ", error);
    }
}

function setCardNumber() {
    let cardNumber = document.getElementById("cardNumber").value;
    try {
        console.log("Card number: ", cardNumber);
        purchase.setCardNumber(cardNumber);
    } catch (error) {
        console.log("Error: ", error);
    }
}

function setCardSecurityCode() {
    let cardSecurityCode = document.getElementById("cardSecurityCode").value;
    try {
        console.log("Card security code: ", cardSecurityCode);
        purchase.setCardSecurityCode(cardSecurityCode);
    } catch (error) {
        console.log("Error: ", error);
    }
}

function showReceipt() {
    try {
        alert(purchase.buyProducts());
        return true;
    } catch (e) {
        alert(e.message);
        return false;
    }
}