function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector(".change-color");
const spanElem = document.querySelector(".color");
const body = document.querySelector("body");
btnElem.addEventListener("click", () => {
   const newColor = getRandomHexColor();
body.style.backgroundColor = newColor;
spanElem.textContent = newColor;
})

