let currentInput = '0';
let expression = '';
let operator = null;
let previousValue = null;
let resetDisplay = false;
let history = [];

const displayElement = document.getElementById('display');
const expressionElement = document.getElementById('expression');
const historyElement = document.getElementById('history-list');

function updateDisplay() {
    displayElement.textContent = currentInput;
    expressionElement.textContent = expression;
}

function appendNumber(num) {
    if (resetDisplay) {
        currentInput = num;
        resetDisplay = false;
    } else {
        currentInput = currentInput === '0' ? num : currentInput + num;
    }
    updateDisplay();
}

function appendDecimal() {
    if (resetDisplay) {
        currentInput = '0.';
        resetDisplay = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function appendOperator(op) {
    if (previousValue !== null && !resetDisplay) {
        calculate();
    }
    
    operator = op;
    previousValue = parseFloat(currentInput);
    
    const opSymbol = {
        '+': '+',
        '-': '-',
        '*': '×',
        '/': '÷',
        '%': 'MOD',
        '^': '^'
    }[op] || op;
    
    expression = `${previousValue} ${opSymbol}`;
    resetDisplay = true;
    updateDisplay();
}

function calculate() {
    if (operator === null || previousValue === null) return;
    
    const current = parseFloat(currentInput);
    let result;
    let calcExpression = expression + ` ${current}`;
    
    try {
        switch(operator) {
            case '+':
                result = add(previousValue, current);
                break;
            case '-':
                result = subtract(previousValue, current);
                break;
            case '*':
                result = multiply(previousValue, current);
                break;
            case '/':
                result = divide(previousValue, current);
                break;
            case '%':
                result = modulo(previousValue, current);
                break;
            case '^':
                result = power(previousValue, current);
                break;
            default:
                return;
        }
        
        // 处理结果精度
        result = Math.round(result * 100000000) / 100000000;
        
        // 添加到历史记录
        addToHistory(calcExpression, result);
        
        currentInput = result.toString();
        expression = '';
        operator = null;
        previousValue = null;
        resetDisplay = true;
        updateDisplay();
    } catch (error) {
        alert('错误: ' + error.message);
        clearDisplay();
    }
}

function calculateSquareRoot() {
    try {
        const current = parseFloat(currentInput);
        const result = squareRoot(current);
        
        const calcExpression = `√(${current})`;
        addToHistory(calcExpression, result);
        
        currentInput = result.toString();
        expression = '';
        operator = null;
        previousValue = null;
        resetDisplay = true;
        updateDisplay();
    } catch (error) {
        alert('错误: ' + error.message);
    }
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    expression = '';
    operator = null;
    previousValue = null;
    resetDisplay = false;
    updateDisplay();
}

function clearEntry() {
    currentInput = '0';
    updateDisplay();
}

function backspace() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function addToHistory(expr, result) {
    history.unshift({ expression: expr, result: result });
    if (history.length > 10) {
        history.pop();
    }
    updateHistory();
}

function updateHistory() {
    historyElement.innerHTML = '';
    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `${item.expression} = <span class="result">${item.result}</span>`;
        historyElement.appendChild(div);
    });
}

// 计算器函数 - 与后端模块相同的逻辑
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('除数不能为零');
    }
    return a / b;
}

function modulo(a, b) {
    if (b === 0) {
        throw new Error('取模除数不能为零');
    }
    return a % b;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function squareRoot(n) {
    if (n < 0) {
        throw new Error('不能计算负数的平方根');
    }
    return Math.sqrt(n);
}

// 键盘支持
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
    } else if (e.key === '.') {
        appendDecimal();
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        appendOperator(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculate();
    } else if (e.key === 'Escape') {
        clearDisplay();
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        backspace();
    }
});

// 初始化显示
updateDisplay();
