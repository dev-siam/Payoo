function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const value = parseFloat(inputValue);
  return value;
}
function getTextFieldValueById(id) {
  const inputValue = document.getElementById(id).innerText;
  const value = parseFloat(inputValue);
  return value;
}

function showSectionById(id) {
    // hide all sections
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transaction-section").classList.add("hidden");
    // show the relevant id section 
    document.getElementById(id).classList.remove("hidden");

}
