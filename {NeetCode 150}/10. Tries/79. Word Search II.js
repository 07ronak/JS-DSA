/* Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are
horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example 1:
    Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
    Output: ["eat","oath"]

Example 2:
    Input: board = [["a","b"],["c","d"]], words = ["abcb"]
    Output: [] */

class TrieNode {
  constructor() {
    this.children = {}; // Stores child nodes
    this.isEndOfWord = false; // Marks the end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isEndOfWord = true;
  }
}

function findWords(board, words) {
  const trie = new Trie();
  for (const word of words) {
    trie.addWord(word);
  }

  const rows = board.length;
  const cols = board[0].length;
  const result = new Set();
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0], // Right, Down, Left, Up
  ];

  const dfs = (node, row, col, path) => {
    if (node.isEndOfWord) {
      result.add(path);
    }

    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      board[row][col] === "#" ||
      !node.children[board[row][col]]
    ) {
      return;
    }

    const char = board[row][col];
    board[row][col] = "#"; // Mark the cell as visited

    for (const [dx, dy] of directions) {
      dfs(node.children[char], row + dx, col + dy, path + char);
    }

    board[row][col] = char; // Restore the cell
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const char = board[row][col];
      if (trie.root.children[char]) {
        dfs(trie.root, row, col, "");
      }
    }
  }

  return Array.from(result);
}
