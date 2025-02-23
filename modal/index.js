const buttons = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalIcon = document.querySelector(".modal-icon");
const body = document.querySelector("body");

// add event lisener to all buttons

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", openModal);
}

modalIcon.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
