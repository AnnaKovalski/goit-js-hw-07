const counterValue = document.querySelector("#value");
const decrementtBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
console.log(incrementBtn);
console.log(decrementtBtn);
console.log(counterValue);

incrementBtn.addEventListener("click", onClickIncrement);
decrementtBtn.addEventListener("click", onClickDecrement);

let value = 0;
function onClickIncrement() {
  // console.log("Клик по кнопке увелечения");
  value += 1;
  counterValue.textContent = value;
}

function onClickDecrement() {
  //   console.log("Клик по кнопке уменьшения");
  value -= 1;
  counterValue.textContent = value;
}
