function CircleQueue(size) {
  this.head = this.tail = 0;
  this.container = [];
  this.MAXSIZE = size;
}

CircleQueue.prototype.enQueue = function (data) {
  if (!data) return true;

  this.container[this.tail] = data;
  if (this.isFull()) return true;
  this.tail = (this.tail + 1)%this.MAXSIZE;
}

CircleQueue.prototype.deQueue = function() {
  
}

CircleQueue.prototype.front = function() {

}

CircleQueue.prototype.tail = function() {}

CircleQueue.prototype.isEmpty = function() {}

CircleQueue.prototype.isFull = function() {
  return (this.tail + 1)%this.MAXSIZE === this.head;
}

CircleQueue.prototype.print = function() {
  if (!this.container.length) return false;

  this.container.forEach(item => {
    console.log(item)
  })
}

const circleQueue = new CircleQueue(3);
circleQueue.enQueue(1);
circleQueue.enQueue(2);
circleQueue.enQueue(3);
circleQueue.enQueue(4);

circleQueue.print();
