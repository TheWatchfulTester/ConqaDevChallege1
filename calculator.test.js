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