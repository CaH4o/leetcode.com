/* 3. Longest Substring Without Repeating Characters (Medium)

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces. */

function lengthOfLongestSubstring(s: string): number {
  let as: string[] = [];
  let res: number = 0;
  for (let i: number = 0; i < s.length; ++i) {
    if (as.indexOf(s[i]) !== -1) {
      as = as.slice(as.indexOf(s[i]) + 1);
    }
    as.push(s[i]);
    if (res< as.length) res = as.length;
  }
  return res;
}

console.log(
  "abcabcbb === 3",
  lengthOfLongestSubstring("abcabcbb") === 3 ? "passed" : "NOT passed"
);
console.log(
  "bbbbb === 1",
  lengthOfLongestSubstring("bbbbb") === 1 ? "passed" : "NOT passed"
);
console.log(
  "pwwkew === 3",
  lengthOfLongestSubstring("pwwkew") === 3 ? "passed" : "NOT passed"
);
console.log(
  "' ' === 1",
  lengthOfLongestSubstring(" ") === 1 ? "passed" : "NOT passed"
);
console.log(
  "'' === 0",
  lengthOfLongestSubstring("") === 0 ? "passed" : "NOT passed"
);
console.log(
  "dvdf === 3",
  lengthOfLongestSubstring("dvdf") === 3 ? "passed" : "NOT passed"
);
console.log(
  "cdd === 2",
  lengthOfLongestSubstring("cdd") === 2 ? "passed" : "NOT passed"
);
