// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true

// Example 2:

// Input: head = [1,2]
// Output: false

//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//Store the head in reference variable. Call the Linked List recursively until the last node. Then when the nodes come back after recursion from the last,
// compare them with each of the nodes from the reference variable.

var isPalindrome = function (head) {
  let ref = head;
  function repeat(node) {
    if (node === null) return true;
    let ans = repeat(node.next);
    let isEqual = ref.val === node.val ? true : false;
    ref = ref.next;
    return ans && isEqual;
  }
  return repeat(head);
};
const linkedList = new ListNode(1);
linkedList.next = new ListNode(2);
linkedList.next.next = new ListNode(2);
linkedList.next.next.next = new ListNode(1);

// Floyd's Algo
var isPalindromeFloyd = function (head) {
  let slow = head,
    fast = head,
    prev,
    temp;
  while (fast && fast.next) (slow = slow.next), (fast = fast.next.next);
  (prev = slow), (slow = slow.next), (prev.next = null);
  while (slow)
    (temp = slow.next), (slow.next = prev), (prev = slow), (slow = temp);
  (fast = head), (slow = prev);
  while (slow)
    if (fast.val !== slow.val) return false;
    else (fast = fast.next), (slow = slow.next);
  return true;
};

console.log(isPalindromeFloyd(linkedList));
