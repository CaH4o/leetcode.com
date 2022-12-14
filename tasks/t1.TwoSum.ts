/* 1. Two Sum
(Easy)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? */

function twoSum(nums: number[], target: number): number[] {
    const res: number[] = [];

    for (let i: number = 0; i + 1 < nums.length; ++i) {
        for (let x: number = i + 1; x < nums.length; ++x) {
          if (target === nums[i] + nums[x]) {
            res.push(i);
            res.push(x);
            break;
          }
        }
        if (res.length) break;
      }

  return res;
}

console.log(
  "[2,7,11,15], 9 === [0, 1]",
  twoSum([2, 7, 11, 15], 9).toString() === "0,1" ? "passed" : "NOT passed"
);
console.log(
  "[3,2,4], 6 === [1, 2]",
  twoSum([3, 2, 4], 6).toString() === "1,2" ? "passed" : "NOT passed"
);
console.log(
  "[3,3], 6 === [0, 1]",
  twoSum([3, 3], 6).toString() === "0,1" ? "passed" : "NOT passed"
);
console.log(
  "[0,4,3,0], 0 === [0, 3]",
  twoSum([0, 4, 3, 0], 0).toString() === "0,3" ? "passed" : "NOT passed"
);
console.log(
  "[-1,-2,-3,-4,-5], -8 === [2, 4]",
  twoSum([-1, -2, -3, -4, -5], -8).toString() === "2,4"
    ? "passed"
    : "NOT passed"
);
console.log(
  "[-3,4,3,90], 0 === [0, 2]",
  twoSum([-3, 4, 3, 90], 0).toString() === "0,2" ? "passed" : "NOT passed"
);