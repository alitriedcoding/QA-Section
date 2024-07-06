const paragraphEl = document.querySelector(".paragraph");
const NbtnEl = document.querySelector(".N-btn");
const PbtnEl = document.querySelector(".p-btn");
const btnEl = document.querySelector(".btn");

PbtnEl.addEventListener("click", () => {
  paragraphEl.classList.toggle("show-text");
  NbtnEl.classList.toggle("hid-btn");
  PbtnEl.classList.toggle("hid-pbtn");
});

NbtnEl.addEventListener("click", () => {
  paragraphEl.classList.toggle("show-text");
  PbtnEl.classList.toggle("hid-pbtn");
  NbtnEl.classList.toggle("hid-btn");
});
