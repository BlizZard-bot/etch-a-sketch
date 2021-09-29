// const inputBtn = document.querySelector(".input-btn");
const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector("input[type=range]");
const gridSizeInfo = document.querySelector(".grid-size");
const colorPicker = document.querySelector(".color-picker");
let currentMode = "singleColor";
let sideSquareNumber = 16;
slider.value = 16;
colorPicker.value = "#333333";
// Function to generate divs based on user input of number of squares
function generateGridDivs(sideSquareNumber) {
  let div = "";
  for (let i = 0; i < sideSquareNumber * sideSquareNumber; i++) {
    div += `<div class="grid-item"></div>`;
  }
  gridContainer.innerHTML += div;
  changeBoxHoverColor();
}
generateGridDivs(sideSquareNumber);

// Function changing each individual box's background-color to a random color
function changeBoxHoverColor() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      if (currentMode === "rainbow") {
        item.style.backgroundColor = generateRandomColor();
      } else if (currentMode === "eraser") {
        item.style.backgroundColor = "#fff";
      } else if (currentMode === "singleColor") {
        item.style.backgroundColor = colorPicker.value;
      }
    });
  });
}

// Function to get number of squares of each side from user and then generate grid
slider.addEventListener("input", () => {
  gridSizeInfo.textContent = `${slider.value} by ${slider.value}`;
  sideSquareNumber = slider.value;
  while (gridContainer.firstChild) {
    gridContainer.firstChild.remove();
  }
  generateGridDivs(sideSquareNumber);
  gridContainer.style.gridTemplateColumns = `repeat(${sideSquareNumber},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${sideSquareNumber},1fr)`;
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

const eraserButton = document.querySelector(".eraser-btn");
eraserButton.addEventListener("click", () => {
  currentMode = "eraser";
});

const rainbowButton = document.querySelector(".rainbow-btn");
rainbowButton.addEventListener("click", () => {
  currentMode = "rainbow";
});

const singleColorButton = document.querySelector(".single-color");
singleColorButton.addEventListener("click", () => {
  currentMode = "singleColor";
});
