/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
    Input: s = "()"
    Output: true
    
Example 2:
    Input: s = "()[]{}"
    Output: true

Example 3:
    Input: s = "(]"
    Output: false

Example 4:
    Input: s = "([])"
    Output: true */

function isValid(s) {
  // Stack to keep track of opening brackets
  const stack = [];

  // Mapping of closing to opening brackets
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If the character is a closing bracket
    if (bracketMap[char]) {
      // Pop the top element of the stack if it's not empty; else assign a dummy value
      const topElement = stack.pop() || "#";

      // Check if the popped element matches the corresponding opening bracket
      if (bracketMap[char] !== topElement) {
        return false;
      }
    } else {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    }
  }
  // If the stack is empty, all brackets were matched properly
  return stack.length === 0;
}

// Examples
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([])")); // Output: true
