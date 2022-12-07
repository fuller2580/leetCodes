var reverseList = function(head) {
  let allValues = [];
  let node = head;
  while (node !== null) {
      allValues.push(node.val)
      node = node.next;
  }
  allValues.reverse();
  let newHead = null;
  let prevNode = null;
  allValues.forEach(val => {
      let newNode = new ListNode(val);
      if(prevNode) {
          prevNode.next = newNode;
      } else {
          newHead = newNode;
      }
      prevNode = newNode;
  })
  return newHead;

};