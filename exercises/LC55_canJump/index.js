// Time O(n^2)
// space O(n)

function canJump(nums) {
  const dpArr = new Array(nums.length);
  dpArr[0] = true;
  // if can reach that current position and its value + index is equal to last position return true
  //
  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (dpArr[i] && i + nums[i] >= j) {
        dpArr[j] = true;
        break;
      }
    }
  }
  return dpArr[dpArr.length - 1] === true;
}

module.exports = canJump;
