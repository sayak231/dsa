// N meetings in one room

// There is one meeting room in a firm. There are N meetings in the form of (start[i], end[i]) where start[i] is start time of meeting i and end[i] is finish time of meeting i.
// What is the maximum number of meetings that can be accommodated in the meeting room when only one meeting can be held in the meeting room at a particular time?

// Note: Start time of one chosen meeting can't be equal to the end time of the other chosen meeting.

// Example 1:

// Input:
// N = 6
// start[] = {1,3,0,5,8,5}
// end[] =  {2,4,6,7,9,9}
// Output:
// 4
// Explanation:
// Maximum four meetings can be held with
// given start and end timings.
// The meetings are - (1, 2),(3, 4), (5,7) and (8,9)
// Example 2:

// Input:
// N = 3
// start[] = {10, 12, 20}
// end[] = {20, 25, 30}
// Output:
// 1
// Explanation:
// Only one meetings can be held
// with given start and end timings.

// Your Task :
// You don't need to read inputs or print anything. Complete the function maxMeetings() that takes two arrays start[] and end[] along with their size N as input parameters
// and returns the maximum number of meetings that can be held in the meeting room.

// Expected Time Complexity : O(N*LogN)
// Expected Auxilliary Space : O(N)

// Constraints:
// 1 ≤ N ≤ 105
// 0 ≤ start[i] < end[i] ≤ 105

// Algo

// The greedy choice is to always pick the next activity whose finish time is least among the remaining activities and the start time is more than or equal to the finish time of the previously selected activity. We can sort the activities according to their finishing time so that we always consider the next activity as minimum finishing time activity.
// 1) Sort the activities according to their finishing time
// 2) Select the first activity from the sorted array and print it.
// 3) Do the following for the remaining activities in the sorted array.
// …….a) If the start time of this activity is greater than or equal to the finish time of the previously selected activity then select this activity and print it.

function maxMeetings(start, end, n) {
  // code here
  let combined = [];
  for (let i = 0; i < n; i++) {
    combined[i] = [start[i], end[i]];
  }
  combined.sort((a, b) => a[1] - b[1]);
  let count = 1,
    prev = combined[0][1];

  for (let i = 1; i < n; i++) {
    if (combined[i][0] > prev) {
      count++;
      prev = combined[i][1];
    } else continue;
  }

  return count;
}
// TC - O(nlogn)
// SC - O(n^2)
console.log(maxMeetings([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9], 6));
