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
