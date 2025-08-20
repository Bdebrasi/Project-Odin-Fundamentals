let leftOperand = 0;
let operator = '!';
let rightOperand = Number.MIN_VALUE;

function operate(left,op,right){
    if (op == '+'){
        res = left + right;
    } else if(op == '-'){
        res = left - right;
    } else if(op == '*'){
        res = left * right;
    } else {
        if (right === 0 || right === Number.MIN_VALUE){
            return "ERROR";
        }
        res = left / right;
    }
    return res;
}

const inp = document.querySelector("#inp");
console.log(leftOperand,operator,rightOperand);

const numberButtonContainers = document.getElementsByClassName("numberButtonContainer");

for (let button of numberButtonContainers ){
        button.addEventListener("click", (e)=> {
        if (e.target.tagName !== "BUTTON") return;
        if(operator === '!'){
            leftOperand = (leftOperand * 10) + Number(e.target.dataset.value);
            inp.value = leftOperand;
        } else {
            if (rightOperand === Number.MIN_VALUE){
                console.log(e.target.dataset.value);
                rightOperand = 0;
            }
            rightOperand = (rightOperand * 10) + Number(e.target.dataset.value);
            inp.value = rightOperand;
        }
    }
)}

/*
document.getElementById("Numbers").addEventListener("click", (e)=> {
    console.log(e);
    if(operator === '!'){
        leftOperand = (leftOperand * 10) + Number(e.target.dataset.value);
        inp.value = leftOperand;
    } else {
        if (rightOperand === Number.MIN_VALUE){
            console.log(e.target.dataset.value);
            rightOperand = 0;
        }
        rightOperand = (rightOperand * 10) + Number(e.target.dataset.value);
        inp.value = rightOperand;
    }
})
*/

/*
const num1 = document.getElementById('num1');
num1.addEventListener('click',function(){
    if(operator === '!'){
        leftOperand = (leftOperand * 10) + 1;
        inp.value = leftOperand;
    } else {
        if (rightOperand === Number.MIN_VALUE){
            rightOperand = 0;
        }
        rightOperand = (rightOperand * 10) + 1;
        inp.value = rightOperand;
    }
});

const num2 = document.getElementById('num2');
num2.addEventListener('click',function(){
    if(operator === '!'){
        leftOperand = (leftOperand * 10) + 2;
        inp.value = leftOperand;
    } else {
        if (rightOperand === Number.MIN_VALUE){
            rightOperand = 0;
        }
        rightOperand = (rightOperand * 10) + 2;
        inp.value = rightOperand;
    }
});

const num3 = document.getElementById('num3');
num3.addEventListener('click',function(){
    if(operator === '!'){
        leftOperand = (leftOperand * 10) + 3;
        inp.value = leftOperand;
    } else {
        if (rightOperand === Number.MIN_VALUE){
            rightOperand = 0;
        }
        rightOperand = (rightOperand * 10) + 3;
        inp.value = rightOperand;
    }
});

const num4 = document.getElementById('num4');
num4.addEventListener('click',function(){
    if(operator === '!'){
        leftOperand = (leftOperand * 10) + 4;
        inp.value = leftOperand;
    } else {
        if (rightOperand === Number.MIN_VALUE){
            rightOperand = 0;
        }
        rightOperand = (rightOperand * 10) + 4;
        inp.value = rightOperand;
    }
});

const num5 = document.getElementById('num5');
num5.addEventListener('click',function(){
    if(operator === '!'){
        leftOperand = (leftOperand * 10) + 5;
        inp.value = leftOperand;
    } else {
        if (rightOperand === Number.MIN_VALUE){
            rightOperand = 0;
        }
        rightOperand = (rightOperand * 10) + 5;
        inp.value = rightOperand;
    }
});

const num6 = document.getElementById('num6');
num6.addEventListener('click',function(){
    if(operator === '!'){
        leftOperand = (leftOperand * 10) + 6;
        inp.value = leftOperand;
    } else {
        if (rightOperand === Number.MIN_VALUE){
            rightOperand = 0;
        }
        rightOperand = (rightOperand * 10) + 6;
        inp.value = rightOperand;
    }
});

const num7 = document.getElementById('num7');
num7.addEventListener('click',function(){
    if(operator === '!'){
        leftOperand = (leftOperand * 10) + 7;
        inp.value = leftOperand;
    } else {
        if (rightOperand === Number.MIN_VALUE){
            rightOperand = 0;
        }
        rightOperand = (rightOperand * 10) + 7;
        inp.value = rightOperand;
    }
});

const num8 = document.getElementById('num8');
num8.addEventListener('click',function(){
    if(operator === '!'){
        leftOperand = (leftOperand * 10) + 8;
        inp.value = leftOperand;
    } else {
        if (rightOperand === Number.MIN_VALUE){
            rightOperand = 0;
        }
        rightOperand = (rightOperand * 10) + 8;
        inp.value = rightOperand;
    }
});

const num9 = document.getElementById('num9');
num9.addEventListener('click',function(){
    if(operator === '!'){
        leftOperand = (leftOperand * 10) + 9;
        inp.value = leftOperand;
    } else {
        if (rightOperand === Number.MIN_VALUE){
            rightOperand = 0;
        }
        rightOperand = (rightOperand * 10) + 9;
        inp.value = rightOperand;
    }
});

const num0 = document.getElementById('num0');
num0.addEventListener('click',function(){
    if(operator === '!'){
        leftOperand = (leftOperand * 10) + 0;
        inp.value = leftOperand;
    } else {
        if (rightOperand === Number.MIN_VALUE){
            rightOperand = 0;
        }
        rightOperand = (rightOperand * 10) + 0;
        inp.value = rightOperand;
    }
});
*/
const add = document.getElementById('add');
add.addEventListener('click',function(){
    if (rightOperand === Number.MIN_VALUE){
        operator = '+';
        return;
    }
    res = operate(leftOperand,operator,rightOperand);
    leftOperand = res;
    rightOperand = Number.MIN_VALUE
    inp.value = res;
    operator = '+';
    if (leftOperand === "ERROR"){
        leftOperand = 0;
    }
});

