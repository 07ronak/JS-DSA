/* A transformation sequence from word beginWord to word endWord using a dictionary wordList is a 
sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

-Every adjacent pair of words differs by a single letter.
-Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
-sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in 
the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

Example 1:
    Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
    Output: 5
    Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

Example 2:
    Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
    Output: 0
    Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence. */

const ladderLength = (beginWord, endWord, wordList) => {
  // Set for visited words to avoid cycles
  const visited = new Set();

  // Preprocess word list into a dictionary of wildcard transformations
  const allComboDir = {};
  const wordLength = beginWord.length;

  wordList.forEach((word) => {
    for (let i = 0; i < wordLength; i++) {
      const wildcard = word.slice(0, i) + "*" + word.slice(i + 1);
      if (!allComboDir[wildcard]) {
        allComboDir[wildcard] = [];
      }
      allComboDir[wildcard].push(word);
    }
  });

  // BFS queue to store words and their corresponding level
  const queue = [[beginWord, 1]];

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift();

    for (let i = 0; i < wordLength; i++) {
      const wildcard = currentWord.slice(0, i) + "*" + currentWord.slice(i + 1);

      if (allComboDir[wildcard]) {
        for (const adjacentWord of allComboDir[wildcard]) {
          // If we reach the end word, return the current level + 1
          if (adjacentWord === endWord) {
            return level + 1;
          }

          // If the adjacent word hasn't been visited, mark it and add to queue
          if (!visited.has(adjacentWord)) {
            visited.add(adjacentWord);
            queue.push([adjacentWord, level + 1]);
          }
        }
      }
    }
  }

  // If no transformation sequence is found
  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
