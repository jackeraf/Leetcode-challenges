// time O(min(N,M)) because the while loop will stop
//  when the pointer of the smaller list points to null.
// space O(1)

function mergeTwoLists(l1, l2) {
  let dummyHead = { next: null };
  let current = dummyHead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      current = current.next;
      l1 = l1.next;
    } else {
      current.next = l2;
      current = current.next;
      l2 = l2.next;
    }
  }
  current.next = l1 || l2;
  return dummyHead.next;
}

module.exports = mergeTwoLists;
