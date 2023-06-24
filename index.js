const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================');

console.log('Please enter the operator: ');
const op = readline.prompt();

console.log('How many numbers do you want to perform this operation on? ')
const n = readline.prompt();
const all_nums = Array(+n);

for (i = 0; i < n; i++){
    console.log(`Please enter number ${i+1}: `);
    all_nums[i] = +readline.prompt();
}

let result;

switch (op){
    case '+':
        result = all_nums.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
        );
        break;
    case '-':
        result = all_nums.reduce(
            (accumulator, currentValue) => accumulator - currentValue,
        );
        break;
    case '*':
        result = all_nums.reduce(
            (accumulator, currentValue) => accumulator * currentValue,
        );
        break;
    case '/':
        result = all_nums.reduce(
            (accumulator, currentValue) => accumulator / currentValue,
        );
        break;
}

console.log('The answer is: ' + result);


