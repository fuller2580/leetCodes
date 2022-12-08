var middleNode = function(head) {
  let count = 0;
  let curCount = 0;
  let node = head;
  while (node.next) {
      count++;
      node = node.next;
  }
  count = Math.ceil(count/2);
  node = head;
  while (curCount < count) {
      node = node.next;
      curCount++;
  }
  return node;
};