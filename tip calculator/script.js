function calculateTip() {
  let billAmount = document.querySelector("#bill-amount").value;
  let tipPerc = document.querySelector("#tip-percentage").value;
  let numPeople = document.querySelector("#number-people").value;

  let tipAmount = document.querySelector("#tip-amount");
  let totalAmount = document.querySelector("#total-amount");
  let perPerson = document.querySelector("#amount-per-person");

  billAmount = Number(billAmount);
  tipPerc = Number(tipPerc);
  numPeople = Number(numPeople);

  if (billAmount === "" || tipPerc === "" || numPeople === "") {
    alert("please fill all the fields first");
    return;
  } else if ((billAmount <= 0) | (tipPerc <= 0) || numPeople <= 0) {
    alert("please fill all the fields correctly and that can't be negative");
    return;
  } else {
    let tip = (billAmount * tipPerc) / 100;
    let total = billAmount + tip;
    let amountPerPerson = total / numPeople;

    tipAmount.innerText = tip.toFixed(2);
    totalAmount.innerText = total.toFixed(2);
    perPerson.innerText = amountPerPerson.toFixed(2);
  }
}

function resetBtn() {
  document.querySelector("#bill-amount").value = "";
  document.querySelector("#tip-percentage").value = "";
  document.querySelector("#number-people").value = "";

  document.querySelector("#tip-amount").innerText = "0.00";
  document.querySelector("#total-amount").innerText = "0.00";
  document.querySelector("#amount-per-person").innerText = "0.00";
}
