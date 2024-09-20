// step 1: Set event handlers 
document.getElementById("login-button").addEventListener("click", function (event) {
  // step 2: Prevent form submission
  event.preventDefault();

  // Step 3: Get form values
  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  console.log(phoneNumber, pinNumber);

  // Step 4: Validate form inputs
  if (phoneNumber === "1234" && pinNumber === "1234") {
    window.location.href = './home.html';
  } else {
    alert(`Please enter a valid phone & pin number`);
  }
});
