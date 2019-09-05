
function calculateValue() {
const itemValue = document.getElementById("itemValue").value;
const quantity = document.getElementById("quantity").value;
const taxCode = document.getElementById("taxCode").value; 
const totalValue = itemValue * quantity;

console.log("itemValue " + itemValue);
console.log("quantity " + quantity);
console.log("total " + totalValue);
const taxRate = chooseTaxRate(taxCode);
const taxToPay = calculateTax(taxRate);
calculateGrandTotal(totalValue, taxToPay);
}

function chooseTaxRate(taxCode) {
console.log("taxcode " + taxCode);
switch (taxCode) {
    case "UT":
        return 6.85;
    default: 
        return 0;
 }
}

function calculateTax(taxRate) {

}

function calculateGrandTotal(totalValue, taxToPay, taxCode) {
alert("Transaction total: " + totalValue + ", Tax Code: " + taxCode); // i don't understand why taxCode only works without declaring it as a 'var' or other type.
}