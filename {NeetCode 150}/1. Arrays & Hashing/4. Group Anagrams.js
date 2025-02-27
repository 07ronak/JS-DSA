/* Given an array of strings strs, group the anagrams together. You can return the answer in any order. */

/* Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]] */

function groupAnagrams(strs) {
  const anagramMap = new Map();

  for (let str of strs) {
    // Sort the characters of the string to generate a key
    const sorted = str.split("").sort().join("");

    // Group strings by their sorted representation
    if (!anagramMap.has(sorted)) {
      anagramMap.set(sorted, []);
    }
    anagramMap.get(sorted).push(str);
  }
  console.log(anagramMap);

  // Convert the map values to an array
  return Array.from(anagramMap.values());
}

// Example usage
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

/* ---------------------------------------------------------------------------- */

function groupAnagrams(strs) {
  // Create a Map to store sorted string as key and array of anagrams as value
  const anagramMap = new Map();

  // Iterate through each string in the input array
  for (const str of strs) {
    // Sort the characters of the string to create a key
    // This ensures all anagrams will have the same key
    const sortedStr = str.split("").sort().join("");

    // If the sorted string exists as a key, push the original string to its array
    // If it doesn't exist, create a new array with the string
    if (anagramMap.has(sortedStr)) {
      anagramMap.get(sortedStr).push(str);
    } else {
      anagramMap.set(sortedStr, [str]);
    }
  }

  // Convert Map values to array and return
  return Array.from(anagramMap.values());
}
