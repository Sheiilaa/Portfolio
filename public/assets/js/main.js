"use strict";
//collapsables
const collapsableContent = document.querySelectorAll(".js_collapsable_content");
const collapsableButton = document.querySelectorAll(".js_collapsable_button");

function handleCollapsable(ev) {
  const buttonEl = ev.currentTarget;
  console.log(buttonEl);
  buttonEl.classList.add("clicado");
  for (let i = 0; i < collapsableContent.length; i++) {
    let collapsable = collapsableContent[i];

    if (collapsableButton[i].classList.contains("clicado") === true) {
      collapsable.classList.toggle("hidden");
      collapsableButton[i].classList.remove("clicado");
    } else {
      collapsableButton[i].classList.remove("clicado");
      collapsable.classList.add("hidden");
    }
  }
}
for (let buttonEl of collapsableButton) {
  buttonEl.addEventListener("click", handleCollapsable);
}

//ruleta
const button = document.querySelector(".js_button");

function handleButton(ev) {
  ev.preventDefault();
  let x = 1000; //min value
  let y = 2000; //max value
  let deg = Math.floor(Math.random() * (x - y)) + y;
  document.getElementById("box").style.transform = "rotate(" + deg + "deg)";
}

button.addEventListener("click", handleButton);

//# sourceMappingURL=main.js.map
