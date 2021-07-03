const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

const elements = ingredients.map((el) => {
  const listItem = document.createElement("li");
  listItem.classList.add("list__item");
  listItem.textContent = el;

  console.log(listItem);
  return listItem;
});
console.log(elements);

ingredientsList.append(...elements);
console.log(ingredientsList);
