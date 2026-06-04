let randomNum = Math.floor(Math.random() * 100) + 1;
let attempt = 0;

function guessNum() {
  let userGuess = parseInt(document.querySelector("#guess-number").value);

  let message = document.querySelector("#message");
  let attemptCount = document.querySelector("#attempt");
  let checkBtn = document.querySelector("#check-button");

 
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.innerText = "Please enter a number between 1 to 100";
    message.style.color = "red";
    return;
  }

  attempt++;
  attemptCount.innerText = attempt;

  
  if (userGuess === randomNum) {
    message.innerText = "Congratulations! You guessed the correct number";
    message.style.color = "green";
    checkBtn.disabled = true;
  } else if (userGuess > randomNum && userGuess <= randomNum + 5) {
    message.innerText =
      "You are at the high point, but so close to the correct number";
    message.style.color = "blue";
  } else if (userGuess < randomNum && userGuess >= randomNum - 5) {
    message.innerText =
      "You are at the low point, but so close to the correct number";
    message.style.color = "blue";
  } else if (userGuess > randomNum) {
    message.innerText = "You are high! Try again";
    message.style.color = "orange";
  } else {
    message.innerText = "You are low! Try again";
    message.style.color = "orange";
  }

  document.querySelector("#guess-number").value = "";
}

function resetGame() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  attempt = 0;

  document.querySelector("#guess-number").value = "";
  document.querySelector("#message").innerText = "start guessing...";
  document.querySelector("#attempt").innerText = "0";
  document.querySelector("#check-button").disabled = false;
}
