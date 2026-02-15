#!/usr/bin/env node

/**
 * Interactive CLI Calculator
 * A command-line interface for the calculator module
 */

const readline = require('readline');
const calculator = require('./src/calculator.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Welcome message
console.log('\n🧮 欢迎使用交互式计算器！');
console.log('━'.repeat(50));
console.log('\n支持的运算：');
console.log('  加法: 5 + 3');
console.log('  减法: 10 - 4');
console.log('  乘法: 6 * 7');
console.log('  除法: 20 / 4');
console.log('  取模: 10 % 3');
console.log('  幂运算: 2 ^ 8');
console.log('  平方根: sqrt(16) 或 √(25)');
console.log('\n命令：');
console.log('  help - 显示帮助信息');
console.log('  clear - 清屏');
console.log('  exit 或 quit - 退出计算器');
console.log('━'.repeat(50));
console.log();

function parseExpression(input) {
  input = input.trim();

  // Handle commands
  if (input === 'help') {
    console.log('\n支持的运算符：');
    console.log('  + (加法), - (减法), * (乘法), / (除法)');
    console.log('  % (取模), ^ (幂运算)');
    console.log('  sqrt(n) 或 √(n) - 平方根');
    console.log('\n示例：');
    console.log('  5 + 3');
    console.log('  2 ^ 10');
    console.log('  sqrt(144)\n');
    return null;
  }

  if (input === 'clear') {
    console.clear();
    console.log('🧮 计算器');
    return null;
  }

  if (input === 'exit' || input === 'quit') {
    console.log('\n👋 再见！感谢使用计算器。\n');
    rl.close();
    process.exit(0);
  }

  // Handle sqrt function
  if (input.match(/^(sqrt|√)\s*\(\s*([0-9.]+)\s*\)$/)) {
    const match = input.match(/^(sqrt|√)\s*\(\s*([0-9.]+)\s*\)$/);
    const num = parseFloat(match[2]);
    try {
      return calculator.squareRoot(num);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Handle binary operations
  const operators = [
    { regex: /^([0-9.]+)\s*\+\s*([0-9.]+)$/, func: calculator.add, symbol: '+' },
    { regex: /^([0-9.]+)\s*-\s*([0-9.]+)$/, func: calculator.subtract, symbol: '-' },
    { regex: /^([0-9.]+)\s*\*\s*([0-9.]+)$/, func: calculator.multiply, symbol: '*' },
    { regex: /^([0-9.]+)\s*\/\s*([0-9.]+)$/, func: calculator.divide, symbol: '/' },
    { regex: /^([0-9.]+)\s*%\s*([0-9.]+)$/, func: calculator.modulo, symbol: '%' },
    { regex: /^([0-9.]+)\s*\^\s*([0-9.]+)$/, func: calculator.power, symbol: '^' }
  ];

  for (const op of operators) {
    const match = input.match(op.regex);
    if (match) {
      const a = parseFloat(match[1]);
      const b = parseFloat(match[2]);
      try {
        return op.func(a, b);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }

  throw new Error('无效的表达式。输入 "help" 查看帮助。');
}

function prompt() {
  rl.question('计算 > ', (input) => {
    if (!input.trim()) {
      prompt();
      return;
    }

    try {
      const result = parseExpression(input);
      if (result !== null) {
        console.log(`结果: ${result}\n`);
      }
    } catch (error) {
      console.log(`❌ 错误: ${error.message}\n`);
    }

    prompt();
  });
}

// Start the interactive prompt
prompt();

// Handle Ctrl+C
rl.on('close', () => {
  console.log('\n👋 再见！\n');
  process.exit(0);
});
