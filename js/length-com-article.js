let commentFormArticle = document.querySelector(".contact-form-article");
let commentFieldArticle = document.querySelector(".text-message");
let submitButtonArticle = document.querySelector(".input-submit-article");

commentFieldArticle.oninput = function () {
  if (
    commentFieldArticle.value.length < 3 ||
    commentFieldArticle.value.length > 150
  ) {
    commentFormArticle.classList.add("warning");
    submitButtonArticle.disabled = true;
  } else {
    commentFormArticle.classList.remove("warning");
    submitButtonArticle.disabled = false;
  }
};
