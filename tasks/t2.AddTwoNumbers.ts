/* 2. Add Two Numbers (Medium)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 
Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros. */

/**Definition for singly-linked list. */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  function getList(
    l1: ListNode | null,
    l2: ListNode | null,
    pv: number = 0
  ): ListNode | null {
    const v: number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + pv;
    const nv: number = v % 10;
    const npv: number = v > 9 ? 1 : 0;
    const ck1: boolean = l1 ? Boolean(l1.next) : false;
    const ck2: boolean = l2 ? Boolean(l2.next) : false;
    if (!ck1 && !ck2) {
        if(npv) {
            return new ListNode(nv, new ListNode(npv, null));
        } else {
            return new ListNode(nv, null);
        }
    } else {
      return new ListNode(
        nv,
        getList(l1 ? l1.next : null, l2 ? l2.next : null, npv)
      );
    }
  }
  return getList(l1, l2);
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
console.log("[2,4,3], [5,6,4] === [7,0,8]", addTwoNumbers(l1, l2));

l1 = new ListNode(0, null);
l2 = new ListNode(0, null);
console.log("[0], [0] === [0]", addTwoNumbers(l1, l2));

l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))))
    )
  )
);
l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))));
console.log(
  "[9,9,9,9,9,9,9], [9,9,9,9] === [8,9,9,9,0,0,0,1]",
  addTwoNumbers(l1, l2)
);
