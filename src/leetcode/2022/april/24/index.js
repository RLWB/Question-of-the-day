// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*
  // 此解答不符合题意
  let addTwoNumbers = function (l1, l2) {
    const ll1 = Number(Array.from(l1).reverse().join(''));
    const ll2 = Number(Array.from(l2).reverse().join(''));
    return String(ll1 + ll2)
      .split('')
      .reverse()
      .map((item) => Number(item));
  };

  let l1 = [2, 4, 3];
  let l2 = [5, 6, 4];
  console.log(addTwoNumbers(l1, l2));
 */
