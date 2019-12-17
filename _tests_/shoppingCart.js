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

    describe('Adding 5 Dove soaps', () => {
        let soap;
        beforeEach(() => {
            soap = new Product('Dove', 39.99);
            cart.addItem(soap, 5);
        });

        it('should have 5 Dove saops in cart', () => {
            expect(cart.getItems().length).to.equal(5)
        })

        it('should check carts total price', () => {
            expect(cart.getTotalPrice()).to.equal(199.95)
        })
    })


});