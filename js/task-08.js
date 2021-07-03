const refs = {
  input: document.querySelector("#controls input"),
  boxesContainer: document.querySelector("#boxes"),
  createBtn: document.querySelector("button[data-action='render']"),
  clearBtn: document.querySelector("button[data-action='destroy']"),
};

refs.input.addEventListener("input", onInputamount);
refs.createBtn.addEventListener("click", createBoxses);

function onInputamount(event) {
  console.log(event.currentTarget.value);
}

function createBoxses(amount, onInputamount) {
  const listItem = document.createElement("div");

  console.log(listItem);
}
