// Define a Node class for the Trie
class TrieNode {
  constructor() {
    this.children = {}; // Stores child nodes
    this.isEndOfWord = false; // Marks the end of a word
  }
}

// Define the Trie class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the Trie
  insert(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }

    currentNode.isEndOfWord = true; // Mark the end of the word
  }

  // Search for a word in the Trie
  search(word) {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children[char]) {
        return false; // If character is not found, the word doesn't exist
      }
      currentNode = currentNode.children[char];
    }

    return currentNode.isEndOfWord; // Return true if it's the end of a word
  }

  // Check if any word in the Trie starts with a given prefix
  startsWith(prefix) {
    let currentNode = this.root;

    for (const char of prefix) {
      if (!currentNode.children[char]) {
        return false; // If character is not found, no word starts with the prefix
      }
      currentNode = currentNode.children[char];
    }

    return true; // Prefix exists in the Trie
  }
}
