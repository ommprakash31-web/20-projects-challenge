function calculateBmi(){
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    let value = document.querySelector("#bmiValue");
    let status = document.querySelector(".bmiStatus");

    // status.className = "";
    status.classList.remove("underweight", "normal", "overweight", "obese");

    if(height == "" || weight == ""){
        value.innerText = "your BMI :__";
        status.innerText = "please enter your both height and weigh to know the BMI status";
        return;
    }
    
    if(height <= 0 || weight <= 0){
        value.innerText = "your BMI :__";
        status.innerText = "height and weight must be greater than zero";
        return;
    }

    if(isNaN(height) || isNaN(weight)){
        value.innerText = "your BMI :__";
        status.innerText = "enter a valid height and weight";
        return;
    }

    let heightInMeter = height / 100;
    let bmi = weight / (heightInMeter * heightInMeter);

    bmi = bmi.toFixed(2);

    value.innerText = `your BMI : ${bmi}`;

    if(bmi < 18.5){
        value.innerText = `your BMI : ${bmi}`;
        status.innerText = "you're underweight";
        status.classList.add("underweight");
    }else if(bmi >= 18.5 && bmi < 25){
        value.innerText = `your BMI : ${bmi}`;
        status.innerText = "you're normal weight";
        status.classList.add("normal");
    }else if(bmi >= 25 && bmi < 30){
        value.innerText = `your BMI : ${bmi}`;
        status.innerText = "you're overweight";
        status.classList.add("overweight");
    }else{
        value.innerText = `your BMI : ${bmi}`;
        status.innerText = "you're obese";
        status.classList.add("obese");
   }
}

let button = document.querySelector("button");

button.addEventListener("click",calculateBmi);