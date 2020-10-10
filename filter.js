let articles = document.querySelectorAll(".view_mini");
let filter = document.querySelector(".chose");

filter.onchange = function () {
  //console.log(filter.value);
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== "all") {
      article.classList.add("hidden");
    } else {
      article.classList.remove("hidden");
    }
  }
};
