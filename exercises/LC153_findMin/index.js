// time O(log n)
// space O(1)

function findMin(nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] < nums[right]) return nums[left];

  while (left <= right) {
    const middle = Math.floor(right + left / 2);
    if (nums[middle + 1] < nums[middle]) {
      return nums[middle + 1];
    } else if (nums[middle - 1] > nums[middle]) {
      return nums[middle];
    }
    if (nums[left] < nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
}

module.exports = findMin;
