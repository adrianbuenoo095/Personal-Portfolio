import _ from "lodash";
import "./style.css";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["hello", "webpack"], " ");
  btn.innerHTML = "Click me and check the console";
  element.classList.add("hello");
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
