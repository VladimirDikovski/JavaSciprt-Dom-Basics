const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const divElement1 = document.querySelector(".btn-radio-div-1");
const divElement2 = document.querySelector(".btn-radio-div-2");
const btnEl = document.querySelector(".btn");
const messegaEl = document.querySelector(".message");
const hiddenMessage = document.querySelector(".hidden-messege");
const firstNameEl = document.querySelector(".input-first-name");
const lastNameEl = document.querySelector(".input-last-name");
const emailEl = document.querySelector(".input-email");
const textAreaEl = document.querySelector(".text-area");
const acceptTermsEl = document.querySelector(".acceptTermsEl");
const acceptTerms = document.getElementById("acceptTerms");

function removeColorRadio(element) {
  element.classList.remove("background-green-radio");
}

function addColorRadio(element) {
  element.classList.add("background-green-radio");
}

radio1.addEventListener("change", function () {
  addColorRadio(divElement1);
  removeColorRadio(divElement2);
});

radio2.addEventListener("change", function () {
  addColorRadio(divElement2);
  removeColorRadio(divElement1);
});

btnEl.addEventListener("click", function () {
  if (
    (radio1.checked !== false || radio2.checked !== false) &&
    firstNameEl.value !== "" &&
    lastNameEl.value !== "" &&
    emailEl.value !== "" &&
    textAreaEl.value !== "" &&
    acceptTerms.checked !== false
  ) {
    messegaEl.classList.remove("hidden-messege");
  } 
});
