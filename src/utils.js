const utils = {
    roundToTwoDecimalPlaces : (amt) =>{
        return Math.round(amt * 100) / 100;
    }
}
module.exports = utils;