// Program for Tower of Hanoi
// Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

// Only one disk can be moved at a time.
// Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
// No disk may be placed on top of a smaller disk.

// Examples:

// Input : 2
// Output : Disk 1 moved from A to B
//          Disk 2 moved from A to C
//          Disk 1 moved from B to C

// Input : 3
// Output : Disk 1 moved from A to C
//          Disk 2 moved from A to B
//          Disk 1 moved from C to B
//          Disk 3 moved from A to C
//          Disk 1 moved from B to A
//          Disk 2 moved from B to C
//          Disk 1 moved from A to C

// TC - O(2^n)

let n = 2,
  s = "Source",
  d = "Destination",
  h = "Helper",
  count = 0;

function hanoi(n, s, d, h) {
  count++;
  if (n === 1) {
    console.log(`Moving plate ${n} from ${s} to ${d}`);
    return;
  }
  hanoi(n - 1, s, h, d);
  console.log(`Moving plate ${n} from ${s} to ${d}`);
  hanoi(n - 1, h, d, s);
  return;
}
hanoi(n, s, d, h);
console.log(count);
