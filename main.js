const inputBtn = document.querySelector(".input-btn");
const gridContainer = document.querySelector(".grid-container");
let squareNo = 16;

function generateGridDivs(squareNo) {
  let div = "";
  for (let i = 0; i < squareNo * squareNo; i++) {
    div += `<div class="grid-item"></div>`;
  }
  gridContainer.innerHTML += div;
  changeBoxColor();
}
generateGridDivs(squareNo);

function changeBoxColor() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("grid-hover");
    });
  });
}

inputBtn.addEventListener("click", () => {
  squareNo = prompt("Enter the number of squares per side", "");
  if (squareNo > 100) {
    squareNo = prompt("Too many boxes, please specify a number less than 100");
  }
  while (gridContainer.firstChild) {
    gridContainer.firstChild.remove();
  }
  generateGridDivs(squareNo);
  gridContainer.style.gridTemplateColumns = `repeat(${squareNo},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${squareNo},1fr)`;
});
