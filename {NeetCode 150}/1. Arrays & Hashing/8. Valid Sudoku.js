/* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition. */

var isValidSudoku = function (board) {
  // Validate rows
  for (let i = 0; i < 9; i++) {
    let row = new Set();
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (value !== ".") {
        if (row.has(value)) return false;
        row.add(value);
      }
    }
  }

  // Validate columns
  for (let i = 0; i < 9; i++) {
    let column = new Set();
    for (let j = 0; j < 9; j++) {
      const value = board[j][i];
      if (value !== ".") {
        if (column.has(value)) return false;
        column.add(value);
      }
    }
  }

  // Validate 3x3 sub-boxes
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      let box = new Set();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const value = board[boxRow * 3 + i][boxCol * 3 + j];
          if (value !== ".") {
            if (box.has(value)) return false;
            box.add(value);
          }
        }
      }
    }
  }

  // If all validations pass
  return true;
};

var isValidSudoku = function (board) {
  // Initialize sets for rows, columns, and boxes
  const rows = Array.from({ length: 9 }, () => new Set());
  const columns = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());
  //This line of code creates an array with 9 elements, where each element is an empty Set.

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];

      if (value !== ".") {
        // Calculate the box index
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        // Check for duplicates
        if (
          rows[i].has(value) ||
          columns[j].has(value) ||
          boxes[boxIndex].has(value)
        ) {
          return false;
        }

        // Add value to corresponding sets
        rows[i].add(value);
        columns[j].add(value);
        boxes[boxIndex].add(value);
      }
    }
  }

  return true; // If no duplicates are found, the board is valid
};
