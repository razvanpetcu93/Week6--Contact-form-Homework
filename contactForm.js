var contactForm = document.getElementById("Contact-Form");
var firstNameSpan = document.getElementById("firstName");
var alertMessage = document.getElementById("alert-message");
var closeButton = document.getElementById("closeButton");
var greenBanner = document.getElementById("green-banner");

closeButton.addEventListener("click", () => {
  greenBanner.style.display = "none";
  location.reload();
});
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var firstName = document.getElementById("firstName").value;

  firstNameSpan.textContent = firstName;

  var greenBanner = document.getElementById("green-banner");
  greenBanner.classList.remove("hidden");

  var greenBanner = document.getElementById("green-banner");
  greenBanner.classList.remove("hidden");

  const form = document.getElementById("Contact-Form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  });
});