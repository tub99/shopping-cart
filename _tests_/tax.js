const expect = require('chai').expect;
const Tax = require('./../src/tax');
const Product = require('./../src/product');


describe('Tax', function () {
    let tax;

    beforeEach(() => {
        tax = new Tax(12.5);
    });

    it('should create a Tax object', function () {
        expect(tax).not.to.be.undefined;
    });

    it('should get tax percentage', () => {
        expect(tax.getTaxPerecntage()).to.equal(12.5);
    });

    
    it('should get tax for a particular product', () => {
        const soap = new Product('Dove', 39.99);
        expect(tax.getTaxForAProduct(soap.getPrice())).to.equal(5);
    });
});