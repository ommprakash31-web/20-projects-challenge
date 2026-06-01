const hrsElement = document.querySelector("#hours");
const minsElement = document.querySelector("#minutes");
const secElement = document.querySelector("#seconds");
const ampmElement = document.querySelector("#ampm");
const dateElement = document.querySelector("#date");

function updateTime(){
    const now = new Date();

    let hours = now.getHours();
    let mins = now.getMinutes();
    let sec = now.getSeconds();

    let ampm;

    if(hours >= 12){
        ampm = "pm";
    }else{
        ampm = "am";
    }

    hours = hours % 12;
    
    if(hours === 0){
        hours = 12;
    }else{
        hours = hours;
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = mins < 10 ? "0" + mins : mins;
    sec = sec < 10 ? "0" + sec : sec;

    hrsElement.innerText = hours;
    minsElement.innerText = mins;
    secElement.innerText = sec;
    ampmElement.innerText = ampm;

    const days = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];

    const months = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december"
    ];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    

    dateElement.innerText = `${dayName}, ${date} ${monthName} , ${year}`;
}

setInterval(updateTime, 1000);

updateTime();