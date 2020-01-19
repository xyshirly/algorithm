// 双向链表
function Node(data) {
  this.pre = null;
  this.next = null;
  this.data = data;
}

function DouLinkedList() {
  this.head = new Node(null); // 默认添加哨兵节点，有利于处理边界问题
}

DouLinkedList.prototype.insert = function(data) {
  if (!data) return false;

  const node = new Node(data);
  if (!this.head) {
    this.head = node; // 链表为空
    return false;
  }

  let p = this.head;
  while(p.next !== null) {
    p = p.next;
  }

  p.next = node;
  node.pre = p;
}
DouLinkedList.prototype.removeByData = function(data) {
  if (!data || !this.head) return false;

  let p = this.head;
  while(p !== null) {
    if (p.data === data) {
      if (!p.next) {
        p.pre.next = null;  // 处理最后一个节点
      } else {
        p.pre.next = p.next;
        p.next.pre = p.pre;
      }
      return true;
    }
    p = p.next;
  }
}
DouLinkedList.prototype.print = function() {
  if (!this.head) return false;

  let p = this.head;
  while (p !== null) {
    console.log(p.data);
    p = p.next;
  }
}

const douLinkedList = new DouLinkedList();
douLinkedList.insert(1);
douLinkedList.insert(2);
douLinkedList.insert(3);
douLinkedList.insert(4);
douLinkedList.removeByData(4);

douLinkedList.print();