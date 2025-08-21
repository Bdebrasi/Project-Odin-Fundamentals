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

const numbersButtonContainers = document.getElementsByClassName("numbersButtonContainer");

for (let button of numbersButtonContainers ){
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

const operationsButtonContainers = document.getElementsByClassName("operationsButtonContainer");

for (let button of operationsButtonContainers ){
        button.addEventListener("click", (e)=> {
        console.log("hello");
        if (e.target.tagName !== "BUTTON") return;
        if (rightOperand === Number.MIN_VALUE){
            operator = e.target.dataset.value;
            return;
        }
        res = operate(leftOperand,operator,rightOperand);
        leftOperand = res;
        rightOperand = Number.MIN_VALUE
        inp.value = res;
        operator = e.target.dataset.value;;
        if (leftOperand === "ERROR"){
            leftOperand = 0;
            operator = '!';
        }
    }
)}

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
-Fix styling in numbers and operations

Too much spaghetti code. Must clean up logic too.

Fix aesthetic. 
*/