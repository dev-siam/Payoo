
document.getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyAmount = getInputValueById("add-money-amount");
    const addMoneyPin = getInputValueById("add-money-pin");

    // Step 6: check if input isNaN
    if (isNaN(addMoneyAmount)) {
      alert("Invalid amount.");
      return;
    }

    // Step 4: validate pin
    if (addMoneyPin == "1234") {
      const accountBalance = getTextFieldValueById("account-balance");
      const newBalance = accountBalance + addMoneyAmount;
      document.getElementById("account-balance").innerText =
        newBalance.toFixed(2);

      // Step 8: clear input fields
      document.getElementById("add-money-amount").value = "";
      document.getElementById("add-money-pin").value = "";

      // add transaction history
      const div = document.createElement("div");
      div.classList.add("bg-green-300", "p-1", "px-2", "rounded-md");
      div.innerHTML = `<p> <b>${addMoneyAmount} TK</b> withdraw. New Balance <b>${newBalance} TK</b> </p>`;
      document.getElementById("transaction-container").appendChild(div);

    } else {
      alert("Invalid PIN");
    }
  });
