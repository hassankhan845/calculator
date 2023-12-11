const resultElement=document.getElementById('result');
const clearBtn=document.getElementById('clear-button');
const deleteBtn=document.getElementById('delete-button');
const divideBtn=document.getElementById('divide-button');
const multiplyBtn=document.getElementById('multiply-button');
const subtractBtn=document.getElementById('subtract-button');
const addBtn=document.getElementById('add-button');
const equalBtn=document.getElementById('equal-button');
const decimalBtn=document.getElementById('decimal-button');
const numberBtns=document.querySelectorAll('.number');

let result='';
let operation='';
let previousOperand=0;

const appendNumber=(number)=>{
    if(number === '.' && result.includes('.'))
    return;
    result+=number;
    updateDisplay();
}
const updateDisplay=()=>{
    resultElement.innerText = result;
}

const selectOperator = (operatorValue)=>{
    if(result ==='')return;
}

numberBtns.forEach(button =>{
    button.addEventListener('click',()=>{
      appendNumber(button.innerText);
    });
});
decimalBtn.addEventListener('click',()=>appendNumber('.'));