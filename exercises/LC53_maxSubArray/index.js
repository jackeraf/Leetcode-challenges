// time O(n)
// space O(n)

// function maxSubArray(nums) {
//   if (nums.length === 1) return nums[0];
//   let max = nums[0];
//   let maxSums = new Array(nums.length);
//   maxSums[0] = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     maxSums[i] = Math.max(nums[i], nums[i] + maxSums[i - 1]);
//     max = Math.max(maxSums[i], max);
//   }
//   return max;
// }

// optimization
// time O(n)
// space O(1)

function maxSubArray(nums) {
  if (nums.length === 1) return nums[0];
  let max = nums[0];
  // let previous = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    max = Math.max(nums[i], max);
    // OR
    // let next = Math.max(nums[i], nums[i] + previous);
    // previous = next;
    // max = Math.max(next, max);
  }
  return max;
}

module.exports = maxSubArray;
