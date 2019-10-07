// time O(n)
// space O(n)

// function maxProduct(nums) {
//   let maxTillIndex = [nums[0]];
//   let minTillIndex = [nums[0]];
//   let max = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     const num = nums[i];
//     maxTillIndex[i] = Math.max(
//       num,
//       num * maxTillIndex[i - 1],
//       num * minTillIndex[i - 1]
//     );
//     minTillIndex[i] = Math.min(
//       num,
//       num * maxTillIndex[i - 1],
//       num * minTillIndex[i - 1]
//     );
//     max = Math.max(max, maxTillIndex[i]);
//   }
//   return max;
// }

// time O(n)
// space O(1)

function maxProduct(arr) {
  if (arr.length === 1) return arr[0];
  let n = arr.length;
  let maxEndingHere = 1;
  let minEndingHere = 1;
  let maxSoFar = 1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      maxEndingHere = maxEndingHere * arr[i];
      minEndingHere = Math.min(minEndingHere * arr[i], 1);
    } else if (arr[i] == 0) {
      maxEndingHere = 1;
      minEndingHere = 1;
    } else {
      let temp = maxEndingHere;
      maxEndingHere = Math.max(minEndingHere * arr[i], 1);
      minEndingHere = temp * arr[i];
    }
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
  }
  if (maxSoFar === 1) return 0;
  return maxSoFar;
}

module.exports = maxProduct;
