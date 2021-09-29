const inputBtn = document.querySelector(".input-btn");
const gridContainer = document.querySelector(".grid-container");

let squareNo = 16;

// Function to generate divs based on user input of number of squares
function generateGridDivs(squareNo) {
  let div = "";
  for (let i = 0; i < squareNo * squareNo; i++) {
    div += `<div class="grid-item"></div>`;
  }
  gridContainer.innerHTML += div;
  changeBoxHoverColor();
}
generateGridDivs(squareNo);

// Function changing each individual box's background-color to a random color
function changeBoxHoverColor() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = generateRandomColor();
    });
  });
}

// Function to get number of squares of each side from user and then generate grid
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

// Function to return a random hex color
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

// Function to clear the grid
const clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "#fff";
  });
});
