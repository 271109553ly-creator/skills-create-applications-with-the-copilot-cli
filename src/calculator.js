/**
 * Node.js CLI Calculator
 * 
 * Supported Basic Operations:
 * - Addition (+): Add two numbers together
 * - Subtraction (-): Subtract second number from first number
 * - Multiplication (×): Multiply two numbers together
 * - Division (÷): Divide first number by second number
 * 
 * Advanced Operations:
 * - Modulo (%): Calculate remainder of division
 * - Exponentiation (^): Raise base to exponent power
 * - Square Root (√): Calculate square root of a number
 * 
 * This calculator implements the four fundamental arithmetic operations
 * as shown in the calculator interface.
 */

/**
 * Addition - Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction - Subtracts second number from first
 * @param {number} a - First number (minuend)
 * @param {number} b - Second number (subtrahend)
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication - Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division - Divides first number by second
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number} Quotient of a divided by b
 * @throws {Error} If division by zero is attempted
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Modulo - Returns the remainder of a divided by b
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If divisor is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Power - Returns base raised to the exponent
 * @param {number} base - Base number
 * @param {number} exponent - Power to raise base to
 * @returns {number} Result of base^exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square Root - Returns the square root of n
 * @param {number} n - Number to calculate square root of
 * @returns {number} Square root of n
 * @throws {Error} If n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

// Export functions for use in other modules
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot
};
