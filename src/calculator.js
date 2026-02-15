#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Add two numbers
 * - Subtraction (-): Subtract second number from first
 * - Multiplication (*): Multiply two numbers
 * - Division (/): Divide first number by second
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

Usage:
  node calculator.js <operation> <num1> <num2>

Operations:
  add, +               Addition
  subtract, sub, -     Subtraction
  multiply, mul, *     Multiplication
  divide, div, /       Division

Examples:
  node calculator.js add 10 5        → 15
  node calculator.js subtract 10 5   → 5
  node calculator.js multiply 10 5   → 50
  node calculator.js divide 10 5     → 2
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

// Main calculator function
function calculate(operation, num1, num2) {
  const a = parseFloat(num1);
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
    
    default:
      throw new Error(`Unknown operation: ${operation}. Use add, subtract, multiply, or divide.`);
  }
}

// Main execution
try {
  if (args.length === 0 || args[0] === 'help' || args[0] === '--help' || args[0] === '-h') {
    showHelp();
    process.exit(0);
  }

  if (args.length !== 3) {
    console.error('❌ Error: Incorrect number of arguments');
    console.log('Usage: node calculator.js <operation> <num1> <num2>');
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
