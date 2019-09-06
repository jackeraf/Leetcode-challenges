//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

// time O(n^2) space O(1)
// expand around the center technique

function longestPalindrome(s) {
  let maxLength = 1;
  let startingWindow = 0;
  function middleCompare(left, right) {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      const currentWindowLength = right - left + 1;
      if (currentWindowLength > maxLength) {
        maxLength = currentWindowLength;
        startingWindow = left;
      }
      left -= 1;
      right += 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    middleCompare(i - 1, i + 1);
    // for even string place the middle between left & right letters:
    middleCompare(i, i + 1);
  }
  return s.slice(startingWindow, startingWindow + maxLength);
}

module.exports = longestPalindrome;
