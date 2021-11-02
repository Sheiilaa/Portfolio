"use strict";
//collapsables
const collapsableRulete = document.querySelector(".js_collapsable_rulete");
const collapsableNav = document.querySelector(".js_collapsable_nav");
const collapsableButton1 = document.querySelector(".js_button1");
const collapsableButton2 = document.querySelector(".js_collapsable_button2");

console.log(collapsableButton2);
collapsableButton1.addEventListener("click", handleRulete);
collapsableButton2.addEventListener("click", handleNav);
function handleRulete(ev) {
  ev.preventDefault;
  collapsableRulete.classList.toggle("hidden");
}
function handleNav(ev) {
  ev.preventDefault;
  collapsableNav.classList.toggle("hidden");
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
