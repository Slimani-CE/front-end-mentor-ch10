let submitBtn = document.querySelector(".email-submit-btn");

submitBtn.addEventListener("click", checkEmail);

function checkEmail(event) {
  let formCard = document.querySelector(".container");
  let thankCard = document.querySelector(".thank-card");
  let emailBody = document.querySelector(".email-body");
  let emailInput = document.querySelector(".email-input");
  let email = emailInput.value;
  event.preventDefault();
  // Check email validation
  let regex = /^\w+@\w+\.\w+$/gi;
  if (regex.test(email)) {
    // Email is valid
    // Remove error message if exist
    emailBody.classList.remove("invalid-email");
    // Remove the form card
    formCard.classList.add("hidden");
    // Display Thank card
    thankCard.classList.remove("hidden");
  } else {
    // Email is not valid
    // Display error message
    emailBody.classList.add("invalid-email");
  }
}
