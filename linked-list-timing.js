const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');


const linkedList = new LinkedList();
const doublyLinkedList = new DoublyLinkedList();
// addToTail()
const start = Date.now();
for(let i = 0; i < 50000; i++) {
    linkedList.addToTail(i);
}
const end = Date.now();
console.log("Singly Linked List: " + (end - start) + "ms")

const start2 = Date.now();
for(let i = 0; i < 50000; i++) {
    doublyLinkedList.addToTail(i);
}
const end2 = Date.now();
console.log("doubly Linked List: " + (end2 - start2) + "ms")

// Time complexity: ~addToTail()
// Singly Linked List: 3780ms
//   REQUIRES SEQUENTIAL TRAVELSAL TO FIND TAIL: O(N) + O(1) = O(N)
// doubly Linked List: 7ms
//   ADDING NEW NODES WITH THE HELP OF ADDITIONAL POINTERS WILL PROVIDE A MUCH
//   MORE EFFICIENT TIME COMPLEXITY GIVEN THE TRADE OF SPACE FOR TIME: O(1)

/**********************************************************/
