let textArea = document.querySelector("#textInput");
let totalChar = document.querySelector("#totalChars");
let remainChar = document.querySelector("#remainingChars");
let clearButton = document.querySelector("#clearBtn");

let maxLength = 200;

textArea.addEventListener("input", function(){
    let typedText = textArea.value.length

    totalChar.innerText = typedText;
    remainChar.innerText = (maxLength - typedText);
});

clearButton.addEventListener("click", function(){
    textArea.value = "";

    totalChar.innerText = "0";
    remainChar.innerText = maxLength;
    
});