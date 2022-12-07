var mergeTwoLists = function(list1, list2) {
    let prev = null;
    let head = null;
    if((!list1 && !list2) || (list1 && !list2)) return list1;
    else if(!list1 && list2) return list2;
    else if(list1.val >= list2.val) {
        head = list2;
        list2 = list2.next
    } else {
        head = list1;
        list1 = list1.next;
    }
    prev = head;
    while (list1 || list2) {
        if(list1) {
            if(list2){
                if(list1.val < list2.val) {
                    prev.next = list1;
                    list1 = list1.next;
                } else {
                    prev.next = list2;
                    list2 = list2.next;
                }
            } else {
                prev.next = list1;
                list1 = list1.next;
            }
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }
    return head;
};