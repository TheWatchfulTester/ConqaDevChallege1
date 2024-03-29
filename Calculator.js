
function processTransaction() {
    console.log("transaction start")
    const itemValue = parseFloat(document.getElementById("itemValue").value);
    const quantity = parseFloat(document.getElementById("quantity").value);
    const taxCode = document.getElementById("taxCode").value; 
    const subTotal = itemValue * quantity;

    console.log("itemValue " + itemValue);
    console.log("quantity " + quantity);
    console.log("subtotal " + subTotal);

    const discountRate = chooseDiscountRate(subTotal);
    console.log("discountRate " + discountRate);

    const discountValue = calculateDiscount({discountRate, subTotal});
    console.log("discountValue " + discountValue);

    const taxRate = chooseTaxRate(taxCode);
    console.log("taxRate " + taxRate);

    const taxToPay = calculateTax({taxRate, discountValue,subTotal });
    console.log("taxToPay " + taxToPay);

    const grandTotal = calculateGrandTotal({discountValue, subTotal, taxToPay});
    console.log({grandTotal});

    displayResult(grandTotal);

}
function chooseDiscountRate(subTotal){
    console.log("subtotal in chooseDiscountRate = " + subTotal);
    console.log(typeof subTotal);
    if ((subTotal >= 1000) && (subTotal <= 4999)){
        return 3;
    }
    else if ((subTotal >= 5000) && (subTotal <= 6999)){
        return 5;
    }
    else if ((subTotal >= 7000) && (subTotal <= 9999)){
        return 7;
    }
    else if ((subTotal >= 10000) && (subTotal <= 49999)){
        return 10;
    }
    else if (subTotal >= 50000){
        return 15;
    }
    else {
        return 0;
    }
}

function calculateDiscount({discountRate, subTotal}) {
    return ((subTotal/100)*discountRate);
}


function chooseTaxRate(taxCode) {
    console.log("taxcode " + taxCode);
    switch (taxCode) {
        case "UT":
            return 6.85;
        case "AL":
            return 4;
        case "CA":
            return 8.25;
        case "TX":
            return 6.25;
        case "NV":
            return 8;
        default: 
            return 0;
    }
}



function calculateTax({taxRate, discountValue, subTotal}) {
    return (((subTotal-discountValue)/100)*taxRate);
}

function calculateGrandTotal({subTotal, discountValue, taxToPay}) {
    grandTotal = Number(subTotal - discountValue + taxToPay);
return grandTotal;

}

function displayResult(grandTotal){
    alert("Transaction total: " + grandTotal);
}

module.exports = {
    chooseDiscountRate: chooseDiscountRate,
    chooseTaxRate: chooseTaxRate,
};