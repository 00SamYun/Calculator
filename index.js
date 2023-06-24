const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('Please enter a number: ');
const num1 = readline.prompt();
console.log('Please enter a second number: ');
const num2 = readline.prompt();
let product = +num1 * +num2;
console.log("The product of %o and %o is: %o", num1, num2, product);