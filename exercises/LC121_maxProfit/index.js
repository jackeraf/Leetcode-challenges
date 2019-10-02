// time O(n^2)
// space O(1)

// var maxProfit = function(prices) {
//   let max = -Infinity;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[i] < prices[j]) {
//         let difference = prices[j] - prices[i];
//         max = Math.max(difference, max);
//       }
//     }
//   }
//   return max === -Infinity ? 0 : max;
// };

// time O(n)
// space O(1)

const maxProfit = prices => {
  let smallest = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    smallest = Math.min(smallest, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - smallest);
  }
  return maxProfit;
};

module.exports = maxProfit;
