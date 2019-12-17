function Product(type, price){
 this.getType = function(){
     return type;
 }
 this.getPrice = function(){
     return price;
 }
}

module.exports = Product;