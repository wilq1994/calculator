const Big = require('big.js');

module.exports = {
    add(a, b) {
        return Big(a).plus(b).toString();
    },
    subtract(a, b) {
        return Big(a).minus(b).toString();
    },
    multiply(a, b) {
        return Big(a).times(b).toString();
    },
    divide(a, b) {
        return Big(a).div(b).toString();
    }
}