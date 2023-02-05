class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {

    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    if ( !this.head ) {
      this.head = new LinkedListNode(val);
    }
    else {
      const link = new LinkedListNode(val);
      link.next = this.head;
      this.head = link;
      }
    this.length += 1;
  }

  addToTail(val) {
    if( !this.head ) return this.addToHead(val);
    let current = this.head;
    while( current ) {
      if(!current.next) {
        current.next = new LinkedListNode(val);
        break;
      }
      current = current.next;
    }
    this.length += 1;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
