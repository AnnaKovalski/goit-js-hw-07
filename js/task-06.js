const refs = {
  input: document.querySelector("#validation-input"),
  acceptLength: document.querySelector("input[data-length='6']"),
};

const datasetLength = parseInt(refs.input.dataset.length);

refs.input.addEventListener("blur", onInputBlur);
refs.input.addEventListener("focus", onInputFocus);

function onInputBlur(event) {
  const validLength = event.currentTarget.value.length;

  if (validLength === datasetLength) {
    refs.input.classList.add("valid");
  } else {
    refs.input.classList.add("invalid");
  }
}
function onInputFocus(event) {
  refs.input.classList.remove("valid");
  refs.input.classList.remove("invalid");
}
