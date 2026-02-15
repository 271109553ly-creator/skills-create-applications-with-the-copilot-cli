#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Add two numbers
 * - Subtraction (-): Subtract second number from first
 * - Multiplication (*): Multiply two numbers
 * - Division (/): Divide first number by second
 * - Modulo (%): Get remainder of division
 * - Exponentiation (**): Raise base to exponent
 * - Square Root (√): Calculate square root of a number
 * 
 * Usage: node calculator.js <operation> <number1> <number2>
 * Example: node calculator.js add 5 3
 */

// Get command line arguments
const args = process.argv.slice(2);

// Display help message
function showHelp() {
  console.log(`
╔════════════════════════════════════════════╗
║       Node.js CLI Calculator v1.0          ║
╚════════════════════════════════════════════╝

Supported Operations:
  • Addition (+)       - Add two numbers
  • Subtraction (-)    - Subtract two numbers
  • Multiplication (×) - Multiply two numbers
  • Division (÷)       - Divide two numbers
  • Modulo (%)         - Get remainder of division
  • Exponentiation (^) - Raise base to exponent
  • Square Root (√)    - Calculate square root

Usage:
  node calculator.js <operation> <num1> <num2>
  node calculator.js <operation> <num>         (for sqrt)

Operations:
  add, +               Addition
  subtract, sub, -     Subtraction
  multiply, mul, *     Multiplication
  divide, div, /       Division
  modulo, mod, %       Modulo (remainder)
  power, pow, **       Exponentiation
  sqrt, squareroot     Square Root (single argument)

Examples:
  node calculator.js add 10 5        → 15
  node calculator.js subtract 10 5   → 5
  node calculator.js multiply 10 5   → 50
  node calculator.js divide 10 5     → 2
  node calculator.js modulo 10 3     → 1
  node calculator.js power 2 8       → 256
  node calculator.js sqrt 16         → 4
  `);
}

// Addition operation
function add(a, b) {
  return a + b;
}

// Subtraction operation
function subtract(a, b) {
  return a - b;
}

// Multiplication operation
function multiply(a, b) {
  return a * b;
}

// Division operation
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// Modulo operation
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

// Power operation
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root operation
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

// Main calculator function
function calculate(operation, num1, num2) {
  const a = parseFloat(num1);
  const b = num2 !== undefined ? parseFloat(num2) : undefined;

  // Validate numbers based on operation
  const op = operation.toLowerCase();
  if (op === 'sqrt' || op === 'squareroot') {
    // Square root only needs one argument
    if (isNaN(a)) {
      throw new Error('Invalid number provided. Please use a valid numeric value.');
    }
    return squareRoot(a);
  }

  // All other operations need two arguments
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid numbers provided. Please use valid numeric values.');
  }

  // Perform operation based on input
  switch (op) {
    case 'add':
    case '+':
      return add(a, b);
    
    case 'subtract':
    case 'sub':
    case '-':
      return subtract(a, b);
    
    case 'multiply':
    case 'mul':
    case '*':
    case 'x':
      return multiply(a, b);
    
    case 'divide':
    case 'div':
    case '/':
      return divide(a, b);
    
    case 'modulo':
    case 'mod':
    case '%':
      return modulo(a, b);
    
    case 'power':
    case 'pow':
    case '**':
      return power(a, b);
    
    default:
      throw new Error(`Unknown operation: ${operation}. Use add, subtract, multiply, divide, modulo, power, or sqrt.`);
  }
}

// Main execution
try {
  if (args.length === 0 || args[0] === 'help' || args[0] === '--help' || args[0] === '-h') {
    showHelp();
    process.exit(0);
  }

  const operation = args[0];
  const isSqrt = operation && (operation.toLowerCase() === 'sqrt' || operation.toLowerCase() === 'squareroot');
  
  if ((!isSqrt && args.length !== 3) || (isSqrt && args.length !== 2)) {
    console.error('❌ Error: Incorrect number of arguments');
    if (isSqrt) {
      console.log('Usage: node calculator.js sqrt <num>');
    } else {
      console.log('Usage: node calculator.js <operation> <num1> <num2>');
    }
    console.log('For more help, run: node calculator.js help');
    process.exit(1);
  }

  const num1 = args[1];
  const num2 = args[2];
  const result = calculate(operation, num1, num2);
  
  console.log(`✓ Result: ${result}`);
} catch (error) {
  console.error(`❌ Error: ${error.message}`);
  process.exit(1);
}
