/* Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:

    Input: s1 = "ab", s2 = "eidbaooo"
    Output: true
    Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
    Input: s1 = "ab", s2 = "eidboaoo"
    Output: false                                              */

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  fm = {};
  windowFm = {};

  for (let char of s1) {
    fm[char] = (fm[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;

  while (right < s2.length) {
    //step1: calculate window frequency
    //step2: compare 2 maps
    //step3: increase left pointer
    //step4: increase right pointer

    let char = s2[right];
    windowFm[char] = (windowFm[char] || 0) + 1;

    if (right - left + 1 === s1.length) {
      if (isMatch(windowFm, fm)) {
        return true;
      }

      let leftChar = s2[left];
      windowFm[leftChar]--;
      if (windowFm[leftChar] === 0) {
        delete windowFm[leftChar];
      }
      left++;
    }
    right++;
  }

  return false;
};
//helper funtion to compare two frequecy maps

function isMatch(fm1, fm2) {
  if (Object.keys(fm1).length !== Object.keys(fm2).length) return false;

  for (let key in fm1) {
    if (fm1[key] !== fm2[key]) return false;
  }
  return true;
}

console.log(checkInclusion("ab", "eidbaooo")); //true
console.log(checkInclusion("ab", "eidboaoo")); //false
