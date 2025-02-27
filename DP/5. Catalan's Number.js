function CatalanRec(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += CatalanRec(i) * CatalanRec(n - i - 1);
  }
  return ans;
}

console.log(CatalanRec(10));

/* ------------------------------------------------------------------------------------------------------------------------------ */

function CatalanMemo(n) {
  let dp = new Array(n + 1).fill(0);

  const helper = (i) => {
    if (i === 0 || i === 1) {
      return 1;
    }

    if (dp[i]) return dp[i]; // Return memoized result if already computed

    for (let j = 0; j < i; j++) {
      dp[i] += helper(j) * helper(i - j - 1); // Apply the Catalan recursion formula
    }

    return dp[i];
  };

  return helper(n);
}

console.log(CatalanMemo(10));

/* --------------------------------------------------------------------------------------------------------------------------------- */

function CatalanTab(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }

  return dp[n];
}
