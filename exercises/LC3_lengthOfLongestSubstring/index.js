// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"


function lengthOfLongestSubstring(s) {
    let letters = {};
    let start = 0;
    let max = 1;

    for(let i = 0; i < s.length; i++){
        const letter = s[i];
        let windowLength = i - start +1;
        if(!(letter in letters)){
            letters[letter] = i;
            max = Math.max(max,windowLength);

        }else{
            start = letters[letter] + 1;
            letters[letter] = i;
        }
    }
    return max;
}
module.exports = lengthOfLongestSubstring;
