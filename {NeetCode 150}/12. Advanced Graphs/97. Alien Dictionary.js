/* There is a foreign language which uses the latin alphabet, but the order among letters is not "a", "b", "c" ... "z" as in English.

You receive a list of non-empty strings words from the dictionary, where the words are sorted lexicographically 
based on the rules of this new language.

Derive the order of letters in this language. If the order is invalid, return an empty string. 
If there are multiple valid order of letters, return any of them.

A string a is lexicographically smaller than a string b if either of the following is true:

-The first letter where they differ is smaller in a than in b.
-There is no index i such that a[i] != b[i] and a.length < b.length.

Example 1:
    Input: ["z","o"]
    Output: "zo"
    Explanation: From "z" and "o", we know 'z' < 'o', so return "zo".

Example 2:
    Input: ["hrn","hrf","er","enn","rfnn"]
    Output: "hernf"
    Explanation:
                from "hrn" and "hrf", we know 'n' < 'f'
                from "hrf" and "er", we know 'h' < 'e'
                from "er" and "enn", we know get 'r' < 'n'
                from "enn" and "rfnn" we know 'e'<'r'
                so one possibile solution is "hernf" */

function foreignDictionary(words) {
  // Create an adjacency list to represent character relationships
  // Each character will map to a Set of characters that should come after it
  const adj = {};

  // First pass: Initialize the adjacency list with all unique characters
  // This ensures we don't miss any characters, even if they don't have relationships
  for (const word of words) {
    for (const char of word) {
      adj[char] = new Set();
    }
  }

  // Second pass: Compare adjacent words to find character relationships
  // This is similar to how we might learn English alphabet order by comparing
  // words like "cat" vs "car" to know 't' comes after 'r'
  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);

    // Handle invalid case: if a longer word that matches a shorter word's prefix
    // comes first, it violates dictionary ordering (like "apple" before "app")
    if (w1.length > w2.length && w1.slice(0, minLen) === w2.slice(0, minLen)) {
      return "";
    }

    // Find the first character where the words differ
    // This character pair tells us something about the alphabet order
    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        // Add the relationship: w1[j] comes before w2[j]
        adj[w1[j]].add(w2[j]);
        break; // We only need the first difference
      }
    }
  }

  // Prepare for topological sort using depth-first search (DFS)
  const visited = {}; // Track visited characters during DFS
  const res = []; // Store the final ordering

  // DFS function to detect cycles and build the ordering
  // Returns true if a cycle is detected (making ordering impossible)
  const dfs = (char) => {
    // If we've seen this character in current DFS path, check its status
    if (char in visited) return visited[char];

    // Mark character as being processed (true means "in current path")
    visited[char] = true;

    // Process all characters that should come after current character
    for (const neighChar of adj[char]) {
      // If we detect a cycle while processing neighbors, propagate the error
      if (dfs(neighChar)) return true;
    }

    // Mark character as fully processed (false means "done processing")
    visited[char] = false;

    // Add to result - we add characters in reverse order due to DFS nature
    res.push(char);

    // No cycles detected in this path
    return false;
  };

  // Try to build the ordering starting from each character
  // This ensures we handle disconnected components in our graph
  for (const char in adj) {
    // If DFS detects a cycle from any starting point, ordering is impossible
    if (dfs(char)) return "";
  }

  // DFS gives us reverse topological sort, so we need to reverse it
  // Then join characters into a single string for final alphabet order
  res.reverse();
  return res.join("");
}

console.log(foreignDictionary(["z", "o"]));
console.log(foreignDictionary(["hrn", "hrf", "er", "enn", "rfnn"]));
