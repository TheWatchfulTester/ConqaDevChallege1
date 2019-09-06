const discountValue = require ('./calculator');
var subTotal = require ('./calculator');


test('return no discount when subtotal is less than 1000', () => {
    subTotal = 999;
    expect(discountRate).toBe(0);
});

