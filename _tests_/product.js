const expect = require('chai').expect;
const Product = require('./../src/product');

describe('Product', function() {
    it('should create a Product Dove Soap with price 39.99', function() {
        const product = new Product('Dove Soap', 39.99);
        expect(product).not.to.be.undefined;
        expect(product.getName()).to.equal('Dove Soap');
        expect(product.getPrice()).to.equal(39.99);
      });
  });