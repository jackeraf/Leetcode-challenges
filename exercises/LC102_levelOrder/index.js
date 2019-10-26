// First solution:

// function levelOrder(root) {
//   if (!root) return [];
//   let res = [[root.val]];

//   function dive(leftNode, rightNode) {
//     if (!leftNode && !rightNode) return;
//     let temp = [];
//     if (leftNode.left) {
//       temp.push(leftNode.left.val);
//     }
//     if (leftNode.right) {
//       temp.push(leftNode.right.val);
//     }
//     if (rightNode.left) {
//       temp.push(rightNode.left.val);
//     }
//     if (rightNode.right) {
//       temp.push(rightNode.right.val);
//     }
//     if (temp.length) res.push(temp);
//     dive(leftNode.left, rightNode.right);
//   }
//   let temp = [];
//   if (root.left) temp.push(root.left.val);
//   if (root.right) temp.push(root.right.val);
//   res.push(temp);
//   dive(root.left, root.right);
//   return res;
// }

// Time O(n)
// Space O(1)

function levelOrder(root) {
  const res = [];
  function helper(node, currentDepth) {
    if (!node) return;

    if (!res[currentDepth]) res[currentDepth] = [];

    res[currentDepth].push(node.val);
    helper(node.left, currentDepth + 1);
    helper(node.right, currentDepth + 1);
  }
  helper(root, 0);
  return res;
}

module.exports = levelOrder;
