// time O(n)
// space O(1)

function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) {
    // to calculate the area we need to multiply the height by the width
    const currentArea =
      Math.min(heights[left], heights[right]) * (right - left);
    maxArea = Math.max(currentArea, maxArea);
    if (heights[right] > heights[left]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

module.exports = maxArea;
