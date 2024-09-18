document
  .getElementById("add-mny-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const enterAmount = document.getElementById("enter-amount").value;
    const pinNumber = document.getElementById("pin-number").value;

    if (pinNumber === "1234") {
      let accountBalance = document.getElementById("account-balance").innerText;
      // accountBalance convert string to NUMBER
      accountBalance = parseFloat(accountBalance);

      // inputAmount convert string to NUMBER
      const inputAmount = parseFloat(enterAmount);
      const newAmount = accountBalance + inputAmount;

      document.getElementById("account-balance").innerText = newAmount;

      document.getElementById("enter-amount").value = "";
      document.getElementById("pin-number").value = "";
    } else {
      alert("Failed to Add Money ! please try again");
    }
  });
