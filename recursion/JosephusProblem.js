// Find the Safe Position

// There are n people standing in a circle (numbered clockwise 1 to n) waiting to be executed. The counting begins at point 1 in the circle and proceeds around the circle in a fixed direction (clockwise). In each step, a certain number of people are skipped and the next person is executed. The elimination proceeds around the circle (which is becoming smaller and smaller as the executed people are removed), until only the last person remains, who is given freedom.
// Given the total number of persons n and a number k which indicates that k-1 persons are skipped and kth person is killed in circle. The task is to choose the place in the initial circle so that you are the last one remaining and so survive.

// Example 1:

// Input:
// n = 2, k = 1
// Output:
// 2
// Explanation:
// Here, n = 2 and k = 1, then safe position is
// 2 as the person at 1st position will be killed.

// Example 2:

// Input:
// n = 4, k = 2
// Output:
// 1
// Explanation:
// The safe position is 1.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function safePos() which takes an Integer n as input and returns the safe position.

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// IBH method

function josephus(n, k) {
  let ans = 0,
    persons = [];
  for (let i = 0; i < n; i++) {
    persons[i] = i + 1;
  }
  function solve(persons, k, index) {
    if (persons.length == 1) {
      ans = persons[0];
      return;
    }
    let newIndex = (index + k) % persons.length;
    persons.splice(newIndex, 1);
    solve(persons, k, newIndex, ans);
  }
  solve(persons, k - 1, 0);
  return ans;
}
console.log(josephus(40, 7));

//==============================================================================================
function josephus(n, k) {
  if (n == 1) return 1;
  /* The position returned
            by josephus(n - 1, k) is
            adjusted because the
            recursive call josephus(n
            - 1, k) considers the
            original position k%n + 1
            as position 1 */ else return ((josephus(n - 1, k) + k - 1) % n) + 1;
}
