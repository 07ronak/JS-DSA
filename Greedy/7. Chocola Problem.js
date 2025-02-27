/* MIN COST TO CUT BOARD INTO SQUARES */

/* We are given a bar of chocolate composed of m x n square pieces. One should break the chocolate into single squares. 
   Each break of a part of the chocolate is charges a cost expressed by a positive integer. 
   This cost does not depend on the size of the part is being broken but only depends on the line the break goes along. 
   let us denote the costs of breaking along consecutive vertical line with x1,x2,.....x(m-1) and along horizontal line with y1,y2,...y(n-1).
   Compute the minimal cost of breaking the whole chocolate into single squares.
*/

const verticalCuts = [2, 1, 3, 1, 4];
const horizontalCuts = [4, 1, 2];

function chocola(v, h) {
  // Sort cuts in descending order (Greedy approach)
  v.sort((a, b) => b - a);
  h.sort((a, b) => b - a);

  let cost = 0;
  let vp = 1; // Vertical pieces
  let hp = 1; // Horizontal pieces

  let i = 0;
  let j = 0;

  while (i < v.length && j < h.length) {
    if (v[i] >= h[j]) {
      cost += v[i] * hp; // Multiply vertical cut cost with current horizontal parts
      vp++; // Increase vertical parts
      i++;
    } else {
      cost += h[j] * vp; // Multiply horizontal cut cost with current vertical parts
      hp++; // Increase horizontal parts
      j++;
    }
  }

  // Process remaining vertical cuts
  while (i < v.length) {
    cost += v[i] * hp;
    vp++;
    i++;
  }

  // Process remaining horizontal cuts
  while (j < h.length) {
    cost += h[j] * vp;
    hp++;
    j++;
  }

  return cost;
}

console.log(chocola(verticalCuts, horizontalCuts)); // Expected output: 42
