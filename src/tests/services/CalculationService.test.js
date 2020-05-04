const CalculationService = require("../../services/CalculationService");

describe("CalculationService", () => {
  describe("add", () => {
    test("should return 3 if a equals 1 and b equals 2", () => {
      expect(CalculationService.add(1, 2)).toBe("3");
    });

    test("should return 4.155 if a equals 1.555 and b equals 2.6", () => {
      expect(CalculationService.add(1.555, 2.6)).toBe("4.155");
    });
  });

  describe("subtract", () => {
    test("should return 2 if a equals 5 and b equals 3", () => {
      expect(CalculationService.subtract(5, 3)).toBe("2");
    });

    test("should return 477.234 if a equals 1000.234 and b equals 523", () => {
      expect(CalculationService.subtract(1000.234, 523)).toBe("477.234");
    });
  });

  describe("multiply", () => {
    test("should return 8 if a equals 5 and b equals 3", () => {
      expect(CalculationService.multiply(2, 4)).toBe("8");
    });

    test("should return 9.25 if a equals 2.5 and b equals 3.7", () => {
      expect(CalculationService.multiply(2.5, 3.7)).toBe("9.25");
    });

    test("should return 0 if a equals 2.5 and b equals 0", () => {
      expect(CalculationService.multiply(2.5, 0)).toBe("0");
    });
  });

  describe("divide", () => {
    test("should return 2 if a equals 4 and b equals 2", () => {
      expect(CalculationService.divide(4, 2)).toBe("2");
    });

    test("should return 2.5 if a equals 10 and b equals 4", () => {
      expect(CalculationService.divide(10, 4)).toBe("2.5");
    });
  });
});
