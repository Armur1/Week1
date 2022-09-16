const button = document.getElementById("my-button");
const mouse = document.getElementById("add-data");
button.addEventListener("click", function () {
  console.log("hello world");
  document.getElementById("gl").innerHTML = "My notebook";
});
mouse.addEventListener("click", function () {
  const text = document.querySelector("textarea");
  const mouse = document.createElement("li");
  mouse.innerText = text.value;
  const list = document.querySelector("ul");
  list.appendChild(mouse);
});
