const defaultSize = 16;
const grid = document.querySelector("#grid");
let size = defaultSize;

function getSize() {
  let size = Number(prompt("Enter a number greater than 0 and under 100"));
  while (size > 100 || isNaN(size)) {
    size = Number(
      prompt(
        "You did not enter a number smaller than 100, or you entered a negative number. Please enter a number greater than 0 and under 100"
      )
    );
  }
  return Math.round(size);
}

function createGrid(gridSize) {
  height = grid.clientHeight / gridSize;
  width = grid.clientWidth / gridSize;
  for (let i = 0; i < gridSize ** 2; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.setAttribute("style", `height: ${height}px; width: ${width}px;`);
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "black";
    });
    grid.appendChild(pixel);
  }
  size = gridSize;
}

function clearGrid(){

}

createGrid(defaultSize);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  size = getSize();
  grid.replaceChildren();
  createGrid(size);
});

const btn2 = document.querySelector("#clear-grid");
btn2.addEventListener("click", () => {
  grid.replaceChildren();
  createGrid(size);
});