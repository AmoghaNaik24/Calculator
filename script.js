const display = document.getElementById("display");


function appendToDisplay(input){
     display.value += input;
}

function calculate(){
    display.value ="";
}

function  calculate(){
    try{
    display.value=eval(display.value);
    }
    catch(error){
        display.value="ERROR";
    }
}
