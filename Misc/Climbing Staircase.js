// Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time.

// At any given time, you can climb either 1 step or 2 steps
// if you have to climb to step 'n', we can only climb from step 'n-1' or 'n-2'
// calculate the ways we can climb to 'n-1' and 'n-2' steps and add the two

// climbingStaircase(n) = climbingStaircase(n-1) + climbingStaricase(n-2)

function waysClimbing(n) {
  if (n < 4) return n;
  return waysClimbing(n - 1) + waysClimbing(n - 2);
}

console.log(waysClimbing(6));

function climbingStaircase(n) {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}
//Big-O = O(n)

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
console.log(climbingStaircase(6));
