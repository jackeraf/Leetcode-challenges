// time O(n)
// space O(n)

// function rob(nums) {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];
//   if (nums.length === 2) return Math.max(nums[0], nums[1]);

//   let maxRobs = [nums[0], Math.max(nums[0], nums[1])];

//   for (let i = 2; i < nums.length; i++) {
//     const maxRob = Math.max(nums[i] + maxRobs[i - 2], maxRobs[i - 1]);
//     maxRobs.push(maxRob);
//   }
//   return maxRobs[maxRobs.length - 1];
// }

// code optimized to O(1) space
// time O(n)
// space O(1)

function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const maxRob = Math.max(nums[i] + first, second);
    first = second;
    second = maxRob;
  }
  return second;
}

module.exports = rob;
