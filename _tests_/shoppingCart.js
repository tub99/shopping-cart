const assert = require('assert');
var expect = require('chai').expect;
const ShoppingCart = require('./../src/shoppingCart');
const Product = require('./../src/product');

describe('Shopping Cart', () => {
    let cart;
    beforeEach(() => {
        cart = new ShoppingCart();
    })
    it('should create cart instance', () => {

        expect(cart).not.to.be.undefined;
    });

    describe('Step 3 :Adding 2 Dove soaps and then 2 Axe Deo soaps to cart', () => {
        let soap, deo;
        beforeEach(() => {
            soap = new Product('Dove', 39.99);
            deo = new Product('Axe Deo',99.99);
            cart.addItem(soap, 2);
            cart.addItem(deo, 2);
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

        it('should check carts total tax', () => {
            expect(cart.getTotalTaxAmount()).to.equal(35.00);
        });
        it(' shopping cart’s total price should equal 314.96', ()=>{
            expect(cart.getTotalPrice()).to.equal(314.96);
        })
    });

});