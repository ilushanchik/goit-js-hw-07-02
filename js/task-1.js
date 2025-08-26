const liElems = document.querySelectorAll(".item");

console.log(`Number of categories: ${liElems.length}`);
liElems.forEach((liElem) => {
   const hElems = liElem.querySelector("h2").textContent;
   const countElements = liElem.querySelectorAll("ul li").length;
   console.log(`Category: ${hElems}`);
   console.log(`Elements: ${countElements}`);
});
