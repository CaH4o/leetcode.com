/*6. Zigzag Conversion (Medium)

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);

Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"

Constraints:
1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000 */

function convert(s: string, numRows: number): string {
  let res: string = "";
  const gap: number = numRows > 2 ? numRows - 2 : 0;
  let c: number = 0;
  let r: number = 0;
  let n: number = 0;
  let b: boolean = true;

  for (let i: number = 0; i < s.length; ++i) {
    if (n >= s.length) {
      n = ++r;
      b = true;
    }

    res += s[n];

    if (!r || r + 1 === numRows) {
      n += numRows + gap;
    } else {
      if (b) {
        c = 2 * (numRows - 1 - r);
      } else {
        c = 2 * (numRows - 1) - c;
      }
      n += c;
      b = !b;
    }
  }

  return res;
}

console.log(
  "ABDFK, 2 === ADKBF",
  convert("ABDFK", 2) === "ADKBF" ? "passed" : "NOT passed"
);
console.log(
  "PAYPALISHIRING, 3 === PAHNAPLSIIGYIR",
  convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR" ? "passed" : "NOT passed"
);
console.log(
  "PAYPALISHIRING, 4 === PINALSIGYAHRPI",
  convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI" ? "passed" : "NOT passed"
);
console.log("A, 1 === A", convert("A", 1) === "A" ? "passed" : "NOT passed");
