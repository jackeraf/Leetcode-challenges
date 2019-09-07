// Time O(N K log K) where n is # of strings and k is length of strings
// the sorting .sort does the k log k
// space O(n k)

function groupAnagrams(strs) {
  let grouped = {};

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i]
      .split("")
      .sort()
      .join("");
    if (!(sorted in grouped)) {
      grouped[sorted] = [];
    }
    grouped[sorted].push(strs[i]);
  }
  return Object.values(grouped);
}

module.exports = groupAnagrams;
