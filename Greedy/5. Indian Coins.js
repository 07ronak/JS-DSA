/* We are given an infinite supply of denominations [1,2,5,10,20,50,100,500,2000] 
    Find min no. of coins/notes to make change for a value V.

    Example: Input - 121
             Output = 3 (100+20+1)
*/

function indianCoins(amount) {
  let ans = [];

  const currency = [1, 2, 5, 10, 20, 50, 100, 500, 2000];
  currency.sort((a, b) => b - a);
  //sorted in descending order

  const n = currency.length;

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (currency[i] <= amount) {
      while (currency[i] <= amount) {
        count++;
        amount -= currency[i];
        ans.push(currency[i]);
        if (amount === 0) {
          console.log(ans);
          break;
        }
      }
    }
  }
  return count;
}

console.log(indianCoins(1800)); //6
console.log(indianCoins(121)); //3
console.log(indianCoins(590)); //4
