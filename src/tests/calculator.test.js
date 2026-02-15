/**
 * Calculator Unit Tests
 * 
 * Comprehensive test suite for calculator.js
 * Tests all four basic arithmetic operations and edge cases
 */

const calculator = require('../calculator.js');

describe('Calculator - Addition Tests', () => {
  test('should add 2 + 3 = 5 (from image example)', () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  test('should add positive integers', () => {
    expect(calculator.add(10, 5)).toBe(15);
    expect(calculator.add(100, 200)).toBe(300);
    expect(calculator.add(7, 8)).toBe(15);
  });

  test('should add negative numbers', () => {
    expect(calculator.add(-5, -3)).toBe(-8);
    expect(calculator.add(-10, 5)).toBe(-5);
    expect(calculator.add(5, -3)).toBe(2);
  });

  test('should add decimal numbers', () => {
    expect(calculator.add(2.5, 3.7)).toBeCloseTo(6.2);
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(calculator.add(1.111, 2.222)).toBeCloseTo(3.333);
  });

  test('should add zero', () => {
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(5, 0)).toBe(5);
    expect(calculator.add(0, 10)).toBe(10);
  });

  test('should handle large numbers', () => {
    expect(calculator.add(1000000, 2000000)).toBe(3000000);
  });
});

describe('Calculator - Subtraction Tests', () => {
  test('should subtract 10 - 4 = 6 (from image example)', () => {
    const result = calculator.subtract(10, 4);
    expect(result).toBe(6);
  });

  test('should subtract positive integers', () => {
    expect(calculator.subtract(20, 8)).toBe(12);
    expect(calculator.subtract(100, 50)).toBe(50);
    expect(calculator.subtract(15, 5)).toBe(10);
  });

  test('should handle negative results', () => {
    expect(calculator.subtract(5, 10)).toBe(-5);
    expect(calculator.subtract(0, 15)).toBe(-15);
    expect(calculator.subtract(3, 8)).toBe(-5);
  });

  test('should subtract negative numbers', () => {
    expect(calculator.subtract(10, -5)).toBe(15);
    expect(calculator.subtract(-5, -3)).toBe(-2);
    expect(calculator.subtract(-10, 5)).toBe(-15);
  });

  test('should subtract decimal numbers', () => {
    expect(calculator.subtract(10.5, 3.2)).toBeCloseTo(7.3);
    expect(calculator.subtract(5.75, 2.25)).toBe(3.5);
  });

  test('should subtract zero', () => {
    expect(calculator.subtract(10, 0)).toBe(10);
    expect(calculator.subtract(0, 0)).toBe(0);
  });
});

describe('Calculator - Multiplication Tests', () => {
  test('should multiply 45 * 2 = 90 (from image example)', () => {
    const result = calculator.multiply(45, 2);
    expect(result).toBe(90);
  });

  test('should multiply positive integers', () => {
    expect(calculator.multiply(5, 6)).toBe(30);
    expect(calculator.multiply(12, 12)).toBe(144);
    expect(calculator.multiply(8, 9)).toBe(72);
  });

  test('should multiply by zero', () => {
    expect(calculator.multiply(100, 0)).toBe(0);
    expect(calculator.multiply(0, 50)).toBe(0);
    expect(calculator.multiply(0, 0)).toBe(0);
  });

  test('should multiply negative numbers', () => {
    expect(calculator.multiply(-5, 3)).toBe(-15);
    expect(calculator.multiply(-4, -7)).toBe(28);
    expect(calculator.multiply(6, -3)).toBe(-18);
  });

  test('should multiply decimal numbers', () => {
    expect(calculator.multiply(2.5, 4)).toBe(10);
    expect(calculator.multiply(1.5, 1.5)).toBeCloseTo(2.25);
    expect(calculator.multiply(0.5, 0.5)).toBe(0.25);
  });

  test('should multiply by one', () => {
    expect(calculator.multiply(42, 1)).toBe(42);
    expect(calculator.multiply(1, 100)).toBe(100);
  });
});

