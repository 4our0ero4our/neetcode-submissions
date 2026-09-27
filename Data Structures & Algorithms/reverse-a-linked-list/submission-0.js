/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    if (!head) return null;
    let arr = [];

    let curr = head;
    while (curr) {
      arr.push(curr);
      curr = curr.next;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }

    for (let i = 0; i < arr.length - 1; i++) {
      arr[i].next = arr[i + 1];
    }

    arr.at(-1).next = null;

    return arr[0];
  }
}
