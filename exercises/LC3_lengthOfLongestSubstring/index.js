// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

// Time O(n) space O(min(m,n)) m because of the size of the alphabet & n because of str.length

function lengthOfLongestSubstring(s) {
  let letters = {};
  let max = 1;
  let startingWindow = 0;
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (!(letter in letters)) {
    } else {
      startingWindow = letters[letter] + 1;
    }
    letters[letter] = i;
    let difference = i - startingWindow + 1;
    max = Math.max(max, difference);
  }
  return max;
}
module.exports = lengthOfLongestSubstring;
