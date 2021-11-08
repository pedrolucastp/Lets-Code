//LIFO ("the LastIn is the FirstOut")
class Stack {
  constructor() {
    this.length = 0;
    this.lastIn = null;
  }
  //push
  stacker(element) {
    this.length += 1;
    this.lastIn = {
      value: element,
      next: this.lastIn,
    };
  }
  //pop
  unstacker() {
    if (!this.lastIn) {
      return;
    }
    this.length -= 1;
    this.lastIn = this.lastIn.next;
  }
  //print value array
  printStack() {
    const elementsValue = [];
    let next = this.lastIn;
    while (next) {
      elementsValue.push(next.value);
      next = next.next;
    }
    return elementsValue;
  }
}

class Dish {
    constructor(color) {
        this.color = color
    }
}

const dishes = new Stack();
console.log(dishes);

dishes.stacker(new Dish ("white"));
dishes.stacker(new Dish ("red"));
dishes.stacker(new Dish ("blue"));
dishes.stacker(new Dish ("black"));

console.log(dishes.lastIn);
console.log(dishes.lastIn.next);
console.log(dishes.lastIn.next.next.next.next);

console.log(dishes.printStack());
dishes.unstacker();
dishes.unstacker();
dishes.unstacker();
dishes.unstacker();
dishes.unstacker();
console.log(dishes.printStack());
