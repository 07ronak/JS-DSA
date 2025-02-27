/* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
    Input: n = 1
    Output: ["()"]                  */

const Stack = require("../Custom Data Structures/Stack.js");

var generateParenthesis = function (n) {
  const stack = new Stack();
  const result = [];
  function backTrack(openCount, closeCount) {
    if (openCount === n && closeCount === n) {
      result.push(stack.items.join(""));
    }
    if (openCount < n) {
      stack.push("(");
      backTrack(openCount + 1, closeCount);
      stack.pop();
    }
    if (openCount > closeCount) {
      stack.push(")");
      backTrack(openCount, closeCount + 1);
      stack.pop();
    }
  }
  backTrack(0, 0); //inital case
  return result;
};

console.log(generateParenthesis(3)); //  ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); //  ["()"]
