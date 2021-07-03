const refs = {
  input: document.querySelector("#name-input"),
  nameTitel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.nameTitel.textContent = event.currentTarget.value;
}
