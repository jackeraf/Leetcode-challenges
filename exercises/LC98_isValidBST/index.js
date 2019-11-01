// Time O(n)
// Space O(d) where d is the max depth of the tree

function isValidBST(root) {
  let valid = true;
  if (!root) return true;

  function helper(node, min, max) {
    if (!node) return;
    if (min >= node.val || node.val >= max) {
      valid = false;
      // no need to make the recursive calls afterwards so return
      return;
    }
    helper(node.left, min, node.val);
    helper(node.right, node.val, max);
  }
  helper(root, -Infinity, Infinity);
  return valid;
}

// solution without storing variable returning directly recursive call:

// function isValidBST(root) {
//   if (!root) return true;

//   function helper(node, min, max) {
//     if (!node) return true;
//     if (min >= node.val || node.val >= max) return false;
//     let isLeftValid = helper(node.left, min, node.val);
//     return isLeftValid && helper(node.right, node.val, max);
//   }
//   return helper(root, -Infinity, Infinity);
// }

module.exports = isValidBST;
