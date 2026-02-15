/**
 * Calculator Unit Tests
 * 
 * Comprehensive test suite for calculator.js
 * Tests all four basic arithmetic operations and edge cases
 */

const { execSync } = require('child_process');

// Helper function to run calculator and get result
function runCalculator(operation, num1, num2) {
  try {
    // Quote the operation to prevent shell interpretation of special characters
    const quotedOp = operation.includes('*') || operation.includes('%') ? `'${operation}'` : operation;
    const cmd = num2 !== undefined 
      ? `node src/calculator.js ${quotedOp} ${num1} ${num2}`
      : `node src/calculator.js ${quotedOp} ${num1}`;
    const output = execSync(cmd, {
      encoding: 'utf-8',
      cwd: process.cwd()
    });
    // Extract the numeric result from "✓ Result: X"
    const match = output.match(/Result: (-?\d+\.?\d*)/);
    return match ? parseFloat(match[1]) : null;
  } catch (error) {
    throw new Error(error.stderr || error.message);
  }
}

describe('Calculator - Addition Tests', () => {
  test('should add 2 + 3 = 5 (from image example)', () => {
    const result = runCalculator('add', 2, 3);
    expect(result).toBe(5);
  });

  test('should add positive integers', () => {
    expect(runCalculator('add', 10, 5)).toBe(15);
    expect(runCalculator('add', 100, 200)).toBe(300);
  });

  test('should add negative numbers', () => {
    expect(runCalculator('add', -5, -3)).toBe(-8);
    expect(runCalculator('add', -10, 5)).toBe(-5);
  });

  test('should add decimal numbers', () => {
    expect(runCalculator('add', 2.5, 3.7)).toBeCloseTo(6.2);
    expect(runCalculator('add', 0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('should add zero', () => {
    expect(runCalculator('add', 0, 0)).toBe(0);
    expect(runCalculator('add', 5, 0)).toBe(5);
  });

  test('should work with + operator alias', () => {
    expect(runCalculator('+', 7, 8)).toBe(15);
  });
});

describe('Calculator - Subtraction Tests', () => {
  test('should subtract 10 - 4 = 6 (from image example)', () => {
    const result = runCalculator('subtract', 10, 4);
    expect(result).toBe(6);
  });

  test('should subtract positive integers', () => {
    expect(runCalculator('subtract', 20, 8)).toBe(12);
    expect(runCalculator('subtract', 100, 50)).toBe(50);
  });

  test('should handle negative results', () => {
    expect(runCalculator('subtract', 5, 10)).toBe(-5);
    expect(runCalculator('subtract', 0, 15)).toBe(-15);
  });

  test('should subtract negative numbers', () => {
    expect(runCalculator('subtract', 10, -5)).toBe(15);
    expect(runCalculator('subtract', -5, -3)).toBe(-2);
  });

  test('should subtract decimal numbers', () => {
    expect(runCalculator('subtract', 10.5, 3.2)).toBeCloseTo(7.3);
  });

  test('should work with sub and - operator aliases', () => {
    expect(runCalculator('sub', 15, 5)).toBe(10);
    expect(runCalculator('-', 20, 7)).toBe(13);
  });
});

describe('Calculator - Multiplication Tests', () => {
  test('should multiply 45 * 2 = 90 (from image example)', () => {
    const result = runCalculator('multiply', 45, 2);
    expect(result).toBe(90);
  });

  test('should multiply positive integers', () => {
    expect(runCalculator('multiply', 5, 6)).toBe(30);
    expect(runCalculator('multiply', 12, 12)).toBe(144);
  });

  test('should multiply by zero', () => {
    expect(runCalculator('multiply', 100, 0)).toBe(0);
    expect(runCalculator('multiply', 0, 50)).toBe(0);
  });

  test('should multiply negative numbers', () => {
    expect(runCalculator('multiply', -5, 3)).toBe(-15);
    expect(runCalculator('multiply', -4, -7)).toBe(28);
  });

  test('should multiply decimal numbers', () => {
    expect(runCalculator('multiply', 2.5, 4)).toBe(10);
    expect(runCalculator('multiply', 1.5, 1.5)).toBeCloseTo(2.25);
  });

  test('should work with mul and x operator aliases', () => {
    expect(runCalculator('mul', 8, 9)).toBe(72);
    expect(runCalculator('x', 6, 7)).toBe(42);
  });
});

describe('Calculator - Division Tests', () => {
  test('should divide 20 / 5 = 4 (from image example)', () => {
    const result = runCalculator('divide', 20, 5);
    expect(result).toBe(4);
  });

  test('should divide positive integers', () => {
    expect(runCalculator('divide', 100, 10)).toBe(10);
    expect(runCalculator('divide', 50, 2)).toBe(25);
  });

  test('should handle division with remainders', () => {
    expect(runCalculator('divide', 10, 3)).toBeCloseTo(3.3333, 4);
    expect(runCalculator('divide', 7, 2)).toBe(3.5);
  });

  test('should divide negative numbers', () => {
    expect(runCalculator('divide', -10, 2)).toBe(-5);
    expect(runCalculator('divide', 10, -2)).toBe(-5);
    expect(runCalculator('divide', -20, -4)).toBe(5);
  });

  test('should divide decimal numbers', () => {
    expect(runCalculator('divide', 10.5, 2.1)).toBe(5);
    expect(runCalculator('divide', 6.6, 3)).toBeCloseTo(2.2);
  });

  test('should throw error on division by zero', () => {
    expect(() => runCalculator('divide', 10, 0)).toThrow();
    expect(() => runCalculator('divide', 100, 0)).toThrow(/Division by zero/);
  });

  test('should work with div and / operator aliases', () => {
    expect(runCalculator('div', 81, 9)).toBe(9);
    expect(runCalculator('/', 64, 8)).toBe(8);
  });
});

describe('Calculator - Edge Cases', () => {
  test('should handle very large numbers', () => {
    expect(runCalculator('add', 999999, 1)).toBe(1000000);
    expect(runCalculator('multiply', 1000, 1000)).toBe(1000000);
  });

  test('should handle very small decimal numbers', () => {
    expect(runCalculator('add', 0.0001, 0.0002)).toBeCloseTo(0.0003);
  });

  test('should handle zero in various operations', () => {
    expect(runCalculator('add', 0, 0)).toBe(0);
    expect(runCalculator('subtract', 0, 0)).toBe(0);
    expect(runCalculator('multiply', 0, 100)).toBe(0);
  });
});

describe('Calculator - Modulo Tests', () => {
  test('should calculate modulo 5 % 2 = 1 (from image example)', () => {
    const result = runCalculator('modulo', 5, 2);
    expect(result).toBe(1);
  });

  test('should calculate modulo with positive integers', () => {
    expect(runCalculator('modulo', 10, 3)).toBe(1);
    expect(runCalculator('modulo', 17, 5)).toBe(2);
    expect(runCalculator('modulo', 100, 7)).toBe(2);
  });

  test('should handle modulo with zero remainder', () => {
    expect(runCalculator('modulo', 10, 5)).toBe(0);
    expect(runCalculator('modulo', 20, 4)).toBe(0);
  });

  test('should handle negative numbers in modulo', () => {
    expect(runCalculator('modulo', -10, 3)).toBe(-1);
    expect(runCalculator('modulo', 10, -3)).toBe(1);
  });

  test('should handle decimal numbers in modulo', () => {
    expect(runCalculator('modulo', 7.5, 2)).toBeCloseTo(1.5);
  });

  test('should throw error on modulo by zero', () => {
    expect(() => runCalculator('modulo', 10, 0)).toThrow();
    expect(() => runCalculator('modulo', 100, 0)).toThrow(/Modulo by zero/);
  });

  test('should work with mod and % operator aliases', () => {
    expect(runCalculator('mod', 15, 4)).toBe(3);
    expect(runCalculator('%', 23, 6)).toBe(5);
  });
});

describe('Calculator - Power/Exponentiation Tests', () => {
  test('should calculate power 2 ^ 3 = 8 (from image example)', () => {
    const result = runCalculator('power', 2, 3);
    expect(result).toBe(8);
  });

  test('should calculate power with positive integers', () => {
    expect(runCalculator('power', 2, 8)).toBe(256);
    expect(runCalculator('power', 3, 3)).toBe(27);
    expect(runCalculator('power', 5, 2)).toBe(25);
  });

  test('should handle power with zero exponent', () => {
    expect(runCalculator('power', 10, 0)).toBe(1);
    expect(runCalculator('power', 999, 0)).toBe(1);
  });

  test('should handle power with one exponent', () => {
    expect(runCalculator('power', 7, 1)).toBe(7);
    expect(runCalculator('power', 100, 1)).toBe(100);
  });

  test('should handle negative exponents', () => {
    expect(runCalculator('power', 2, -1)).toBe(0.5);
    expect(runCalculator('power', 10, -2)).toBe(0.01);
  });

  test('should handle decimal bases and exponents', () => {
    expect(runCalculator('power', 2.5, 2)).toBe(6.25);
    expect(runCalculator('power', 4, 0.5)).toBe(2);
  });

  test('should handle negative bases', () => {
    expect(runCalculator('power', -2, 3)).toBe(-8);
    expect(runCalculator('power', -2, 2)).toBe(4);
  });

  test('should work with pow and ** operator aliases', () => {
    expect(runCalculator('pow', 3, 4)).toBe(81);
    expect(runCalculator('**', 2, 10)).toBe(1024);
  });
});

describe('Calculator - Square Root Tests', () => {
  test('should calculate square root of 16 = 4 (from image example)', () => {
    const result = runCalculator('sqrt', 16);
    expect(result).toBe(4);
  });

  test('should calculate square root of positive integers', () => {
    expect(runCalculator('sqrt', 4)).toBe(2);
    expect(runCalculator('sqrt', 9)).toBe(3);
    expect(runCalculator('sqrt', 25)).toBe(5);
    expect(runCalculator('sqrt', 100)).toBe(10);
  });

  test('should calculate square root of zero', () => {
    expect(runCalculator('sqrt', 0)).toBe(0);
  });

  test('should calculate square root of decimal numbers', () => {
    expect(runCalculator('sqrt', 2.25)).toBe(1.5);
    expect(runCalculator('sqrt', 6.25)).toBe(2.5);
  });

  test('should handle square root with decimal results', () => {
    expect(runCalculator('sqrt', 2)).toBeCloseTo(1.4142, 4);
    expect(runCalculator('sqrt', 3)).toBeCloseTo(1.7321, 4);
  });

  test('should throw error on square root of negative numbers', () => {
    expect(() => runCalculator('sqrt', -4)).toThrow();
    expect(() => runCalculator('sqrt', -16)).toThrow(/Cannot calculate square root of a negative number/);
    expect(() => runCalculator('sqrt', -1)).toThrow();
  });

  test('should work with squareroot alias', () => {
    expect(runCalculator('squareroot', 49)).toBe(7);
    expect(runCalculator('squareroot', 144)).toBe(12);
  });
});

describe('Calculator - Input Validation', () => {
  test('should handle invalid non-numeric inputs', () => {
    expect(() => runCalculator('add', 'abc', 5)).toThrow();
    expect(() => runCalculator('multiply', 10, 'xyz')).toThrow();
  });

  test('should handle unknown operations', () => {
    expect(() => runCalculator('unknown', 2, 3)).toThrow();
    expect(() => runCalculator('invalid', 10, 3)).toThrow();
  });
});
