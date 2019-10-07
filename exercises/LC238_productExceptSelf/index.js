// time O(2n)
// space O(n)

// function productExceptSelf(nums) {
//   if (!nums.length) return 0;
//   if (nums.length === 1) return nums[0];
//   let totalProduct = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     totalProduct *= nums[i];
//   }
//   let products = [totalProduct];
//   for (let i = 1; i < nums.length; i++) {
//     const num = nums[i];
//     let product = totalProduct / num;
//     products.push(product);
//   }
//   return products;
// }

// modifying the array:
// time O(2n)
// space O(1)

function productExceptSelf(nums) {
  if (!nums.length) return [];
  if (nums.length === 1) return nums[0];
  let totalProduct = nums[0];
  for (let i = 0; i < nums.length; i++) {
    totalProduct *= nums[i];
  }
  let products = [totalProduct];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    let product = totalProduct / num;
    products[i] = product;
  }
  return products;
}

module.exports = productExceptSelf;
