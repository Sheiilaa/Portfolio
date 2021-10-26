"use strict";
const button = document.querySelector("js_button");

function handleButton(ev) {
  ev.preventDefault();
  let x = 1000; //min value
  let y = 9999; //max value
  let deg = Math.floor(Math.random() * (x - y)) + y;
  document.getElementById("box").style.transform = `rotate${deg} deg`;
}

button.addEventListener("click", handleButton);
