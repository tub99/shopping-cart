class Product{
    constructor(type, price){
        this.type = type;
        this.price = price;
    }

    getType(){
        return this.type;
    }

    getPrice(){
        return this.price;
    }
}

module.exports = Product;