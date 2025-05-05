let leftOperand = 0;
let operator = '+';
let rightOperand = 0;


function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(leftOperand,operator,rightOperand){
    if (operator == '+'){
        return add(leftOperand,rightOperand)
    }
    if (operator == '-'){
        return subtract(leftOperand,rightOperand)
    }
    if (operator == '*'){
        return multiply (leftOperand,rightOperand)
    }
    if (operator == '/'){
        return division(leftOperand,rightOperand)
    }
}
