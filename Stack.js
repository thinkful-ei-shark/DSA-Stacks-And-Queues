// 1. Create a stack class
// Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

const Node = require("./Node");

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new Node(data, null);
      return this.top;
    }
    const node = new Node(data, this.top);
    this.top = node;
  }

  pop(data) {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const starTrek = new Stack();
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");

console.log(starTrek);
