
// regex for only number from 0 to 9:
// document.getElementById("").addEventListener("input",  (e) => {
// const numbers = /^[0-9]+$/;
// if(e.target.value < 0 || !e.target.value.match(numbers)) {
//     e.target.value = 0;
// } else if (e.target.value > 8 || e.target.value.toString().length > 1){
//     e.target.value = 8;
// }

let products = new Product();
const productsArray = [{
        "id": "0",
        "name": "Tomato",
        "price": "3"
    },
    {
        "id": "1",
        "name": "Cucumber",
        "price": "5"
    }];

function showProductList() {
    console.log(products);
    let rows = document.getElementById("products");
    productsArray.forEach(function (product, index) {
        console.log(index);
        console.log(product);
        let tableRow = document.createElement("tr");
        rows.appendChild(tableRow);

        tableRow.innerHTML = `<th scope="row">${index + 1}</th>
                         <td>${product["name"]}</td>
                         <td><span id="${product["name"]}Price">${product["price"]}</span> DKK</td>
                         <td><input type="number" id="${product["name"]}Quantity" value="0" min="0" max="10" class="form-control"></td>`;
    });
}


document.getElementById("buyBtn").addEventListener("click",  () => {
    alert("showReceipt()");
});
