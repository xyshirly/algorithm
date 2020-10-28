// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
function  Stack() {
  this.head = 0;
  this.container = [];
}
Stack.prototype.push = function(el) {
  if (!el) return false;
  this.container[this.head] = el;
  this.head++;
}

Stack.prototype.pop = function() {
  if (!this.head) return false;
  const res = this.container[this.head];
  this.head--;
  return res;
}

Stack.prototype.top = function() {
  return this.container[this.head - 1];
}

const pair = {
  ')': '(',
  '}': '{',
  ']': '['
}

/**
* @param {string} s
* @return {boolean}
*/
var isValid = function(s) {
  if (!s) return true;

  const stack = new Stack();
  const stackR = new Stack();
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
      let el = arr[i];
      if (el === '(' || el === '{' || el === '[') {
          stack.push(el);
      } else {
          if (pair[el] === stack.top()) {
              stack.pop();
          } else {
              stackR.push(el);
          }
      }
  }

  return !stack.head && !stackR.head;
};