function createGridItem() {
  let item = document.createElement('div');
  item.style.border = '1px solid black';
  item.className = 'item';
  item.setAttribute('onmouseover', 'colorBox()');
  return item;
}
//creates size of squares based on # of squares and spacing to fill full area of grid
function createSides(sections) {
  let squareSize = (960 - 10 * (sections - 1)) / sections;
  let columnString = '';
  for (i = 0; i < sections; i++) {
    columnString += ` ${squareSize}px`;
  }
  return columnString.trimStart();
}

// Creates Dynamic grid based on the number of rows and columns user requires
function createGrid() {
  const rows = parseInt(document.getElementById('rows').value) || 10;
  const columns = parseInt(document.getElementById('columns').value) || 10;

  const grid = document.querySelector('.grid');
  grid.innerHTML = ''; //clears grid before creating a new one
  grid.style.gridTemplateColumns = createSides(columns);
  grid.style.gridTemplateRows = createSides(rows);

  //creates a new row and new columns for each row
  for (row = 1; row < rows + 1; row++) {
    for (let column = 1; column < columns + 1; column++) {
      grid.appendChild(createGridItem());
    }
  }
}
