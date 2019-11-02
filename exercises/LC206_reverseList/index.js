// time O(n)
// space O(1)

const reverseList = head => {
  let current = head;
  let prev = null;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

module.exports = reverseList;
