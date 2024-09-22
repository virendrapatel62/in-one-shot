console.log("LIST JS");

const addButton = document.querySelector("button.add");
const removeButton = document.querySelector("button.remove");

const list = document.querySelector(".list");
const li = list.querySelectorAll("li");
const input = document.querySelector("#item-input");

console.log(addButton);
console.log(removeButton);
console.log(list);

function handleAdd() {
  console.log("Add new item");

  const item = document.createElement("li");

  item.innerText = input.value;
  input.value = "";
  item.addEventListener("click", removeMe);

  list.appendChild(item);
}

function handleRemove() {
  const listItems = list.children;
  const last = listItems[listItems.length - 1];
  console.log(last);
  last.remove();
  //   list.removeChild(last);
}

addButton.addEventListener("click", handleAdd);
removeButton.addEventListener("click", handleRemove);

function removeMe(event) {
  console.log("Remove me", event.target.remove());
}

li.forEach((item) => {
  item.addEventListener("click", removeMe);
});
