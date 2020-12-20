// 1. Create a stack class
// Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(data) {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

// display: displays the linked list
function display(list) {
  let currentNode = list.head;
  let output = "";

  if (!list.head) {
    return null;
  }
  while (currentNode.next !== null) {
    output += currentNode.value + " ";
    currentNode = currentNode.next;
  }
  output += currentNode.value;
  console.log(output);
}

const starTrek = new Stack();
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");

console.log(display(starTrek));
console.log(starTrek);
