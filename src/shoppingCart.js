const utils = require('./utils');

class ShoppingCart {

    constructor() {
        this.productStore = {};
    }
    getItemQuantity(name) {
        return this.productStore[name].quantity;
    }

    getItemUnitPrice(name) {
        return this.productStore[name].unitPrice;
    }

    storeProductToCart(product, quantity) {
        const productName = product.getName();
        if (!this.productStore[productName]) {
            this.productStore[productName] = { unitPrice: product.getPrice(), quantity: quantity }
        } else {
            this.productStore[productName].quantity += quantity;
        }
    }

    addItem(product, quantity) {
        this.storeProductToCart(product, quantity);
    }
    
    getTotalPrice(tax) {
        let cartPrice = 0;
        for (let prop of Object.keys(this.productStore)) {
            const product = this.productStore[prop];
            cartPrice += product.unitPrice * product.quantity;
        }
        return utils.roundToTwoDecimalPlaces(cartPrice + this.getTotalTaxAmount(tax));
    }

    getTotalTaxAmount(tax) {
        let totSalesTax = 0;
        for (let prop of Object.keys(this.productStore)) {
            const product = this.productStore[prop];
            totSalesTax += utils.roundToTwoDecimalPlaces((product.unitPrice* (tax/100)) * product.quantity);
        }
        return totSalesTax;
    }
}

module.exports = ShoppingCart;