describe('Calculator - Division Tests', () => {
  test('should divide 20 / 5 = 4 (from image example)', () => {
    const result = calculator.divide(20, 5);
    expect(result).toBe(4);
  });

  test('should divide positive integers', () => {
    expect(calculator.divide(100, 10)).toBe(10);
    expect(calculator.divide(50, 2)).toBe(25);
    expect(calculator.divide(144, 12)).toBe(12);
  });

  test('should handle division with remainders (decimals)', () => {
    expect(calculator.divide(10, 3)).toBeCloseTo(3.3333, 4);
    expect(calculator.divide(7, 2)).toBe(3.5);
    expect(calculator.divide(5, 4)).toBe(1.25);
  });

  test('should divide negative numbers', () => {
    expect(calculator.divide(-20, 5)).toBe(-4);
    expect(calculator.divide(20, -4)).toBe(-5);
    expect(calculator.divide(-30, -6)).toBe(5);
  });

  test('should divide decimal numbers', () => {
    expect(calculator.divide(5.5, 2)).toBe(2.75);
    expect(calculator.divide(10.5, 3.5)).toBe(3);
  });

  test('should divide by one', () => {
    expect(calculator.divide(100, 1)).toBe(100);
    expect(calculator.divide(42, 1)).toBe(42);
  });

  test('should handle zero dividend', () => {
    expect(calculator.divide(0, 5)).toBe(0);
    expect(calculator.divide(0, 100)).toBe(0);
  });
});

