function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function devide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case 'x':
            return multiply(num1, num2);
            break;
        case '÷':
            return devide(num1, num2);
            break;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const display = document.querySelector('.display');
        const buttonContent = button.textContent;

        if (buttonContent === 'c') {
            display.textContent = '';
            return;
        }
        if (buttonContent === 'x'|| buttonContent === '-' || buttonContent === '+' || buttonContent === '÷') {
            display.textContent += ` ${buttonContent} `;
            return;
        }
        if (buttonContent === '=') {
            const expression = display.textContent.split(' ');
            const result = operate(expression[1], expression[0], expression[2])

            if (result === Infinity) {
                display.textContent = "ERROR";
                return
            }

            if (display.textContent.split('.').length > 1) {
                display.textContent = result.toFixed(1);
            } else {
                display.textContent = result
            }
            return;
        }

        document.querySelector('.display').textContent += button.textContent;
    })
})