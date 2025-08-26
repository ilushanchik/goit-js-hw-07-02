const inputElem = document.querySelector("#name-input");
console.log(inputElem);
const spanElem = document.querySelector("#name-output");
console.log(spanElem);
inputElem.addEventListener("input", (event) => {
    const trimmedValue = event.target.value.trim();
      if (trimmedValue === "") {
    spanElem.textContent = "Anonymous";
  } else {
    spanElem.textContent = trimmedValue;
  }
   });