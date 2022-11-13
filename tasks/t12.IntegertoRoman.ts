/* 12. Integer to Roman (Medium)

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

Example 1:
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

Example 2:
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

Example 3:
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
Constraints:
1 <= num <= 3999 */

function intToRoman(num: number): string {
  const r1 = new Map<number, string>();
  r1.set(1, "I").set(5, "V").set(10, "X");

  const r2 = new Map<number, string>();
  r2.set(1, "X").set(5, "L").set(10, "C"); //10

  const r3 = new Map<number, string>();
  r3.set(1, "C").set(5, "D").set(10, "M"); //100

  const r4 = new Map<number, string>();
  r4.set(1, "M").set(5, "*").set(10, "*"); //1000

  const r: Map<number, string>[] = [r1, r2, r3, r4];

  let res: string = "";
  let rN: number = 0;

  while (num >= 1) {
    const n: number = num % 10;

    switch (n) {
      case 1:
      case 2:
      case 3:
        res = r[rN].get(1)!.repeat(n) + res;
        break;
      case 4:
        res = r[rN].get(1)!.concat(r[rN].get(5)!) + res;
        break;
      case 5:
        res = r[rN].get(5) + res;
        break;
      case 6:
      case 7:
      case 8:
        res = r[rN].get(5)!.concat(r[rN].get(1)!.repeat(n - 5)) + res;
        break;
      case 9:
        res = r[rN].get(1)!.concat(r[rN].get(10)!) + res;
        break;
      case 0:
        break;
      default:
    }

    num = parseInt((num / 10).toString());
    ++rN;
  }

  return res;
}

console.log("3 === III", intToRoman(3) === "III" ? "passed" : "NOT passed");
console.log(
  "58 === LVIII",
  intToRoman(58) === "LVIII" ? "passed" : "NOT passed"
);

console.log(
  "1994 === MCMXCIV ",
  intToRoman(1994) === "MCMXCIV" ? "passed" : "NOT passed"
);
