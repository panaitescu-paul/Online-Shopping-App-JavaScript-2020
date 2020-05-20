
// regex for only number from 0 to 9:
// document.getElementById("").addEventListener("input",  (e) => {
// const numbers = /^[0-9]+$/;
// if(e.target.value < 0 || !e.target.value.match(numbers)) {
//     e.target.value = 0;
// } else if (e.target.value > 8 || e.target.value.toString().length > 1){
//     e.target.value = 8;
// }

const products = loadJSON("products.json");

function showProductList() {
    let rows = document.getElementById("products");
    products.forEach(function (product, index) {

        let tableRow = document.createElement("tr");
        rows.appendChild(tableRow);

        tableRow.innerHTML = `<th scope="row">${index + 1}</th>
                         <td>${product.name}</td>
                         <td>${product.price} DKK</td> 
                         <td><input type="number" id="${product.name}" value="0" min="0" max="10" class="form-control"></td>`;
    });
}
document.getElementById("buyBtn").addEventListener("click",  () => {
    alert("showReceipt()");
});
