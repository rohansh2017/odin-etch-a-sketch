const defaultSize = 16;
const grid = document.querySelector("#grid");
let pixels = [];

function createGrid(gridSize) {
    pixels = [];
    pxHeight = grid.clientHeight / gridSize;
    pxWidth = grid.clientWidth / gridSize;
    for(let i = 0; i < gridSize**2; i++) {
      pixels[i] = document.createElement("div");
      pixels[i].classList.add("pixel");
      pixels[i].setAttribute("style", `height: ${pxHeight}px; width: ${pxWidth}px;`)
      grid.appendChild(pixels[i]);
    }
  }

createGrid(defaultSize);