// time O(n*m)
// space O(n)

function spiralOrder(matrix) {
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let direction = "right";
  let output = [];

  while (top <= bottom && left <= right) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        output.push(matrix[top][i]);
      }
      top++;
      direction = "down";
    } else if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        output.push(matrix[i][right]);
      }
      right--;
      direction = "left";
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        output.push(matrix[bottom][i]);
      }
      bottom--;
      direction = "up";
    } else if (direction === "up") {
      for (let i = bottom; i <= top; i++) {
        output.push(matrix[i][left]);
      }
      left++;
      direction = "right";
    }
  }
  return output;
}

module.exports = spiralOrder;
