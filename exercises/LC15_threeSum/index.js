// time 0(n^2) because although we sort the array with
// O(n log n) time O(n^2) is bigger so we drop the constants
// space O(1)

const threeSum = nums => {
  let results = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (left < right) {
      if (nums[left] + nums[right] === target) {
        results.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (nums[left] + nums[right] < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return results;
};
module.exports = threeSum;
