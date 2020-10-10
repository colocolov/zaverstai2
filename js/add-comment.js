let commentForm = document.querySelector(".contact-form-article");
let commentList = document.querySelector(".comment-list");
let commentField = document.querySelector(".text-message");

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement("div");
  newComment.classList.add("comment");
  let newText = document.createElement("div");
  newText.classList.add("comment-text");
  newText.textContent = commentField.value;
  commentField.value = "";
  //commentList.append(newComment + newText);
};
