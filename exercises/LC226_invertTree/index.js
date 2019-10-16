// time O(n)
// space O(1)

function invertTree(root) {
  helper(root);
  return root;
}

function helper(node) {
  if (!node) return;

  let temp = node.left;
  node.left = node.right;
  node.right = temp;

  helper(node.left);
  helper(node.right);
}

module.exports = invertTree;
