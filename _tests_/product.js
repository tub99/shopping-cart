const assert = require('assert');
var expect = require('chai').expect;
const Product = require('./../src/product');

describe('Product', function() {
    it('should create a Product with type and price', function() {
        const product = new Product('Dove', 35);
        expect(product).not.to.be.undefined;
        assert.equal(product.getName(), 'Dove');
        assert.equal(product.getPrice(), 35);
      });
  });