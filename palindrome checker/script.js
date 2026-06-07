function checkPalindrome(){
let input = document.querySelector("#text").value;
let result = document.querySelector("#result");

    if(input.trim() === ""){
        result.innerText = "please input any string or number first";
        return;
    }

    let originalText = input.toLowerCase().replace(/\s+/g,"") 
    let reversedText = originalText.split("").reverse().join("");
    
    if(originalText === reversedText){
        result.innerText = `${input} is a palindrom`;
    }else{
        result.innerText = `${input} is not a palindrom`;
    }

}