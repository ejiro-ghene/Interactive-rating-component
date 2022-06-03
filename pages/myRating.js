let thanksCard = document.getElementById("thankYou");
let rateCard = document.getElementById("rateCard");
let buttons = document.querySelectorAll(".rateButtons");
let showValue = document.querySelector("#rating-value");
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

    showValue.innerText = " " + i + " " + "out of 5";
  });
}
// buttons.forEach((element) => {});
// let ratings = document.querySelector(".current_rating");

// buttons.forEach((rate, idx) => {
//   rate.addEventListener;
// });

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].buttonValue = i + 1;
//   ["mouseover", "mouseout", "click"].forEach(function (e) {
//     buttons[i].addEventListener(e, buttonRate);
//   });
// }

// function buttonRate(e) {
//   let type = e.type;
//   let buttonValue = this.buttonValue;
//   if (type === "click") {
//     if (buttonValue > 1) {
//       ratings.innerHTML = "you rated this" + buttonValue + "dsjhnb";
//     }
//   }
//   statusbar.forEach(function (ele, ind) {
//     // if (type == "click") {
//     //   if (ind < buttonValue) {
//     //     ele.classList.add;
//     //   }
//     // }
//   });
// }
