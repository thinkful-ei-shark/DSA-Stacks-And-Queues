const Node = require("./Node");

// 6. Create a queue using Singly linked list
// Walk through the Queue class in the curriculum and understand it well. Then write a Queue class with its core functions (enqueue(), dequeue()) from scratch.

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  peek() {
    return this.first;
  }
}

const starTrekQ = new Queue();

starTrekQ.enqueue("Kirk");
starTrekQ.enqueue("Spock");
starTrekQ.enqueue("Uhura");
starTrekQ.enqueue("Sulu");
starTrekQ.enqueue("Checkov");

console.log(starTrekQ);

console.log(starTrekQ.peek());
