/* You are given an integer array coins representing coins of different denominations and an integer 
amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be 
made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

Example 1:
    Input: amount = 5, coins = [1,2,5]
    Output: 4
    Explanation: there are four ways to make up the amount:
                5=5
                5=2+2+1
                5=2+1+1+1
                5=1+1+1+1+1
Example 2:
    Input: amount = 3, coins = [2]
    Output: 0
    Explanation: the amount of 3 cannot be made up just with coins of 2.

Example 3:
    Input: amount = 10, coins = [10]
    Output: 1 */

var change = function (amount, coins) {
  const n = coins.length;
  const dp = Array.from({ length: n + 1 }, () => Array(amount + 1).fill(0));

  /*  for(let c=0; c<=amount; c++){
            dp[0][c] =0
        } */

  for (let r = 0; r <= n; r++) {
    dp[r][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j >= coins[i - 1]) {
        dp[i][j] = dp[i][j - coins[i - 1]] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][amount];
};

console.log(change(5, [1, 2, 5]));
console.log(change(3, [2]));
