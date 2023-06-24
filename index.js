const readline = require('readline-sync');

printWelcomeMessage();
let stop = 'y';
while (stop == 'y'){
    const op = getOperator();
    const n = getN();
    const result = performOneCalculation(getOperands(n), op);
    console.log('The answer is: ' + result);
    stop = getResponse('Press y to do another calculation. Press any other key to exit.');
}


function printWelcomeMessage(){
    console.log('Welcome to the calculator!');
    console.log('==========================');
}
function getResponse(text){
    console.log(text);
    const response = readline.prompt();
    return response;
};

function getNumber(text){
    let number;
    do {
        number = +getResponse(text);
    } while (isNaN(number));
    return number;
}

function getN(){
    const n = getNumber('How many numbers do you want to perform this operation on? ');
    if (n <= 1){
        console.log('Please choose a number greater than 1.');
        getN();
    }
    return n;
}

function getOperator(){
    const valid_ops = ['+','-','*','/'];
    const op = getResponse('Please enter the operator: ');
    if (!(valid_ops.includes(op))){
        console.log(`"${op}" is not a valid operator.`);
        getOperator();
    }
    return op;
}

function getOperands(n){
    const all_nums = [];
    for (i = 0; i < n; i++){
        all_nums[i] = getNumber(`Please enter number ${i+1}: `);
    }
    return all_nums;
}

function performOneCalculation(operands, operator){
    let result;
    switch (operator){
        case '+':
            result = operands.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
            );
            break;
        case '-':
            result = operands.reduce(
                (accumulator, currentValue) => accumulator - currentValue,
            );
            break;
        case '*':
            result = operands.reduce(
                (accumulator, currentValue) => accumulator * currentValue,
            );
            break;
        case '/':
            result = operands.reduce(
                (accumulator, currentValue) => accumulator / currentValue,
            );
            break;
    }
    return result;
}




