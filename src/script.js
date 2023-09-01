const formEl = document.getElementById("form");
const feelingInputEl = document.getElementById("feeling-value");
const contentEl = document.querySelector(".content");

function remove() {
  formEl.classList.remove("hidden");
  contentEl.classList.add("hidden");
}

function inputValue() {
  feelingInputEl.value = "happy";
}
