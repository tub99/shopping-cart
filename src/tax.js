const utils = require('./utils');
class Tax {
    constructor(taxAmt) {
        this.tax = taxAmt;
    }

    getTaxPerecntage() {
        return this.tax;
    }

}

module.exports = Tax;