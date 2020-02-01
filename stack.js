// 栈
export function Stack() {
  this.head = 0;
  this.container = [];
}

Stack.prototype.push = function(data) {
  this.container[this.head] = data;
  this.head++;
}

Stack.prototype.pop = function() {
  const re = this.container[this.head];
  this.head--;
  return re;
}

Stack.prototype.top = function() {
  if (!this.head) return null;
  return this.container[this.head];
}

Stack.prototype.print = function() {
  for(let i = 0; i < this.head; i++) {
    console.log(this.container[i]);
  }
}

/* const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print(); */
