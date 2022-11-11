function romanToInt(s: string): number {
  const r = new Map<string, number>();
  r.set("I", 1)
    .set("V", 5)
    .set("X", 10)
    .set("L", 50)
    .set("C", 100)
    .set("D", 500)
    .set("M", 1000);

  let res: number = 0;
  let notSkip: boolean = true;
  s.split("")
    .reverse()
    .forEach((c, i, m) => {
      if (notSkip) {
        if (i + 1 < m.length && r.get(m[i + 1])! < r.get(c)!) {
          notSkip = false;
          res += r.get(m[i])! - r.get(m[i + 1])!;
        } else {
          res += r.get(c)!;
        }
      } else {
        notSkip = true;
      }
    });
  return res;
}

console.log("III === 3", romanToInt("III") === 3 ? "passed" : "NOT passed");
console.log(
  "LVIII === 58",
  romanToInt("LVIII") === 3 ? "passed" : "NOT passed"
);
console.log(
  "MCMXCIV === 1994",
  romanToInt("MCMXCIV") === 3 ? "passed" : "NOT passed"
);
