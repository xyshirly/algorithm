// 循环队列
function CircleQueue(size) {
  this.head = this.tail = 0;
  this.container = [];
  this.MAXSIZE = size + 1;  // 需要预留一个空位
}

CircleQueue.prototype.enQueue = function (data) {
  if (this.isFull()) return false;

  this.container[this.tail] = data;
  if (this.isFull()) return true;
  this.tail = (this.tail + 1)%this.MAXSIZE;
}

CircleQueue.prototype.deQueue = function() {
  if (this.head === this.tail) return null;
  const re = this.container[this.head];
  this.head = (this.head + 1)%this.MAXSIZE;
  return re;
}

CircleQueue.prototype.front = function() {
  if (this.head === this.tail) return null;
  return this.container[this.head];
}

CircleQueue.prototype.tail = function() {
  if (this.isEmpty()) return false;
  return this.container[this.tail];
}

CircleQueue.prototype.isEmpty = function() {
  return this.head === this.tail;
}

CircleQueue.prototype.isFull = function() {
  return (this.tail + 1)%this.MAXSIZE === this.head;
}

CircleQueue.prototype.print = function() {
  if (!this.container.length) return false;

  for(let i = this.head; i < this.tail; i++) {
    console.log(this.container[i]);
  }
}

const circleQueue = new CircleQueue(10);
circleQueue.enQueue(1);
circleQueue.enQueue(2);
circleQueue.enQueue(3);
circleQueue.enQueue(4);
circleQueue.deQueue();
circleQueue.deQueue();
circleQueue.print();
