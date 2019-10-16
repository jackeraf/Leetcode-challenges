function numIslands(grid) {
  let counter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      if (grid[row][col] === "1") {
        counter++;
        dfs(grid, row, col);
      }
    }
  }

  return counter;
}

function dfs(grid, row, col) {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[row].length ||
    grid[row][col] === "0"
  ) {
    return;
  }
  grid[row][col] = "0";
  dfs(grid, row - 1, col);
  dfs(grid, row + 1, col);
  dfs(grid, row, col - 1);
  dfs(grid, row, col + 1);
}

module.exports = numIslands;
