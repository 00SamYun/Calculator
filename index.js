const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');
console.log('Please enter an operator: ');
const op = readline.prompt();
console.log('Please enter a number: ');
const num1 = readline.prompt();
console.log('Please enter a second number: ');
const num2 = readline.prompt();
let result;

if (op == '+'){
    result = +num1 + +num2;
} else if (op == '-'){
    result = +num1 - +num2;
} else if (op == '*'){
    result = +num1 * +num2;
} else if (op == '/'){
    result = +num1 / +num2;
}

console.log(`${num1} ${op} ${num2} = ${result}`)