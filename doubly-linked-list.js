class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const doublyLink = new DoublyLinkedListNode(val);
    if( !this.head ) {
      this.head = doublyLink;
    }
    else {
      if( !this.tail ) {
        this.tail = this.head;
      }
      doublyLink.next = this.head;
      this.head.prev = doublyLink;
      this.head = doublyLink;
    }
    this.length += 1;
  }

  addToTail(val) {
    // Your code here
    const doublyLink = new DoublyLinkedListNode(val);
    if( !this.head ) return this.addToHead(val);
    else if( !this.tail ) {
      this.head.next = doublyLink;
      doublyLink.prev = this.head;
      this.tail = doublyLink;
    }
    else {
      this.tail.next = doublyLink;
      doublyLink.prev = this.tail;
      this.tail = doublyLink;
    }

    this.length += 1;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
