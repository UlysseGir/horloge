let second = 0;
let num = document.getElementsByClassName("num");


let secondInt = setInterval(function(){
    secondNum();
}, 1000);

function secondNum(){
    
    console.log(second);

    for(let i=0; i < num.length; i++){
        num[i].style.background = "#1f1f1f"
    }

    for(let i=0; i < num.length; i++){

        if(num[i].classList[3].includes(second.toString())){
            num[i].style.background = "red"
        }
        
    }

    

    if(second == 9){
        second = -1;
    }

    second++;
}