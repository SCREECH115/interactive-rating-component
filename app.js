const buttons = document.querySelectorAll(".number");
let acutalRate = null;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (acutalRate !== null) {
      acutalRate.classList.remove("active");
    }
    acutalRate = button;
    acutalRate.classList.add("active");
  });
});

const submitButton = document.querySelector(".submit");
const container = document.querySelector(".container");
const secondContainer = document.querySelector(".secondContainer");
const rate = document.querySelector(".rate");

submitButton.addEventListener("click", function () {
  if (acutalRate !== null) {
    rate.innerText = acutalRate.innerText;
    container.style.display = "none";
    secondContainer.style.display = "block";
  } else {
    alert("Please select a rate");
  }
});
