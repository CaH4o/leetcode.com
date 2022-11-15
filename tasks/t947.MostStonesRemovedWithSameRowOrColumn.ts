/* 947. Most Stones Removed with Same Row or Column (Medium)

On a 2D plane, we place n stones at some integer coordinate points. Each coordinate point may have at most one stone.
A stone can be removed if it shares either the same row or the same column as another stone that has not been removed.
Given an array stones of length n where stones[i] = [xi, yi] represents the location of the ith stone, return the largest possible number of stones that can be removed.

Example 1:
Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
Output: 5
Explanation: One way to remove 5 stones is as follows:
1. Remove stone [2,2] because it shares the same row as [2,1].
2. Remove stone [2,1] because it shares the same column as [0,1].
3. Remove stone [1,2] because it shares the same row as [1,0].
4. Remove stone [1,0] because it shares the same column as [0,0].
5. Remove stone [0,1] because it shares the same row as [0,0].
Stone [0,0] cannot be removed since it does not share a row/column with another stone still on the plane.

Example 2:
Input: stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
Output: 3
Explanation: One way to make 3 moves is as follows:
1. Remove stone [2,2] because it shares the same row as [2,0].
2. Remove stone [2,0] because it shares the same column as [0,0].
3. Remove stone [0,2] because it shares the same row as [0,0].
Stones [0,0] and [1,1] cannot be removed since they do not share a row/column with another stone still on the plane.

Example 3:
Input: stones = [[0,0]]
Output: 0
Explanation: [0,0] is the only stone on the plane, so you cannot remove it.
 
Constraints:
1 <= stones.length <= 1000
0 <= xi, yi <= 104
No two stones are at the same coordinate point.*/

function removeStones(stones: number[][]): number {
  const visited: boolean[] = [];
  for (let i: number = 0; i < stones.length; ++i) {
    visited.push(false);
  }

  function crossStones(index: number): void {
    visited[index] = true;

    for (let i: number = 0; i < stones.length; ++i) {
      if (visited[i]) continue;
      if (
        stones[index][0] === stones[i][0] ||
        stones[index][1] === stones[i][1]
      ) {
        crossStones(i);
      }
    }
  }

  let m: number = 0;
  for (let i: number = 0; i < stones.length; ++i) {
    if (visited[i]) continue;
    crossStones(i);
    m++;
  }

  const res: number = stones.length - m;
  return res;
}

console.log(
  "[[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]] === 5",
  removeStones([
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
    [2, 2],
  ]) === 5
    ? "passed"
    : "NOT passed"
);
console.log(
  "[[0,0],[0,2],[1,1],[2,0],[2,2]] === 3",
  removeStones([
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 2],
  ]) === 3
    ? "passed"
    : "NOT passed"
);
console.log(
  "[[0,0]] === 0",
  removeStones([[0, 0]]) === 0 ? "passed" : "NOT passed"
);
console.log(
  "[[0,1],[1,0],[1,1]] === 2",
  removeStones([
    [0, 1],
    [1, 0],
    [1, 1],
  ]) === 2
    ? "passed"
    : "NOT passed"
);
console.log(
  "[[0,1],[1,2],[1,3],[3,3],[2,3],[0,2]] === 5",
  removeStones([
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 3],
    [2, 3],
    [0, 2],
  ]) === 5
    ? "passed"
    : "NOT passed"
);
console.log(
  "[[3,3],[4,4],[1,4],[1,5],[2,3],[4,3],[2,4]] === 6",
  removeStones([
    [3, 3],
    [4, 4],
    [1, 4],
    [1, 5],
    [2, 3],
    [4, 3],
    [2, 4],
  ]) === 6
    ? "passed"
    : "NOT passed"
);
console.log(
  "[[3,2],[0,0],[3,3],[2,1],[2,3],[2,2],[0,2]] === 6",
  removeStones([
    [3, 2],
    [0, 0],
    [3, 3],
    [2, 1],
    [2, 3],
    [2, 2],
    [0, 2],
  ]) === 6
    ? "passed"
    : "NOT passed"
);
console.log(
  "[[5,9],[9,0],[0,0],[7,0],[4,3],[8,5],[5,8],[1,1],[0,6],[7,5],[1,6],[1,9],[9,4],[2,8],[1,3],[4,2],[2,5],[4,1],[0,2],[6,5]] === 19",
  removeStones([
    [5, 9],
    [9, 0],
    [0, 0],
    [7, 0],
    [4, 3],
    [8, 5],
    [5, 8],
    [1, 1],
    [0, 6],
    [7, 5],
    [1, 6],
    [1, 9],
    [9, 4],
    [2, 8],
    [1, 3],
    [4, 2],
    [2, 5],
    [4, 1],
    [0, 2],
    [6, 5],
  ]) === 19
    ? "passed"
    : "NOT passed"
);
console.log(
  "[[3,2],[3,1],[4,4],[1,1],[0,2],[4,0]] === 4",
  removeStones([
    [3, 2],
    [3, 1],
    [4, 4],
    [1, 1],
    [0, 2],
    [4, 0],
  ]) === 4
    ? "passed"
    : "NOT passed"
);

//https://en.wikipedia.org/wiki/Depth-first_search
