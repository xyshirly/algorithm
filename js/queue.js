function Queue() {
  this.head = this.tail = null;
  this.item = [];
}

Queue.prototype.enqueue = function (data) {
  this.item.push(data);
}

Queue.prototype.dequeue = function() {
  return this.item.shift();
}

Queue.prototype.clear = function() {
  this.head = this.tail = null;
  this.item = [];
}

Queue.prototype.print = function() {
  if (!this.item.length) return false;

  this.item.forEach(i => (console.log(i)));
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
console.log(queue.print())


