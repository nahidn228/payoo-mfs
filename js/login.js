document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number");
    const pinNumber = document.getElementById("pin-number");
    console.log(phoneNumber);
    console.log(pinNumber);
  });
