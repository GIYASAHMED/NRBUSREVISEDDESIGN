// Desktop Account
let account = document.querySelector("#acco");
let userDiv = document.querySelector(".userDiv");

account.addEventListener("click", () => {
  userDiv.classList.toggle("active");
});

// Mobile account
let account2 = document.querySelector("#acco2");
let userDiv2 = document.querySelector(".userDiv2");

account2.addEventListener("click", () => {
  userDiv2.classList.toggle("active");
});
