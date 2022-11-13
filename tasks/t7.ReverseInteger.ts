/* 7. Reverse Integer (Medium)

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 
Constraints:
-231 <= x <= 231 - 1 */

function reverse(x: number): number {
  const s: string = x.toString().split("").reverse().join("");
  const r: number = x < 0 ? parseInt(s) * -1 : parseInt(s);
  return r > 2 ** 31 || r < 2 ** 31 * -1 ? 0 : r;
}

console.log("123 === 321", reverse(123) === 321 ? "passed" : "NOT passed");
console.log("-123 === -321", reverse(-123) === -321 ? "passed" : "NOT passed");
console.log("120 === 21", reverse(120) === 21 ? "passed" : "NOT passed");
console.log(
  "1534236469 === 0",
  reverse(1534236469) === 0 ? "passed" : "NOT passed"
);
