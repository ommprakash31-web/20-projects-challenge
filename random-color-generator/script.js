const colBox = document.querySelector("#color-box");
const colCode = document.querySelector("#color-code");
const genBtn = document.querySelector("#generate-btn");
const copBtn = document.querySelector("#copy-btn");
const grBtn = document.querySelector("#gradient-btn");

const letters = "1234567890ABCDEF"; // globally declared
let randomIndex; //globally declared so that it can be used in all the function
let randomIndex2;
//for one type color
function genRandomColor() {
    
    let color = "#";

    for(let i = 0; i<6; i++){
        randomIndex = Math.floor(Math.random()*16);
        color += letters[randomIndex];
    }
    colBox.style.background = color;
    colCode.innerText = color;
    document.body.style.background = color;
    }

    genBtn.addEventListener( "click", genRandomColor);

    copBtn.addEventListener("click", function(){
        navigator.clipboard.writeText(colCode.innerText);
        alert(`the color code ${colCode.innerText} has been copied to the clipboard!`);
    });

//for gradient color
function genGradientColor() {
    let col1 = "#";
    let col2 = "#";

    for(let i = 0; i<6; i++){
        randomIndex = Math.floor(Math.random()*16);
        randomIndex2 = Math.floor(Math.random()*16);
        col1 += letters[randomIndex];
        col2 += letters[randomIndex2];
    }
    
    const gradient = `linear-gradient(135deg, ${col1}, ${col2})`;

    colBox.style.background = gradient;
    colCode.innerText = `${col1}  ${col2}`;
    document.body.style.background = gradient;
    }
    grBtn.addEventListener("click", genGradientColor);

  