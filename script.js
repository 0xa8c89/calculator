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
        if (button.textContent === 'c') {
            display.textContent = '';
            return;
        }
        if (button.textContent === '=') {
        }

        document.querySelector('.display').textContent += button.textContent;
    })
})