const inputControl = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

console.log(inputText);

inputControl.addEventListener("input", onInputChange);

function onInputChange(event) {
  inputText.style.fontSize = event.currentTarget.value + "px";
}
