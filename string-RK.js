/**
 * 思路：
 * 1.定义hash函数
 * 2.首先计算模式串的hash值
 * 3.在主串中以模式串的长度计算hash值，如果中途找到了字符串，那么就不再计算字符串后面的hash值
 */
function hash(str) {
  if (!str) return false;

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str[i].charCodeAt();
  }

  return hash % 20;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function (data) {
  if (!data) return false;
  if (this.find(data)) return false;

  const node = new Node(data);
  if (!this.head) {
    this.head = node;
  } else {
    let p = this.head;
    while (p.next !== null) {
      p = p.next;
    }
    p.next = node;
  }
}

LinkedList.prototype.find = function (data) {
  if (!data) return false;

  let p = this.head;
  while (p !== null) {
    if (p.data === data) {
      return true;
    }
    p = p.next;
  }

  return false;
}

function HashTable() {
  this.arr = [];
}

HashTable.prototype.add = function (str) {
  if (!str) return false;

  let i = hash(str);
  if (!this.arr[i]) {
    this.arr[i] = new LinkedList();
    this.arr[i].add(str);
  } else {
    // 首先查找，如果已经存在，则不用保存
    if (!this.arr[i].find(str)) {
      this.arr[i].add(str);
    }
  }
}

HashTable.prototype.find = function(str) {
  if (!str) return false;

  const i = hash(str);
  if (!this.arr[i]) return false;
  return this.arr[i].find(str);
}

function rk(str, temp) {
  if (!str || !temp) return false;
  if (temp.length > str.length) return false;

  const hashTable = new HashTable();
  // 对主串逐一求hash值，同时保存
  for (let i = 0; i < str.length; i++) {
    let s = str.substr(i, temp.length);
    hashTable.add(s);
  }

  return hashTable.find(temp);
}

let str = 'These days there is so much tempting technology to look at';
let temp = 'days';
console.log(rk(str, temp));