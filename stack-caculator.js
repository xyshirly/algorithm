function Stack() {
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

function isString(str) {
  return Object.prototype.toString.call(str) === '[object String]'
}

function isNumber(str) {
  return Object.prototype.toString.call(str) === '[object Number]'
}

function isOperator(charCode) {
  return charCode === '+' || charCode === '-' || charCode === '*' || charCode === '/';
}

function Caculator() {
  this.numStack = new Stack();
  this.operStack = new Stack();
}

Caculator.prototype.caculate = function(str) {
  if (!str) return false;
  if (!isString(str)) return false;

  let i = 0;
  const strArr = str.split('');
  while(strArr[i] !== '=') {
    if (typeof (+strArr[i]) === 'number') {
      this.numStack.push(+strArr[i]);
      i++;
    }

    if (isOperator(strArr[i])) {
      if (strArr[i] === '*' || strArr[i] === '/') {
        const n1 = this.numStack.pop();
        const n2 = strArr[i+1];
        this.numStack.push(n1*n2);
        i = i + 2;
      } else {
        this.operStack.push(strArr[i]);
        i++;
      }
    }
  }

  // 最后依次从两个栈中取出数据做运算
  for(let i = 0; i < this.operStack.head; i++) {
    const num1 = this.numStack.pop();
    const num2 = this.numStack.pop();

    if (this.operStack[i] === '+') {
      this.numStack.push(num1 + num2);
    } else if (this.operStack[i] === '-') {
      this.numStack.push(num2 - num1);
    }
  }

  return this.numStack.pop();
}

const caculator = new Caculator();
console.log(caculator.caculate('1+2*3+4='));