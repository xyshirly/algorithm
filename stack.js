function Stack() {
  if (!(this instanceof Stack)) throw Error('erro');
  this.items = [];
  this.length = 0;
}

Stack.prototype.push = function(data) {
  if (!data) return false;
  this.length++;
  this.items.push(data);
}

Stack.prototype.pop = function() {
  if (this.length > 0) this.length--;
  return this.items.pop();
}

Stack.prototype.print = function() {
  if (!this.items.length) return false;
  this.items.forEach(item => (console.log(item)));
}

export default Stack;