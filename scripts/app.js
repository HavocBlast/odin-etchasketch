function createGridItem(row, column){
  let item = document.createElement('div');
  item.style.border = '1px solid black';
  item.setAttribute("onmouseover", "colorBox()")
  return item;
}
function createColumns(columns){
  let columnString = "";
  for(i = 0; i < columns; i ++){
    columnString += " 100px";
  }
  return columnString;
}
function createGrid(rows, columns) {
  const grid = document.querySelector(".grid");
  grid.style.gridTemplateColumns = createColumns(columns);
  grid.style.gridTemplateRows = createColumns(rows);

  //creates a new row and new columns for each row
  for (column = 1; column < columns+1; column++) {
    for (let row = 1; row < rows+1; row++) {
      grid.appendChild(createGridItem(row, column));
    }
  }
}

function colorBox() {
console.log(document.hover);
}


