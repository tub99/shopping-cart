const Tax = require('./tax');
const utils = require('./utils');
class ShoppingCart {

    constructor() {
        this.productList = [];
        this.priceQuantityMap = {};
        this.tax = new Tax();
    }
    getItemQuantity(name) {
        return this.priceQuantityMap[name].quantity;
    }

    getItemUnitPrice(name) {
        return this.priceQuantityMap[name].unitPrice;
    }

    mapPriceQuantity(product, quantity) {
        const productName = product.getName();
        if (!this.priceQuantityMap[productName]) {
            this.priceQuantityMap[productName] = { unitPrice: product.getPrice(), quantity: quantity }
        } else {
            this.priceQuantityMap[productName].quantity += quantity;
        }
    }

    addItem(product, quantity) {
        this.mapPriceQuantity(product, quantity)
        for (let i = 0; i < quantity; i++) {
            this.productList.push(product);
        }
    }
    getTotalPrice() {
        let cartPrice = 0;
        for (let i = 0; i < this.productList.length; i++) {
            const productPrice = this.productList[i].getPrice();
            cartPrice += productPrice;
        }
        return utils.roundToTwoDecimalPlaces(cartPrice+this.getTotalTaxAmount());
    }

    getTotalTaxAmount(){
        let totSalesTax = 0;
        for (let i = 0; i < this.productList.length; i++) {
            const productPrice = this.productList[i].getPrice();
            totSalesTax += this.tax.getTaxForAProduct(productPrice);
        }
        console.log('Total sales tax', totSalesTax);
        return totSalesTax;
    }
}

module.exports = ShoppingCart;