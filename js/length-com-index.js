let commentFormIndex = document.querySelector(".contact-form");
let commentFieldIndex = document.querySelector(".text-message");
let submitButtonIndex = document.querySelector(".input-submit-index");

commentFieldIndex.oninput = function () {
  //console.log(commentFieldIndex.value);

  if (
    commentFieldIndex.value.length == "" ||
    commentFieldIndex.value.length < 10 ||
    commentFieldIndex.value.length > 200
  ) {
    commentFormIndex.classList.add("warning");
    submitButtonIndex.disabled = true;
  } else {
    commentFormIndex.classList.remove("warning");
    submitButtonIndex.disabled = false;
  }
};
