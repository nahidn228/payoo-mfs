document
  .getElementById("cashOut-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutPin = document.getElementById("cashOut-pin").value;

    if (cashOutPin === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const cashOutAmount = document.getElementById("cashOut-amount").value;
      const newBalance = parseFloat(balance);
      const newCashOutAmount = parseFloat(cashOutAmount);
      const updateBalance = newBalance - newCashOutAmount;

      document.getElementById("account-balance").innerText = updateBalance;
    }
  });
