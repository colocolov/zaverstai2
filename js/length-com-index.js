let commentFormIndex = document.querySelector(".contact-form");
let commentFieldIndex = document.querySelector(".text-message");
let submitButtonIndex = document.querySelector(".input-submit-index");

commentFieldIndex.oninput = function () {
  //console.log(commentFieldIndex.value);

  if (
    commentFieldIndex.value.length < 3 ||
    commentFieldIndex.value.length > 150
  ) {
    commentFormIndex.classList.add("warning");
    submitButtonIndex.disabled = true;
  } else {
    commentFormIndex.classList.remove("warning");
    submitButtonIndex.disabled = false;
  }
};
