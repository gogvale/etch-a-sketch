const grid = document.querySelector("main");
const root = document.documentElement;
function deleteGrid() {
  grid.innerHTML = "";
}
function startGrid(width = 16) {
  deleteGrid();
  const total = width ** 2;
  root.style.setProperty("--num-blocks", width);
  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.classList.add("block");
    grid.appendChild(div);
  }
}
startGrid();
