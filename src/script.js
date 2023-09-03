// mengambil element form
const formEl = document.getElementById("form");

// mengambil element input yang berisi feeling
const feelingInputEl = document.getElementById("feeling-value");

// mengambil div yang memiliki class content
const contentEl = document.querySelector(".content");

// mengambil element img
const imgEl = document.getElementById("img-shower");

// array yang berisikan image jika feeling value = not happy
const sadImageArray = ["sad1.jpeg", "sad2.jpeg", "sad3.jpeg", "sad4.jpeg", "sad5.jpeg", "sad6.jpeg", "sad7.jpeg", "sad8.jpeg", "sad9.jpeg", "sad10.jpeg", "sad11.jpeg", "sad12.jpeg", "sad13.jpeg", "sad14.jpeg"];

// array yang berisikan image jika feeling value = happy
const happyImageArray = [
  "happy1.jpeg",
  "happy2.jpeg",
  "happy3.jpeg",
  "happy4.jpeg",
  "happy5.jpeg",
  "happy6.jpeg",
  "happy7.jpeg",
  "happy8.png",
  "happy9.jpeg",
  "happy10.jpeg",
  "happy11.png",
  "happy12.jpeg",
  "happy13.jpeg",
  "happy14.jpeg",
  "happy15.jpeg",
  "happy16.jpeg",
  "happy17.jpeg",
];

// function yang berfungsi menghilangkan content dan menampilkan form
function remove() {
  setTimeout(() => {
    formEl.classList.remove("hidden");
    contentEl.classList.add("hidden");
  }, 500);
}

// function untuk mengubah feeling value menjadi happy
function inputValue() {
  feelingInputEl.value = "happy";
}

// function untuk merandom happy image
function getRandomHappyImage() {
  let randomIndex = Math.floor(Math.random() * happyImageArray.length);

  let selectedImage = happyImageArray[randomIndex];

  imgEl.src = `src/img/${selectedImage}`;
  imgEl.alt = `${selectedImage}`;
}

// function untuk merandom sad image
function getRandomSadImage() {
  let randomIndex = Math.floor(Math.random() * sadImageArray.length);

  let selectedImage = sadImageArray[randomIndex];

  imgEl.src = `src/img/${selectedImage}`;
}
