let leftOperand = 0;
let operator = '+';
let rightOperand = 0;

/*
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
*/

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

function addNumDisplay(){

}

let currNumber = 0;

const inp = document.querySelector("#inp");

const num1 = document.getElementById('num1');
num1.addEventListener('click',function(){
    currNumber = (currNumber * 10) + 1;
    inp.value = currNumber;
});

const num2 = document.getElementById('num2');
num2.addEventListener('click',function(){
    currNumber = (currNumber * 10) + 2;
    inp.value = currNumber;
});

const num3 = document.getElementById('num3');
num3.addEventListener('click',function(){
    currNumber = (currNumber * 10) + 3;
    inp.value = currNumber;
});

const num4 = document.getElementById('num4');
num4.addEventListener('click',function(){
    currNumber = (currNumber * 10) + 4;
    inp.value = currNumber;
});

const num5 = document.getElementById('num5');
num5.addEventListener('click',function(){
    currNumber = (currNumber * 10) + 5;
    inp.value = currNumber;
});

const num6 = document.getElementById('num6');
num6.addEventListener('click',function(){
    currNumber = (currNumber * 10) + 6;
    inp.value = currNumber;
});

const num7 = document.getElementById('num7');
num7.addEventListener('click',function(){
    currNumber = (currNumber * 10) + 7;
    inp.value = currNumber;
});

const num8 = document.getElementById('num8');
num8.addEventListener('click',function(){
    currNumber = (currNumber * 10) + 8;
    inp.value = currNumber;
});

const num9 = document.getElementById('num9');
num9.addEventListener('click',function(){
    currNumber = (currNumber * 10) + 9;
    inp.value = currNumber;
});

const num0 = document.getElementById('num0');
num0.addEventListener('click',function(){
    currNumber = (currNumber * 10) + 0;
    inp.value = currNumber;
});

const add = document.getElementById('add');
add.addEventListener('click',function(){
    leftOperand = currNumber;
    operator = '+';
    inp.value = operator;
    currNumber = 0;
});

const sub = document.getElementById('sub');
sub.addEventListener('click',function(){
    leftOperand = currNumber;
    operator = '-';
    inp.value = operator;
    currNumber = 0;
});

const mult = document.getElementById('mult');
mult.addEventListener('click',function(){
    leftOperand = currNumber;
    operator = '*';
    inp.value = operator;
    currNumber = 0;
});

const divi = document.getElementById('divi');
divi.addEventListener('click',function(){
    leftOperand = currNumber;
    operator = '/';
    inp.value = operator;
    currNumber = 0;
});

const equals = document.getElementById("equals");
equals.addEventListener('click',function(){
    rightOperand = currNumber;
    let res = 0;
    if (operator == '+'){
        res = leftOperand + rightOperand;
    } else if(operator == '-'){
        res = leftOperand - rightOperand;
    } else if(operator == '*'){
        res = leftOperand * rightOperand;
    } else {
        res = leftOperand / rightOperand;
    }
    inp.value = res;
    currNumber = 0;
})

/*
TO DO

Code has a lot of duplication. Can be made more concise

The result of an operation does become the left operand for the next calc.

Clear and backspace functionality

The selected operation does not show.

Fix aesethetic. 

*/