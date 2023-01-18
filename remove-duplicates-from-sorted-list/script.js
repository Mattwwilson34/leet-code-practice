/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head
  let cNode = head
  let nNode = head.next

  while (cNode.next !== null) {
    while (cNode.val === nNode.val) {
      if (cNode.val === nNode.val && nNode.next === null) {
        cNode.next = null;
        return head;
      }
      nNode.val = nNode.next.val;
      nNode.next = nNode.next.next
    }
    cNode = cNode.next
    nNode = nNode.next
  }
  return head;
};


