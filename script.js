const defaultSize = 16;
const grid = document.querySelector("#grid");


function createGrid(gridSize) {
    height = grid.clientHeight / gridSize;
    width = grid.clientWidth / gridSize;
    for(let i = 0; i < gridSize**2; i++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.setAttribute("style", `height: ${height}px; width: ${width}px;`)
      grid.appendChild(pixel);
    }
  }

createGrid(defaultSize);