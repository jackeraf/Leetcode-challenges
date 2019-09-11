// time O(m*n)
// space O(m*n)

function uniquePaths(cols, rows) {
  let dpMatrix = [];

  /*
    [
       [1,1,1,1],
       [1,empty,empty,empty]
    ]
    
    */

  for (let i = 0; i < rows; i++) {
    dpMatrix.push(new Array(cols));
  }
  // set 1st row cols values to 1
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < dpMatrix[i].length; j++) {
      dpMatrix[i][j] = 1;
    }
  }
  // set 1st col value from all rows to 1
  for (let i = 0; i < dpMatrix.length; i++) {
    dpMatrix[i][0] = 1;
  }

  // set unique uniquePaths

  for (let i = 1; i < dpMatrix.length; i++) {
    for (let j = 1; j < dpMatrix[i].length; j++) {
      let sum = dpMatrix[i - 1][j] + dpMatrix[i][j - 1];
      dpMatrix[i][j] = sum;
    }
  }

  return dpMatrix[dpMatrix.length - 1][cols - 1];
}

module.exports = uniquePaths;
