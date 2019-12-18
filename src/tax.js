const utils = require('./utils');
class Tax {
    constructor() {
        this.tax = 12.5;
    }

    getTaxPerecntage() {
        return this.tax;
    }

    getTaxForAProduct(price) {
        return utils.roundToTwoDecimalPlaces(price * (this.tax / 100));
    }
}

module.exports = Tax;