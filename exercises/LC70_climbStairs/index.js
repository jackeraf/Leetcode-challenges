// time O(n)
// space 0(n)

const climbStairs = n => {
  if (3 >= n) return n;
  let ways = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    let way = ways[i - 1] + ways[i - 2];
    ways.push(way);
  }
  return ways[n];
};

module.exports = climbStairs;
