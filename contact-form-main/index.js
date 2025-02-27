let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let divElement1 = document.querySelector(".btn-radio-div-1");
let divElement2 = document.querySelector(".btn-radio-div-2");
let btnEl = document.querySelector(".btn");
let messegaEl = document.querySelector(".message");
let hiddenMessage = document.querySelector(".hidden-messege");
let firstNameEl = document.querySelector(".input-first-name");
let lastNameEl = document.querySelector(".input-last-name");
let emailEl = document.querySelector(".input-email");

let textAreaEl = document.querySelector(".text-area");
let acceptTermsEl = document.querySelector(".acceptTermsEl");

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
  messegaEl.classList.remove("hidden-messege");
});
