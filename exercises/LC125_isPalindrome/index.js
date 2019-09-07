// Time O(n)
// Space O(1) because sanitation will replace the s param

function isPalindrome(s) {
  s = s
    .toLowerCase()
    // regex [] to match all inside no matter the order of appearance
    .replace(/[\W_]/g, "");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
