const assert = require('assert');
var expect = require('chai').expect;
const ShoppingCart = require('./../src/shoppingCart');

describe('Shopping Cart', ()=> {
    let cart;
    beforeEach(()=>{
        cart = new ShoppingCart();
    })
    it('should create cart instance', () => {
       
        expect(cart).not.to.be.undefined;
      });

      it('should add 5 Dove Soaps to cart', () =>{

      })
  });