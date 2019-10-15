// time O(n log n)
// space O(1)

function minIndex(nums) {
  if (nums.length === 1) return 0;
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] < nums[right]) return 0;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] < nums[mid - 1]) {
      return mid;
    } else if (nums[mid + 1] < nums[mid]) {
      return mid + 1;
    }
    if (nums[mid] > nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

function binarySearch(nums, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function search(nums, target) {
  const minIndx = minIndex(nums);

  const left = binarySearch(nums, target, 0, minIndx - 1);
  const right = binarySearch(nums, target, minIndx, nums.length - 1);

  return Math.max(left, right);
}

module.exports = search;
