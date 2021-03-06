const expect = require('chai').expect;
const sinon = require('sinon');
const ShoppingCart = require('./../src/shoppingCart');
const Product = require('./../src/product');
const Tax = require('./../src/tax');
const utils = require('./../src/utils');

describe('Shopping Cart', () => {
    let cart, tax;
    beforeEach(() => {
        cart = new ShoppingCart();
        tax =  new Tax(12.5);
    })
    it('should create cart instance', () => {
        expect(cart).not.to.be.undefined;
    });

    describe('Adding 2 Dove soaps and then 2 Axe Deo soaps to cart', () => {
        let soap, deo, taxPcnt;
        beforeEach(() => {
            soap = new Product('Dove', 39.99);
            deo = new Product('Axe Deo', 99.99);
            cart.addItem(soap, 2);
            cart.addItem(deo, 2);
            taxPcnt = tax.getTaxPerecntage();
        });

        it('should contain 2 Dove soaps  each with a unit price of 39.99', () => {
            const soapName = soap.getName();
            expect(cart.getItemQuantity(soapName)).to.equal(2);
            expect(cart.getItemUnitPrice(soapName)).to.equal(39.99);
        });

        it('should contain 2 Axe Deoa  each with a unit price of 99.99', () => {
            const deoName = deo.getName();
            expect(cart.getItemQuantity(deoName)).to.equal(2);
            expect(cart.getItemUnitPrice(deoName)).to.equal(99.99);
        });

        it('should check carts total tax to equal 35.00', () => {
            expect(cart.getTotalTaxAmount(taxPcnt)).to.equal(35.00);
        });
        it('should check carts total price should equal 314.96', () => {
            const utilSpy = sinon.spy(cart,'getTotalPrice');
            const utilMock = sinon.mock(utils);
            utilMock.expects('roundToTwoDecimalPlaces').once().returns(0);
            expect(cart.getTotalPrice(taxPcnt)).to.equal(314.96);
            console.log('SPY CALL COUNT',utilSpy.callCount);
            sinon.assert.calledOnce(utilSpy);
            utilSpy.restore();
            utilMock.restore();
            utilMock.verify();
        })
    });

});