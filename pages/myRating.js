let thanksCard = document.getElementById("thankYou");
let rateCard = document.getElementById("rateCard");
let buttons = document.querySelectorAll(".rateButtons");
let showValue = document.querySelector("#rating-value");
let rateSubButton = document.querySelector(".rating-submit");
// console.log(buttons);

if (thanksCard.classList != "display") {
  thanksCard.classList = "display";
}

function toggleButton() {
  rateCard.classList.toggle("display");
  thanksCard.classList.toggle("display");
  //   console.log(thanksCard.classList);
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    i = this.getAttribute("data-rate");

    showValue.innerText = "You selected" + " " + i + " " + "out of 5";
  });
}
