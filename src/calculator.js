/**
 * Node.js CLI Calculator
 * 
 * Supported Basic Operations:
 * - Addition (+): Add two numbers together
 * - Subtraction (-): Subtract second number from first number
 * - Multiplication (×): Multiply two numbers together
 * - Division (÷): Divide first number by second number
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

// Export functions for use in other modules
module.exports = {
  add,
  subtract,
  multiply,
  divide
};
