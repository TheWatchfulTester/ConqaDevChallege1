var totalValue;
var taxToPay;

function calculateValue() {
let itemValue = document.getElementById("itemValue").value;
let quantity = document.getElementById("quantity").value;
totalValue = itemValue * quantity;


console.log("itemValue " + itemValue);
console.log("quantity " + quantity);
console.log("total " + totalValue);

calculateTax();
calculateGrandTotal();
}

function calculateTax() {
taxCode = document.getElementById("taxCode").value; 
console.log("taxcode " + taxCode);


}

function calculateGrandTotal() {

confirm("Transaction total: " + totalValue + ", Tax Code: " + taxCode); // i don't understand why taxCode only works without declaring it as a 'var' or other type.

}