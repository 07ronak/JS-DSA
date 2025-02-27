// The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:
// - only one disk may be moved at a time.
// - each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
// - no disk may be placed on top of a disk that is smaller

// shift 'n-1' from 'A' to 'B', using 'C' (when required)
// shift last disk from 'A' to 'C'
// shift 'n-1' disks from 'B' to 'C', using 'A' (when required)

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");

//Big-O = O(2^n)
