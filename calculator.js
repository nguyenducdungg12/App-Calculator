var currentValue = document.querySelector('.result');
var number = document.querySelectorAll('.calculator__input__number__text');
var calculation = document.querySelectorAll('.operator');
var clearNumber = document.querySelector('.calculator__input__number__clear');
var btnEqual = document.querySelector('.calculator__input__equal');
var firstValue;
var lastValue;
var currentCalculator=-1;
//click number
for (var i=0 ;i<number.length;i++){
    number[i].addEventListener('click',function(e){
            if (currentCalculator==0){
                currentValue.innerText='';
                currentCalculator=-1;
            }
                currentValue.innerText+=e.target.innerText;
            
        
})
}
// click clear
clearNumber.addEventListener('click',function(){
    currentValue.innerText='';
});
//click calculator 
for (var i=0; i<calculation.length;i++){
    calculation[i].addEventListener('click',function(e){
        currentCalculator=e.target.dataset.calc;
        firstValue = parseInt(currentValue.innerText);
        currentValue.innerText='';
    })
}
//click equal


btnEqual.addEventListener('click',function(){
    lastValue=parseInt(currentValue.innerText);
    console.log(firstValue)
    switch(currentCalculator){
        case '1':
            currentValue.innerText=firstValue+lastValue;
            break;
        case '2':
            currentValue.innerText=lastValue-firstValue;
            break;
        case '3':
            currentValue.innerText=lastValue/firstValue;
            break;
        case '4':
            currentValue.innerText=lastValue*firstValue;
            break;
        default:
            break;
    };
    currentCalculator=0;
})