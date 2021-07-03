const categoriesEl = document.querySelectorAll("#categories .item");
console.dir(categoriesEl);
const message = `В списке ${categoriesEl.length} категории`;
console.log(message);

categoriesEl.forEach((el) => {
  console.log("Категория", el.querySelector(".item h2").textContent);
  console.log("Количество", el.querySelectorAll("ul li").length);
});
