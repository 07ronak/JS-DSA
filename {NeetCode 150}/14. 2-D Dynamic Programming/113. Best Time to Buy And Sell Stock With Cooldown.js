/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., 
buy one and sell one share of the stock multiple times) with the following restrictions:

-After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again). 

Example 1:
    Input: prices = [1,2,3,0,2]
    Output: 3
    Explanation: transactions = [buy, sell, cooldown, buy, sell]

Example 2:
    Input: prices = [1]
    Output: 0 */

var maxProfit = function (prices) {
  // Edge case: If prices array is empty or has only one price, no transactions can be made
  if (!prices || prices.length === 1) return 0;

  // State variables:
  // hold: Max profit if holding a stock
  // sold: Max profit if just sold a stock
  // rest: Max profit if resting (not holding any stock)
  let hold = -Infinity,
    sold = 0,
    rest = 0;

  // Iterate through each price in the array
  for (let i = 0; i < prices.length; i++) {
    // Calculate the next states based on current states:
    let nextHold = Math.max(hold, rest - prices[i]); // Either continue holding or buy after resting
    let nextSold = hold + prices[i]; // Profit after selling the stock you're holding
    let nextRest = Math.max(rest, sold); // Max profit between resting or just selling

    // Update the states to move to the next day
    hold = nextHold;
    sold = nextSold;
    rest = nextRest;
  }

  // The result is the maximum profit from either selling or resting on the last day
  return Math.max(sold, rest);
};

console.log(maxProfit([1, 2, 3, 0, 2]));
console.log(maxProfit([1]));
