var detectCycle = function(head) {
  let nodes = [];
  let node = head;
  while(node && !nodes.includes(node)) {
      nodes.push(node);
      node = node.next;
  }

  return node;

};