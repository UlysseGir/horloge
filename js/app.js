let secondUnits = 0;
let secondTens = 0;
let minuteUnits = 0;
let num = document.getElementsByClassName("num");
let unit = document.getElementsByClassName("unit");
let tens = document.getElementsByClassName("tens");


let secondInt = setInterval(function(){
    secondNum();
}, 1000);

function secondNum(){
    
    console.log(secondUnits);

    for(let i=0; i < num.length; i++){
        num[i].style.background = "#1f1f1f"
    }

    for(let i=0; i < unit.length; i++){

        if(unit[i].classList[3].includes(secondUnits.toString())){
            unit[i].style.background = "red"
        }
        
    }
    for(let i=0; i < tens.length; i++){

        if(tens[i].classList[3].includes(secondTens.toString())){
            tens[i].style.background = "red"
        }
        
    }

    

    if(secondUnits == 9){
        secondUnits = -1;
        secondTens++;
    }
    if(secondTens == 6){
        secondTens = 0;
        minuteUnits++;
    }

    secondUnits++;
}