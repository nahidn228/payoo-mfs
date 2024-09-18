document
  .getElementById("btn-show-cashOut")
  .addEventListener("click", function (event) {
    // show cashout btn

    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
  });

document
  .getElementById("btn-show-addMoney")
  .addEventListener("click", function (event) {
    document.getElementById("cash-out-form").classList.add("hidden");

    document.getElementById("add-money-form").classList.remove("hidden");
  });


