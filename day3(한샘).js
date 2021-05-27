// Day3 : Queues
// I. 1.General Queues
class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(item) {
    this.arr.push(item);
  }
  dequeue() {
    return this.arr.shift();
  }
  peek() {
    return !this.isEmpty() ? this.arr[0] : undefined;
  }
  isEmpty() {
    return this.arr.length == 0;
  }
  printQueue() {
    console.log(this.arr);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1
queue.printQueue();
console.log(queue.peek());

// I. 2.General Dequeues
class Deque {
  constructor() {
    this.front = this.back = undefined;
  }
  addFront(value) {
    if (!this.front) this.front = this.back = {value};
    else this.front = this.front.next = {value, prev: this.front};
  }
  removeFront() {
    let value = this.peekFront();
    if (this.front === this.back) this.front = this.back = undefined;
    else (this.front = this.front.prev).next = undefined;
    return value;
  }
  peekFront() {
    return this.front && this.front.value;
  }
  addBack(value) {
    if (!this.front) this.front = this.back = {value};
    else this.back = this.back.prev = {value, next: this.back};
  }
  removeBack() {
    let value = this.peekBack();
    if (this.front === this.back) this.front = this.back = undefined;
    else (this.back = this.back.next).back = undefined;
    return value;
  }
  peekBack() {
    return this.back && this.back.value;
  }
}

// demo
let deque = new Deque();
console.log(deque.peekFront()); // undefined
deque.addFront(1);
console.log(deque.peekBack()); // 1
deque.addFront(2);
console.log(deque.removeBack()); // 1
deque.addFront(3);
deque.addFront(4);
console.log(deque.peekBack()); // 2
deque.addBack(5);
deque.addBack(6);
console.log(deque.peekBack()); // 6
console.log(deque.removeFront()); // 4
console.log(deque.removeFront()); // 3
console.log(deque.removeFront()); // 2
console.log(deque.removeFront()); // 5
console.log(deque.removeFront()); // 6
console.log(deque.removeFront()); // undefined

// II. Circular Queues

class Oqueue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
    this.size = 6; //임의로 작게 설정
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  peek() {
    return this.storage[this.front + 1];
  }

  enqueue(element) {
    if (this.isFull()) return console.log('storage에 공간이 없습니다.');
    else {
      this.storage[(this.rear = (this.rear + 1) % this.size)] = element;
      return this.storage;
    }
  }

  dequeue() {
    if (this.isEmpty()) return console.log('storage에 데이터가 없습니다.');
    else {
      let curData = this.storage[(this.front = (this.front + 1) % this.size)];
      delete this.storage[this.front % this.size];
      return curData;
    }
  }
}

// console.log(Math.floor(Math.random() * 5));
function hotPotato() {
  const oQueue = new Oqueue();
  var arr = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
  arr.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  for (var i = oQueue.size - 2; i > -1; i--) {
    oQueue.enqueue(arr[i]);
  }
  for (var i = oQueue.front; i < oQueue.size - 2; i++) {
    console.log(`${oQueue.dequeue()} was eliminated from the Hot Potato game.`);
  }
  console.log(`The winner is: ${oQueue.peek()} `);
}
hotPotato();
