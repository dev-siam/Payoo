// show  add-money hide all others
document.getElementById("show-add-money-btn")
  .addEventListener("click", function (event) {
    showSectionById('add-money-form');
  });


// show cash-out hide all others
document.getElementById("show-cash-out-btn")
  .addEventListener("click", function (event) {
    showSectionById('cash-out-form');
  });


  // show Transaction hide all others
document.getElementById("show-transaction-btn")
  .addEventListener("click", function (event) {
    showSectionById("transaction-section");
  });