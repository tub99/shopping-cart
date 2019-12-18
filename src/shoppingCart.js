const Tax = require('./tax');
const utils = require('./utils');
class ShoppingCart {

    constructor() {
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
        for (let prop of Object.keys(this.priceQuantityMap)) {
            const product = this.priceQuantityMap[prop];
            cartPrice += product.unitPrice * product.quantity;
        }
        return utils.roundToTwoDecimalPlaces(cartPrice + this.getTotalTaxAmount());
    }

    getTotalTaxAmount() {
        let totSalesTax = 0;

        for (let prop of Object.keys(this.priceQuantityMap)) {
            const product = this.priceQuantityMap[prop];
            totSalesTax += this.tax.getTaxForAProduct(product.unitPrice) * product.quantity;
        }
        return totSalesTax;
    }
}

module.exports = ShoppingCart;