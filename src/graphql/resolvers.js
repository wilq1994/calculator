const CalculationService = require("../services/CalculationService");

module.exports = {
  Query: {
    status: () => "ok",
  },

  Mutation: {
    add: (parent, { a, b }) => CalculationService.add(a, b),
    subtract: (parent, { a, b }) => CalculationService.subtract(a, b),
    multiply: (parent, { a, b }) => CalculationService.multiply(a, b),
    divide: (parent, { a, b }) => CalculationService.divide(a, b),
  },
};
