// Time O(p+q)
// Space O(1)

function isSameTree(p, q) {
  let sameTree = true;

  function compareNodes(p, q) {
    if (!p && !q) return false;
    if (!p || !q) {
      sameTree = false;
      return;
    } else if (p.val !== q.val) {
      sameTree = false;
      return;
    }

    compareNodes(p.left, q.left);
    compareNodes(p.right, q.right);
  }
  compareNodes(p, q);
  return sameTree;
}

module.exports = isSameTree;
