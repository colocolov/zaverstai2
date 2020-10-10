let like = document.querySelector(".like");
let likesNumber = document.querySelector(".quantity");

like.onclick = function () {
  if (like.classList.contains("added")) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  like.classList.toggle("added");
};
