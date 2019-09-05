
function processTransaction() {
    const itemValue = document.getElementById("itemValue").value;
    const quantity = document.getElementById("quantity").value;
    const taxCode = document.getElementById("taxCode").value; 
    const subTotal = itemValue * quantity;

    console.log("itemValue " + itemValue);
    console.log("quantity " + quantity);
    console.log("subtotal " + subTotal);

    const discountRate = chooseDiscountRate(subTotal);
    console.log("discountRate " + discountRate);

    const discountValue = calculateDiscount(discountRate);
    console.log("discountValue " + discountValue);

    const taxRate = chooseTaxRate(taxCode);
    console.log("taxRate " + taxRate);

    const taxToPay = calculateTax(taxRate);
    console.log("taxToPay " + taxToPay);

    const grandTotal = calculateGrandTotal(discountValue, subTotal, taxToPay);
    displayResult(grandTotal);

}
function chooseDiscountRate(subTotal){
    switch (subTotal){
        case (subTotal <= 999):
            return 0;
        case ((subTotal >= 1000) && (subTotal <= 4999)):
            return 3;
        default: 
            return 0;
    }
}

function calculateDiscount(discountRate, subTotal) {
    return ((subTotal/100)*discountRate);
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

function calculateGrandTotal(subTotal, discountValue) {
return subTotal - discountValue;
}

function displayResult(grandTotal){
    alert("Transaction total: " + grandTotal); // i don't understand why taxCode only works without declaring it as a 'var' or other type.

    
}