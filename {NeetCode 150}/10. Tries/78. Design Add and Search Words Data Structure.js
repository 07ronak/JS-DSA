/* Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

-WordDictionary() Initializes the object.

-void addWord(word) Adds word to the data structure, it can be matched later.

-bool search(word) Returns true if there is any string in the data structure that matches 
word or false otherwise. word may contain dots '.' where dots can be matched with any letter. */

// Define a Node class for the Trie
class TrieNode {
  constructor() {
    this.children = {}; // Stores child nodes
    this.isEndOfWord = false; // Marks the end of a word
  }
}

// Define the WordDictionary class
class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  // Adds a word into the data structure
  addWord(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }

    currentNode.isEndOfWord = true; // Mark the end of the word
  }

  search(word) {
    const dfs = (node, index) => {
      if (index === word.length) {
        return node.isEndOfWord;
      }

      const char = word[index];

      if (char === ".") {
        for (const child in node.children) {
          if (dfs(node.children[child], index + 1)) {
            return true;
          }
        }
        return false;
      } else {
        if (!node.children[char]) {
          return false;
        }
        return dfs(node.children[char], index + 1);
      }
    };

    return dfs(this.root, 0);
  }
}
