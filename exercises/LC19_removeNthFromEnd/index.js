// time O(n)
// space O(1)

function removeNthFromEnd(head, n) {
  // create a dummyhead for empty linked list or with 1 node to avoid multiple if statements
  let dummyHead = { next: head };
  let slow = dummyHead;
  let fast = dummyHead;

  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
}

module.exports = removeNthFromEnd;
