#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Add two numbers
 * - Subtraction (-): Subtract second number from first
 * - Multiplication (*): Multiply two numbers
 * - Division (/): Divide first number by second
 * - Modulo (%): Remainder of division
 * - Exponentiation (^): Raise first number to power of second
 * - Square Root (√): Calculate square root of a number
 * 
 * Usage: node calculator.js <operation> <number1> [number2]
 * Example: node calculator.js add 5 3
 * Example: node calculator.js sqrt 16
 */

// Get command line arguments
const args = process.argv.slice(2);

// Display help message
function showHelp() {
  console.log(`
╔════════════════════════════════════════════╗
║       Node.js CLI Calculator v2.0          ║
╚════════════════════════════════════════════╝

Supported Operations:
  • Addition (+)       - Add two numbers
  • Subtraction (-)    - Subtract two numbers
  • Multiplication (×) - Multiply two numbers
  • Division (÷)       - Divide two numbers
  • Modulo (%)         - Remainder of division
  • Exponentiation (^) - Raise to power
  • Square Root (√)    - Calculate square root

Usage:
  node calculator.js <operation> <num1> [num2]

Operations:
  add, +               Addition
  subtract, sub, -     Subtraction
  multiply, mul, *, x  Multiplication
  divide, div, /       Division
  modulo, mod, %       Modulo
  exponentiate, exp, pow, ^, **  Exponentiation
  sqrt, squareroot     Square Root (requires only one number)

Examples:
  node calculator.js add 10 5        → 15
  node calculator.js subtract 10 5   → 5
  node calculator.js multiply 10 5   → 50
  node calculator.js divide 10 5     → 2
  node calculator.js modulo 10 3     → 1
  node calculator.js pow 2 3         → 8
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

// Exponentiation operation
function exponentiate(a, b) {
  return Math.pow(a, b);
}

// Square root operation
function squareRoot(a) {
  if (a < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(a);
}

// Main calculator function
function calculate(operation, num1, num2) {
  const a = parseFloat(num1);
  
  // For square root, we only need one number
  if (operation.toLowerCase() === 'sqrt' || operation.toLowerCase() === 'squareroot') {
    if (isNaN(a)) {
      throw new Error('Invalid number provided. Please use a valid numeric value.');
    }
    return squareRoot(a);
  }

  const b = parseFloat(num2);

  // Validate numbers
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid numbers provided. Please use valid numeric values.');
  }

  // Perform operation based on input
  switch (operation.toLowerCase()) {
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
    
    case 'exponentiate':
    case 'exp':
    case 'pow':
    case '^':
    case '**':
      return exponentiate(a, b);
    
    default:
      throw new Error(`Unknown operation: ${operation}. Use add, subtract, multiply, divide, modulo, exponentiate, or sqrt.`);
  }
}

// Main execution
try {
  if (args.length === 0 || args[0] === 'help' || args[0] === '--help' || args[0] === '-h') {
    showHelp();
    process.exit(0);
  }

  // Square root only needs 2 arguments (operation and one number)
  if ((args[0].toLowerCase() === 'sqrt' || args[0].toLowerCase() === 'squareroot') && args.length === 2) {
    const [operation, num1] = args;
    const result = calculate(operation, num1, null);
    console.log(`✓ Result: ${result}`);
    process.exit(0);
  }

  if (args.length !== 3) {
    console.error('❌ Error: Incorrect number of arguments');
    console.log('Usage: node calculator.js <operation> <num1> <num2>');
    console.log('       node calculator.js sqrt <num>');
    console.log('For more help, run: node calculator.js help');
    process.exit(1);
  }

  const [operation, num1, num2] = args;
  const result = calculate(operation, num1, num2);
  
  console.log(`✓ Result: ${result}`);
} catch (error) {
  console.error(`❌ Error: ${error.message}`);
  process.exit(1);
}
