var inputText = document.querySelector(".input-text");
var btnMinus = document.querySelector(".btn-minus");
var btnPlus = document.querySelector(".btn-plus");
var output = document.querySelector(".output");

var btnSubmit = document.querySelector(".btn-submit");

var fontSize = 10;

btnMinus.addEventListener("click", minusButtonHandler);

function minusButtonHandler() {
  fontSize = fontSize - 2;
  output.style.fontSize = fontSize + "px";
  console.log("clicked");
}

btnPlus.addEventListener("click", plusButtonHandler);

function plusButtonHandler() {
  fontSize = fontSize + 2;
  output.style.fontSize = fontSize + "px";
  console.log("clicked");
}

btnSubmit.addEventListener("click", sumbitClickHandler);

function sumbitClickHandler() {
  output.innerText = inputText.value;
}
