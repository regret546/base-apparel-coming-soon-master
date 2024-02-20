/* For responsive hero image  */

function changeImageSrc() {
  var image = document.getElementById("responsiveImage");
  if (window.matchMedia("(min-width: 43.75em)").matches) {
    image.src = "images/hero-desktop.jpg";
  } else {
    image.src = "images/hero-mobile.jpg";
  }
}
changeImageSrc();
window.addEventListener("resize", changeImageSrc);

/* For email validation */
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const submitBtn = document.querySelector("#submitBtn");
const emailInput = document.querySelector("#emailInput");
const errorMessage = document.querySelector("#errorText");
const errorImage = document.querySelector("#errorImg");

function removeError() {
  errorMessage.classList.remove("visible");
  errorImage.classList.remove("visible");
  emailInput.style.border = "1px solid var(--clr--desaturated-red)";
}

function addError() {
  errorMessage.classList.add("visible");
  errorImage.classList.add("visible");
  emailInput.style.border = "2px solid var(--clr--soft-red)";
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let userInput = emailInput.value;
  if (userInput === "") {
    errorMessage.innerText = "Please provide an email";
    addError();
  } else if (!emailRegex.test(userInput)) {
    errorMessage.innerText = "Please provide a valid email";
    addError();
  } else {
    removeError();
    alert("Submitted");
    emailInput.value = "";
  }
});
