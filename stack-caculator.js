// 计算 1+2=3
import Stack from 'stack'

function Caculator() {
  this._isOperator = function(code) {
    return (code === '+' || code === '-' || code === '*' || code === '/') ? true : false;
  }
}


Caculator.prototype.caculate = function(str) {
  if (!str) return false;
  var arr = str.split('');  // 字符串转数组
  var stackNum = new Stack(); // 保存数字
  var stackOper = new Stack();  // 保存运算符

  let p = 0;
  while(p < arr.length && arr[p] !== '=') {
    if (typeof arr[p] === 'number') {
      // 每次添加一个数字，需要检查符号栈顶部的元素
      let el = stackOper.pop();
      if (el === '*' || el === '/') {
        // 
      }
    }
    if (this._isOperator(arr[p])) {
      stackOper.push(arr[p]);
    }

    p++;
  }
}