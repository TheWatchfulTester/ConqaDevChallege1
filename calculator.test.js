const calculutor = require ('./calculator');



//test discount branches
test('return no discount when subtotal is less than 1000', () => {
    subTotal = 999;
    expect(calculutor.chooseDiscountRate(subTotal)).toBe(0);
});
test('return discount value 3 when subtotal is more than 1000 but less than 5000', () => {
    subTotal = 1999;
    expect(calculutor.chooseDiscountRate(subTotal)).toBe(3);
});
test('return discount value 3 when subtotal is more than 5000 but less than 7000', () => {
    subTotal = 5999;
    expect(calculutor.chooseDiscountRate(subTotal)).toBe(5);
});
test('return discount value 3 when subtotal is more than 7000 but less than 10000', () => {
    subTotal = 7999;
    expect(calculutor.chooseDiscountRate(subTotal)).toBe(7);
});
test('return discount value 3 when subtotal is more than 10000 but less than 50000', () => {
    subTotal = 10999;
    expect(calculutor.chooseDiscountRate(subTotal)).toBe(10);
});
test('return discount value 3 when subtotal is more than 50000', () => {
    subTotal = 50999;
    expect(calculutor.chooseDiscountRate(subTotal)).toBe(15);
});



//testing tax rate picker
test('return taxrate value 0 when taxcode is outside known tax codes', () => {
    taxCode = "zz";
    expect(calculutor.chooseTaxRate(taxCode)).toBe(0);
});
test('return taxrate value 6.85 when taxcode is UT', () => {
    taxCode = "UT";
    expect(calculutor.chooseTaxRate(taxCode)).toBe(6.85);
});
test('return taxrate value 8 when taxcode is NV', () => {
    taxCode = "NV";
    expect(calculutor.chooseTaxRate(taxCode)).toBe(8);
});
test('return taxrate value 4 when taxcode is AL', () => {
    taxCode = "AL";
    expect(calculutor.chooseTaxRate(taxCode)).toBe(4);
});
test('return taxrate value 8.25 when taxcode is CA', () => {
    taxCode = "CA";
    expect(calculutor.chooseTaxRate(taxCode)).toBe(8.25);
});
test('return taxrate value 6.25 when taxcode is TX', () => {
    taxCode = "TX";
    expect(calculutor.chooseTaxRate(taxCode)).toBe(6.25);
});