let count = 0;

const counter = document.querySelector("#counter");
const increaseBtn = document.querySelector(".increament");
const resetBtn = document.querySelector(".reset");
const decreaseBtn = document.querySelector(".decreament");

increaseBtn.addEventListener('click',function(){
    count++;
    counter.innerText = count;
});

resetBtn.addEventListener("click", function(){
    if(count === 0){
        alert("counter is already 0")
    }else{
         count = 0;
        counter.innerText = count;

        alert("counter reset successfully");
    }
});

decreaseBtn.addEventListener("click", function(){
    count--;
    counter.innerText = count;
});