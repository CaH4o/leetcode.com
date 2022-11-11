function twoSum(nums: number[], target: number): number[] {
   const res: number[] = [];

    for (let i:number = 0; i < nums.length; ++i) {
        for (let x:number = i + 1; x < nums.length; ++x) {
            if(target === (nums[i] + nums[x])){
                res.push(i);
                res.push(x);
                break;
            }
        }   
        if (res.length) break;
    }

console.log(res);
  return res;
};

console.log("[2,7,11,15], 9 === [0, 1]", twoSum([2,7,11,15], 9).toString() === "0,1" ? "passed" : "NOT passed");
console.log("[3,2,4], 6 === [1, 2]", twoSum([3,2,4], 6).toString() === "1,2" ? "passed" : "NOT passed");
console.log("[3,3], 6 === [0, 1]", twoSum([3,3], 6).toString() === "0,1" ? "passed" : "NOT passed");
