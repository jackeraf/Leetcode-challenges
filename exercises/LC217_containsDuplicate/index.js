// time O(n)
// space O(unique(n)) and worst case O(n)

const containsDuplicate = nums => {
  const visitedNums = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!(num in visitedNums)) {
      visitedNums[num] = true;
    } else {
      return true;
    }
  }
  return false;
};

module.exports = containsDuplicate;