describe('Calculator - Modulo Tests', () => {
  test('should calculate 5 % 2 = 1 (from image example)', () => {
    const result = calculator.modulo(5, 2);
    expect(result).toBe(1);
  });

  test('should calculate modulo for positive integers', () => {
    expect(calculator.modulo(10, 3)).toBe(1);
    expect(calculator.modulo(17, 5)).toBe(2);
    expect(calculator.modulo(20, 6)).toBe(2);
    expect(calculator.modulo(100, 7)).toBe(2);
  });

  test('should handle modulo with result zero', () => {
    expect(calculator.modulo(10, 5)).toBe(0);
    expect(calculator.modulo(100, 10)).toBe(0);
    expect(calculator.modulo(9, 3)).toBe(0);
  });

  test('should handle modulo with negative numbers', () => {
    expect(calculator.modulo(-10, 3)).toBe(-1);
    expect(calculator.modulo(10, -3)).toBe(1);
    expect(calculator.modulo(-10, -3)).toBe(-1);
  });

  test('should handle modulo with decimal numbers', () => {
    expect(calculator.modulo(5.5, 2)).toBeCloseTo(1.5);
    expect(calculator.modulo(10.7, 3)).toBeCloseTo(1.7, 1);
  });

  test('should handle modulo where dividend is smaller than divisor', () => {
    expect(calculator.modulo(3, 5)).toBe(3);
    expect(calculator.modulo(2, 10)).toBe(2);
  });

  test('should throw error on modulo by zero', () => {
    expect(() => calculator.modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    expect(() => calculator.modulo(5, 0)).toThrow('Modulo by zero is not allowed');
    expect(() => calculator.modulo(0, 0)).toThrow('Modulo by zero is not allowed');
  });
});

describe('Calculator - Power (Exponentiation) Tests', () => {
  test('should calculate 2 ^ 3 = 8 (from image example)', () => {
    const result = calculator.power(2, 3);
    expect(result).toBe(8);
  });

  test('should calculate power for positive integers', () => {
    expect(calculator.power(5, 2)).toBe(25);
    expect(calculator.power(3, 4)).toBe(81);
    expect(calculator.power(10, 3)).toBe(1000);
    expect(calculator.power(2, 10)).toBe(1024);
  });

  test('should handle power of zero', () => {
    expect(calculator.power(5, 0)).toBe(1);
    expect(calculator.power(100, 0)).toBe(1);
    expect(calculator.power(0, 5)).toBe(0);
  });

  test('should handle power of one', () => {
    expect(calculator.power(10, 1)).toBe(10);
    expect(calculator.power(42, 1)).toBe(42);
    expect(calculator.power(1, 100)).toBe(1);
  });

  test('should handle negative exponents', () => {
    expect(calculator.power(2, -1)).toBe(0.5);
    expect(calculator.power(10, -2)).toBe(0.01);
    expect(calculator.power(5, -1)).toBe(0.2);
  });

  test('should handle negative base with positive exponent', () => {
    expect(calculator.power(-2, 3)).toBe(-8);
    expect(calculator.power(-3, 2)).toBe(9);
    expect(calculator.power(-5, 4)).toBe(625);
  });

  test('should handle decimal exponents (roots)', () => {
    expect(calculator.power(4, 0.5)).toBeCloseTo(2);
    expect(calculator.power(27, 1/3)).toBeCloseTo(3);
    expect(calculator.power(16, 0.25)).toBeCloseTo(2);
  });

  test('should handle decimal base', () => {
    expect(calculator.power(2.5, 2)).toBe(6.25);
    expect(calculator.power(1.5, 3)).toBe(3.375);
  });

  test('should handle large exponents', () => {
    expect(calculator.power(2, 20)).toBe(1048576);
    expect(calculator.power(10, 5)).toBe(100000);
  });
});

describe('Calculator - Square Root Tests', () => {
  test('should calculate √16 = 4 (from image example)', () => {
    const result = calculator.squareRoot(16);
    expect(result).toBe(4);
  });

  test('should calculate square root for perfect squares', () => {
    expect(calculator.squareRoot(25)).toBe(5);
    expect(calculator.squareRoot(9)).toBe(3);
    expect(calculator.squareRoot(100)).toBe(10);
    expect(calculator.squareRoot(144)).toBe(12);
    expect(calculator.squareRoot(1)).toBe(1);
  });

  test('should calculate square root for non-perfect squares', () => {
    expect(calculator.squareRoot(2)).toBeCloseTo(1.4142, 4);
    expect(calculator.squareRoot(3)).toBeCloseTo(1.7321, 4);
    expect(calculator.squareRoot(5)).toBeCloseTo(2.2361, 4);
    expect(calculator.squareRoot(10)).toBeCloseTo(3.1623, 4);
  });

  test('should handle square root of zero', () => {
    expect(calculator.squareRoot(0)).toBe(0);
  });

  test('should calculate square root of decimal numbers', () => {
    expect(calculator.squareRoot(6.25)).toBe(2.5);
    expect(calculator.squareRoot(0.25)).toBe(0.5);
    expect(calculator.squareRoot(2.25)).toBe(1.5);
  });

  test('should handle square root of large numbers', () => {
    expect(calculator.squareRoot(10000)).toBe(100);
    expect(calculator.squareRoot(1000000)).toBe(1000);
  });

  test('should handle square root of very small numbers', () => {
    expect(calculator.squareRoot(0.01)).toBeCloseTo(0.1);
    expect(calculator.squareRoot(0.0001)).toBeCloseTo(0.01);
  });

  test('should throw error for negative numbers', () => {
    expect(() => calculator.squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    expect(() => calculator.squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
    expect(() => calculator.squareRoot(-100)).toThrow('Cannot calculate square root of a negative number');
    expect(() => calculator.squareRoot(-0.5)).toThrow('Cannot calculate square root of a negative number');
  });
});

describe('Calculator - Edge Cases and Error Handling', () => {
  test('should throw error on division by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
    expect(() => calculator.divide(100, 0)).toThrow('Division by zero is not allowed');
    expect(() => calculator.divide(0, 0)).toThrow('Division by zero is not allowed');
  });

  test('should handle very small decimal operations', () => {
    expect(calculator.add(0.1, 0.1)).toBeCloseTo(0.2);
    expect(calculator.multiply(0.1, 0.1)).toBeCloseTo(0.01);
  });

  test('should handle large number operations', () => {
    expect(calculator.add(999999, 1)).toBe(1000000);
    expect(calculator.multiply(1000, 1000)).toBe(1000000);
  });

  test('should maintain precision with negative decimals', () => {
    expect(calculator.add(-0.1, -0.2)).toBeCloseTo(-0.3);
    expect(calculator.subtract(-5.5, 2.5)).toBe(-8);
  });
});
