const grid = document.querySelector("main");
const root = document.documentElement;
const rowInput = document.querySelector("input[type=number]");
const rainbow = document.querySelector("#rainbow");
const selectedColor = document.querySelector("#colorPick");
function deleteGrid() {
  grid.innerHTML = "";
}
function resetGrid() {
  const gridVar = Array.from(grid.childNodes);
  gridVar.forEach((el) => (el.style.backgroundColor = "transparent"));
}
function startGrid(width = 16) {
  if (width < 0 || width > 50) {
    alert("Maximum 50 rows/columns allowed, sorry.");
    return;
  }
  deleteGrid();
  if (rowInput.value !== width) rowInput.value = width; // Sets row input correctly at start
  const total = width ** 2;
  root.style.setProperty("--num-blocks", width); // set grid
  for (let i = 0; i < total; i++) {
    //populate grid with div's
    const div = document.createElement("div");
    div.classList.add("block");
    grid.appendChild(div);
    div.addEventListener("mouseover", (e) => changeColor(e.target));
  }
}
function random(max, min = 0) {
  return min + Math.ceil((max - min) * Math.random());
}
function changeColor(block) {
  if (rainbow.checked)
    block.style.backgroundColor = `hsl(
    ${random(360)}, 
    ${random(100)}%,
    ${random(80, 10)}%`;
  //this way black and white are filtered
  else block.style.backgroundColor = selectedColor.value;
}
startGrid();
