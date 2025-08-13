let leftOperand = 0;
let operator = '!';
let rightOperand = 0;

function operate(left,op,right){
    if (op == '+'){
        res = left + right;
    } else if(op == '-'){
        res = left - right;
    } else if(op == '*'){
        res = left * right;
    } else {
        res = left / right;
    }
    return res;
}

let currNumber = 0;

const inp = document.querySelector("#inp");
/*
const num1 = document.getElementById('num1');
num1.addEventListener('click',function(){
    if(operator == '!'){
        leftOperand = (leftOperand * 10) + 1;
    } else {
        rightOperand = (rightOperand * 10) + 1;
    }
});

const num2 = document.getElementById('num2');
num2.addEventListener('click',function(){
    if(operator == '!'){
        leftOperand = (leftOperand * 10) + 2;
    } else {
        rightOperand = (rightOperand * 10) + 2;
    }
});

const num3 = document.getElementById('num3');
num3.addEventListener('click',function(){
    if(operator == '!'){
        leftOperand = (leftOperand * 10) + 3;
    } else {
        rightOperand = (rightOperand * 10) + 3;
    }
});

const num4 = document.getElementById('num4');
num4.addEventListener('click',function(){
    if(operator == '!'){
        leftOperand = (leftOperand * 10) + 4;
    } else {
        rightOperand = (rightOperand * 10) + 4;
    }
});

const num5 = document.getElementById('num5');
num5.addEventListener('click',function(){
    if(operator == '!'){
        leftOperand = (leftOperand * 10) + 5;
    } else {
        rightOperand = (rightOperand * 10) + 5;
    }
});

const num1 = document.getElementById('num6');
num6.addEventListener('click',function(){
    if(operator == '!'){
        leftOperand = (leftOperand * 10) + 6;
    } else {
        rightOperand = (rightOperand * 10) + 6;
    }
});

const num7 = document.getElementById('num7');
num7.addEventListener('click',function(){
    if(operator == '!'){
        leftOperand = (leftOperand * 10) + 7;
    } else {
        rightOperand = (rightOperand * 10) + 7;
    }
});

const num8 = document.getElementById('num8');
num8.addEventListener('click',function(){
    if(operator == '!'){
        leftOperand = (leftOperand * 10) + 8;
    } else {
        rightOperand = (rightOperand * 10) + 8;
    }
});

const num9 = document.getElementById('num9');
num9.addEventListener('click',function(){
    if(operator == '!'){
        leftOperand = (leftOperand * 10) + 9;
    } else {
        rightOperand = (rightOperand * 10) + 9;
    }
});

const num0 = document.getElementById('num0');
num0.addEventListener('click',function(){
    if(operator == '!'){
        leftOperand = (leftOperand * 10) + 0;
    } else {
        rightOperand = (rightOperand * 10) + 0;
    }
});

const add = document.getElementById('add');
add.addEventListener('click',function(){
    if (rightOperand == Number.MIN_VALUE){
        operator = '+';
        return;
    }
    res = operate(leftOperand,operator,currNumber);
    leftOperand = res;
    rightOperand = Number.MIN_VALUE
    inp.value = res;
});

const sub = document.getElementById('sub');
sub.addEventListener('click',function(){
    if (rightOperand == Number.MIN_VALUE){
        operator = '-';
        return;
    }
    res = operate(leftOperand,operator,currNumber);
    leftOperand = res;
    rightOperand = Number.MIN_VALUE
    inp.value = res;

});

const mult = document.getElementById('mult');
mult.addEventListener('click',function(){
    if (rightOperand == Number.MIN_VALUE){
        operator = '*';
        return;
    }
    res = operate(leftOperand,operator,currNumber);
    leftOperand = res;
    rightOperand = Number.MIN_VALUE
    inp.value = res;
});

const divi = document.getElementById('divi');
divi.addEventListener('click',function(){
    if (rightOperand == Number.MIN_VALUE){
        operator = '/';
        return;
    }
    res = operate(leftOperand,operator,currNumber);
    leftOperand = res;
    rightOperand = Number.MIN_VALUE;
    inp.value = res;
});


const equals = document.getElementById("equals");
equals.addEventListener('click',function(){
    let res = operate(leftOperand,operator,rightOperand);
    inp.value = res;
    leftOperand = res;
})

const clear = document.getElementById("clr");
clear.addEventListener('click',function(){
    leftOperand = 0;
    rightOperand = Number.MIN_VALUE;
    operator = '!';
    inp.value = 0;
})

const bksp = document.getElementById("bksp");
bksp.addEventListener('click',function(){
    if(rightOperand == Number.MIN_VALUE){
        leftOperand = Math.floor(leftOperand / 10);
    } else {
        rightOperand = Math.floor(rightOperand / 10);
    }
})
*/

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
    if (operator != "!"){
        currNumber = operate(leftOperand,operator,currNumber);
    }
    leftOperand = currNumber;
    inp.value = currNumber;
    operator = '+';
    currNumber = 0;
});

const sub = document.getElementById('sub');
sub.addEventListener('click',function(){
    if (operator != "!"){
        currNumber = operate(leftOperand,operator,currNumber);
    }
    leftOperand = currNumber;
    inp.value = currNumber;
    operator = '-';
    currNumber = 0;
});

const mult = document.getElementById('mult');
mult.addEventListener('click',function(){
    if (operator != "!"){
        currNumber = operate(leftOperand,operator,currNumber);
    }
    leftOperand = currNumber;
    inp.value = currNumber;
    operator = '*';
    currNumber = 0;
});

const divi = document.getElementById('divi');
divi.addEventListener('click',function(){
    if (operator != "!"){
        currNumber = operate(leftOperand,operator,currNumber);
    }
    leftOperand = currNumber;
    inp.value = currNumber;
    operator = '/';
    currNumber = 0;
});

const equals = document.getElementById("equals");
equals.addEventListener('click',function(){
    rightOperand = currNumber;
    let res = operate(leftOperand,operator,rightOperand);
    inp.value = res;
    leftOperand = res;
    currNumber = 0;
})

const clear = document.getElementById("clr");
clear.addEventListener('click',function(){
    leftOperand = 0;
    rightOperand = 0;
    operator = '!';
    currNumber = 0;
    inp.value = 0;
})

const bksp = document.getElementById("bksp");
bksp.addEventListener('click',function(){
    currNumber = Math.floor(currNumber / 10);
    inp.value = currNumber; 
})

/*
TO DO

Code has a lot of duplication. Can be made more concise

The result of an operation does become the left operand for the next calc.

Clear and backspace functionality

The selected operation does not show.

Fix aesethetic. 

*/