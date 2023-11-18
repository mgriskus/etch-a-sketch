const grid = document.querySelector(".grid");
const generationButton = document.querySelector(".generation-button");

function generateGrid(size) {
  grid.innerHTML = "";
  document.querySelector(":root").style.setProperty("--square-size", `calc(var(--grid-size) / ${size})`);
  for (let i = 0; i < size ** 2; ++i) {
    let square = document.createElement("div");
    square.classList.add("square");
    grid.append(square);
  }
}

generateGrid(16);

let colorSqaure = (e) => {
  e.target.classList.add("colored");
};
grid.addEventListener("mouseover", colorSqaure);

generationButton.addEventListener("click", () => {
  let size = parseInt(prompt("Enter the new size of the grid.", 64));
  generateGrid(size);
});