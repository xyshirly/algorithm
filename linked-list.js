// 单向链表
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;
}

LinkedList.prototype.getLen = function () {
  let len = 0, p = this.head;

  if (this.isEmpty()) return 0;

  while (p !== null) {
      len++;
      p = p.next;
  }
  return len;
};

LinkedList.prototype.isEmpty = function () {
  return this.head === null;
};

LinkedList.prototype.update = function (oldVal, newVal) {
  if (this.isEmpty()) return false;

  let p = this.head;
  while (p !== null) {
      if (p.data === oldVal) {
          p.data = newVal;
      }
      p = p.next;
  }
};

LinkedList.prototype.add = function (data) {
  if (!data) return false;

  const node = new Node(data);
  if (this.isEmpty()) {
      this.head = node;
      return false;
  }

  let p = this.head;
  while (p.next !== null) {
      p = p.next;
  }
  p.next = node;
}

LinkedList.prototype.insert = function (pos, data) {
  let i = 1;
  let p = this.head;
  const node = new Node(data);

  if (pos <= 0) return false; // 首先判断输入参数是否正确

  if (this.isEmpty()) {
      this.head = node; // 如果链表为空，直接添加节点
  } else if (pos === 1) {
      node.next = this.head;  // 在链表头部加入
      this.head = node;
  } else if (pos > this.getLen()) {
      this.add(data); // 如果pos大于链表的实际长度，则直接在末尾添加
  } else {
      while (p !== null) {
          if (i + 1 === pos) {
              node.next = p.next;
              p.next = node;
              break;
          }
          p = p.next;
          i++;
      }
  }
};

LinkedList.prototype.removeByData = function (data) {
  if (!data || this.isEmpty()) return false;
  if (this.head.next === null && this.head.data === data) {
      this.head = null;
      return false;
  }   // 只有一个节点且相等
  if (this.head.next === null && this.head.data !== data) return false;

  let p = this.head, count = 1, prev = null;
  while (p !== null) {
      if (p.data === data) {
          if (count === 1) {
              this.head = p.next;    // 在链表头部删除
          } else {
              prev.next = p.next;
              break;
          }
      }
      prev = p;   // 技巧：设定一个前驱指针，步数比p少一步
      p = p.next;
      count++;
  }
};

LinkedList.prototype.print = function () {
  if (!this.head) return false;

  let p = this.head;
  while (p !== null) {
      console.log(p.data);
      p = p.next;
  }
}

LinkedList.prototype.toString = function () {
  if (!this.head) return '';

  let p = this.head;
  let str = '';
  while (p !== null) {
      str += p.data;
      p = p.next;
  }

  return str;
}

// 判断是否为回文，空间复杂度o(1)内实现
LinkedList.prototype.isPalindrome = function () {
  if (!this.head) return false; // 链表为空
  if (!this.head.next) return false;  // 只有一个节点
  return this.toString() === this.reverse().toString();
}

LinkedList.prototype.shift = function (data) {
  if (!data) return false;

  let p = this.head;
  const node = new Node(data);
  node.next = p;
  this.head = node;
}

// 思路：把第一个元素后面的元素依次添加到链表头部
LinkedList.prototype.reverse = function () {
  if (!this.head || !this.head.next) return false;

  let p = this.head;
  while (p.next !== null) {
      const data = p.next.data;
      p.next = p.next.next;
      this.shift(data);
  }
  return this.head;
}

// 利用快慢指针
LinkedList.prototype.isCircle = function () {
  if (!this.isEmpty()) return false;

  let slow = this.head, fast = this.head;
  while (slow < fast) {
      if (slow.next.next === null) {
          return false;
      } else {
          slow = slow.next;
          fast = fast.next.next;
      }
  }

  return slow === fast;
}

/** 合并两个有序链表 */
LinkedList.prototype.merge = function (linkedList) {
  
}


/** 获取倒数第n个元素 */
LinkedList.prototype.getNodeFromEndByPos = function (n) {
  if (!this.head || n <= 0) return '';
  if (n > this.getLen()) return '';
  
  let p = this.head, count = 1;
  let len = this.getLen();
  while (count < len - n + 1) {
    p = p.next;
    count++;
  }
  return p.data;
}

LinkedList.removeByPos = function (pos) {
  if (pos <= 0 || this.isEmpty()) return false;

  let p = this.head, count = 1;
  while (p !== null) {
      if (count === pos) {
          this.removeByData(p.data);
      }
      p = p.next;
      count++;
  }
};

LinkedList.prototype.removeFromEnd = function (n) { 
  if (!n || n <= 0) return false;
  if (this.getLen() < n) return false;  // 链表为空

  let count = 1, 
      p = this.head, 
      pre = null,
      len = this.getLen();
  
  // 如果n等于链表的长度，则特殊处理
  if (n === this.getLen()) {
    this.head = p.next;
    return false;
  }
  while (count < len - n + 1) {
    pre = p;
    p = p.next;
    count++;
  }
  pre.next = p.next;
}

LinkedList.prototype.getCenterNode = function () { 
  if (!this.head) return '';

  let len = this.getLen();
  const center = len%2 === 0 ? len/2 : (len + 1)/2;
  
  let p = this.head, count = 1;
  while(count < center) {
    p = p.next;
    count++;
  }
  return p.data;
}

const linkedList1 = new LinkedList();
linkedList1.add(1);
linkedList1.add(2);
linkedList1.add(3);
linkedList1.add(4);
linkedList1.add(5);
linkedList1.add(6);
const list = linkedList1.reverse()
console.log(linkedList1.print());