const sub = document.getElementById('sub');
sub.addEventListener('click',function(){
    if (rightOperand === Number.MIN_VALUE){
        operator = '-';
        return;
    }
    res = operate(leftOperand,operator,rightOperand);
    leftOperand = res;
    rightOperand = Number.MIN_VALUE
    inp.value = res;
    operator = '-';
    if (leftOperand === "ERROR"){
        leftOperand = 0;
    }
});

const mult = document.getElementById('mult');
mult.addEventListener('click',function(){
    if (rightOperand === Number.MIN_VALUE){
        operator = '*';
        return;
    }
    res = operate(leftOperand,operator,rightOperand);
    leftOperand = res;
    rightOperand = Number.MIN_VALUE
    inp.value = res;
    operator = '*';
    if (leftOperand === "ERROR"){
        leftOperand = 0;
    }
});

const divi = document.getElementById('divi');
divi.addEventListener('click',function(){
    if (rightOperand === Number.MIN_VALUE){
        operator = '/';
        return;
    }
    res = operate(leftOperand,operator,rightOperand);
    if (res === "ERROR"){
        inp.value = res;
        leftOperand = 0;
        rightOperand = Number.MIN_VALUE;
        operator = '!';
        console.log("error");
        return;
    }
    leftOperand = res;
    rightOperand = Number.MIN_VALUE;
    inp.value = res;
    operator = '/';
    if (leftOperand === "ERROR"){
        leftOperand = 0;
    }
});


const equals = document.getElementById("equals");
equals.addEventListener('click',function(){
    let res = operate(leftOperand,operator,rightOperand);
    inp.value = res;
    if (res === "ERROR"){
        leftOperand = 0;
    } else {
        leftOperand = res;
    }
    rightOperand = Number.MIN_VALUE;
    operator = '!';
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
    if(rightOperand === Number.MIN_VALUE){
        leftOperand = Math.floor(leftOperand / 10);
        inp.value = leftOperand;
    } else {
        rightOperand = Math.floor(rightOperand / 10);
        inp.value = rightOperand;
    }
})


/*
TO DO

Code has a lot of duplication. Can be made more concise.

Too much spaghetti code. Must clean up logic too.

Fix aesthetic. 
*/