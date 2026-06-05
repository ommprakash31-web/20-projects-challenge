let display = document.querySelector("#display");

function clearDisplay(){
    display.value = "";
}

function deleteLast(){  
    display.value = display.value.slice(0, -1);
}

function appendValue(value){
    display.value += value;
}
function calculateResult(){
    try{
        if(display.value === ""){
            display.value = "enter a calculation";
            return;
        }

        display.value = eval(display.value);
        
    }catch{
        display.value = "enter valid calculation";
    }
}

