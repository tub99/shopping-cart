class ShoppingCart {

    constructor() {
        this.productList = [];
    }
    getItems() {
        return this.productList;
    }
    addItem(product, quantity) {
        for (let i = 0; i < quantity; i++) {
            this.productList.push(product);
        }
    }
    getTotalPrice() {
        let cartPrice = 0;
        for (let i = 0; i < this.productList.length; i++) {
            const productPrice =this.productList[i].getPrice();
            cartPrice += productPrice;
        }
        return Math.round(cartPrice * 100) / 100;
    }
}

module.exports = ShoppingCart;