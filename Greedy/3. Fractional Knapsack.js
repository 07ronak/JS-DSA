function fractionalKnapsack(weights, values, capacity) {
  // Create and sort items by value/weight ratio
  const items = weights.map((w, i) => ({
    weight: w,
    value: values[i],
    ratio: values[i] / w,
  }));

  // Sort items by value-to-weight ratio in descending order
  items.sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;
  let remainingCapacity = capacity;

  for (let item of items) {
    // Take the whole item
    if (remainingCapacity >= item.weight) {
      totalValue += item.value;
      remainingCapacity -= item.weight;
    } else {
      // Take a fraction of the item
      totalValue += item.ratio * remainingCapacity;
      break; // No more space left
    }
  }

  return totalValue;
}

// Test cases
console.log(fractionalKnapsack([10, 20, 30], [60, 100, 120], 50)); // 240
console.log(fractionalKnapsack([5, 10, 15], [30, 40, 45], 20)); // 85
