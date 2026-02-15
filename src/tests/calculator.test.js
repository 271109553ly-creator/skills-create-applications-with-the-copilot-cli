const calculator = require('../calculator');

describe('Addition Tests', () => {
  test('adds two positive numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('adds positive and negative numbers', () => {
    expect(calculator.add(10, -4)).toBe(6);
  });

  test('adds two negative numbers', () => {
    expect(calculator.add(-5, -3)).toBe(-8);
  });

  test('adds decimal numbers', () => {
    expect(calculator.add(1.5, 2.3)).toBeCloseTo(3.8);
  });
});

describe('Subtraction Tests', () => {
  test('subtracts two positive numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test('subtracts negative from positive', () => {
    expect(calculator.subtract(5, -3)).toBe(8);
  });

  test('subtracts positive from negative', () => {
    expect(calculator.subtract(-5, 3)).toBe(-8);
  });

  test('subtracts decimal numbers', () => {
    expect(calculator.subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

describe('Multiplication Tests', () => {
  test('multiplies two positive numbers', () => {
    expect(calculator.multiply(45, 2)).toBe(90);
  });

  test('multiplies positive and negative numbers', () => {
    expect(calculator.multiply(5, -3)).toBe(-15);
  });

  test('multiplies two negative numbers', () => {
    expect(calculator.multiply(-4, -5)).toBe(20);
  });

  test('multiplies by zero', () => {
    expect(calculator.multiply(10, 0)).toBe(0);
  });

  test('multiplies decimal numbers', () => {
    expect(calculator.multiply(2.5, 4)).toBe(10);
  });
});

describe('Division Tests', () => {
  test('divides two positive numbers', () => {
    expect(calculator.divide(20, 5)).toBe(4);
  });

  test('divides with decimal result', () => {
    expect(calculator.divide(10, 4)).toBe(2.5);
  });

  test('divides negative by positive', () => {
    expect(calculator.divide(-10, 2)).toBe(-5);
  });

  test('divides positive by negative', () => {
    expect(calculator.divide(10, -2)).toBe(-5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
  });
});

describe('Modulo Tests', () => {
  test('calculates modulo of two positive numbers', () => {
    expect(calculator.modulo(10, 3)).toBe(1);
  });

  test('calculates modulo with zero remainder', () => {
    expect(calculator.modulo(10, 5)).toBe(0);
  });

  test('calculates modulo with negative dividend', () => {
    expect(calculator.modulo(-10, 3)).toBe(-1);
  });

  test('calculates modulo with negative divisor', () => {
    expect(calculator.modulo(10, -3)).toBe(1);
  });

  test('calculates modulo of decimal numbers', () => {
    expect(calculator.modulo(10.5, 3)).toBeCloseTo(1.5);
  });

  test('throws error when modulo by zero', () => {
    expect(() => calculator.modulo(10, 0)).toThrow('Modulo by zero is not allowed');
  });
});

describe('Exponentiation Tests', () => {
  test('calculates power of two positive numbers', () => {
    expect(calculator.power(2, 3)).toBe(8);
  });

  test('calculates power with exponent 0', () => {
    expect(calculator.power(5, 0)).toBe(1);
  });

  test('calculates power with exponent 1', () => {
    expect(calculator.power(7, 1)).toBe(7);
  });

  test('calculates power with negative exponent', () => {
    expect(calculator.power(2, -2)).toBe(0.25);
  });

  test('calculates power of negative base with even exponent', () => {
    expect(calculator.power(-2, 2)).toBe(4);
  });

  test('calculates power of negative base with odd exponent', () => {
    expect(calculator.power(-2, 3)).toBe(-8);
  });

  test('calculates power with decimal base', () => {
    expect(calculator.power(1.5, 2)).toBe(2.25);
  });

  test('calculates power with decimal exponent', () => {
    expect(calculator.power(4, 0.5)).toBe(2);
  });
});

describe('Square Root Tests', () => {
  test('calculates square root of perfect square', () => {
    expect(calculator.squareRoot(9)).toBe(3);
  });

  test('calculates square root of zero', () => {
    expect(calculator.squareRoot(0)).toBe(0);
  });

  test('calculates square root of non-perfect square', () => {
    expect(calculator.squareRoot(2)).toBeCloseTo(1.414, 3);
  });

  test('calculates square root of decimal number', () => {
    expect(calculator.squareRoot(6.25)).toBe(2.5);
  });

  test('calculates square root of large number', () => {
    expect(calculator.squareRoot(144)).toBe(12);
  });

  test('throws error for negative number', () => {
    expect(() => calculator.squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
  });
});

describe('Edge Cases', () => {
  test('handles very large numbers in addition', () => {
    expect(calculator.add(1e10, 1e10)).toBe(2e10);
  });

  test('handles very small decimal numbers', () => {
    expect(calculator.multiply(0.1, 0.1)).toBeCloseTo(0.01);
  });

  test('handles Infinity in division', () => {
    expect(calculator.divide(1, 0.000001)).toBe(1000000);
  });
});
