// Step 1: Create Event Listener
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = getInputValueById("cash-out-amount");
    const cashOutPin = getInputValueById("cash-out-pin");


    // Step 6: check if input isNaN
    if (isNaN(cashOutAmount)) {
      alert("Invalid amount.");
      return;
    }
    // Step 5: check if enough balance
    if (cashOutAmount > parseFloat(getTextFieldValueById("account-balance"))) {
      alert("Insufficient balance");
      return;
    }

    
    // Step 4: validate pin
    if (cashOutPin == "1234") {
      const accountBalance = getTextFieldValueById("account-balance");
      const newBalance = accountBalance - cashOutAmount;
      document.getElementById("account-balance").innerText =
        newBalance.toFixed(2);

      // Step 8: clear input fields
      document.getElementById("cash-out-amount").value = "";
      document.getElementById("cash-out-pin").value = "";

      // add transaction history
      const div = document.createElement("div");
      div.classList.add("bg-red-300", "p-1", "px-2","rounded-md");
      div.innerHTML = `<p> <b>${cashOutAmount} TK</b> withdraw. New Balance <b>${newBalance} TK</b> </p>`;
      document.getElementById("transaction-container").appendChild(div);
      
    } else {
      alert("Invalid PIN");
    }
  });
