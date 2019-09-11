// time O(n)
// space O(1) because the are 26 letters in the alphabet

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let sChar = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    sChar[letter] = sChar[letter] + 1 || 1;
  }
  for (let i = 0; i < t.length; i++) {
    const letter = t[i];

    if (!sChar[letter]) return false;
    sChar[letter]--;
  }
  return true;
}

module.exports = isAnagram;
