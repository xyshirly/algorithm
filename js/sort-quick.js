// 快速排序

// 方法一：数组取中法
// 问题：如果选取的中间数太小或者太大，容易导致分组时不均衡，从而导致递归时内存溢出问题
function quickSort(arr) {
  if(arr.length <= 1) return arr;

  const pivotIndex = Math.floor(arr.length/2);
  // pivot未分解值
  const pivot = arr.splice(pivotIndex,1)[0];
  // 非原地分区
  let left = [];
  let right = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}


// 方法二
function quickSort2(arr, p, r) {
  if (p >= r) return false;

  // 寻找分区点
  const q = partition(arr, p, r);
  // 左区间递归
  quickSort2(arr, p, q - 1);
  // 右区间递归
  quickSort2(arr, q + 1, r);

  return arr;
}

// 交换两个数的位置
function swap(arr, lIndex, rIndex) {
  let temp = arr[lIndex];
  arr[lIndex] = arr[rIndex];
  arr[rIndex] = temp;
}

// 采用原地分区法
function partition(A, p, r) {
  let pivot = A[r];
  // i始终指向第一个大于pivot的元素
  let i = p;

  for (let j = p; j < r; j++) {
    if (A[j] < pivot) {
      // 交换两个值
      swap(A, i, j);
      i++;
    }
  }

  // 最后交换pivot与A[i]
  swap(A, i, r);

  return i;
}


// 方法三
// 思路：直接选中间的值作为分区，同时遍历分区点左右两边的元素，然后通过交换实现左右分区
function quickSort3(arr, p, r) {
  if (arr.length <= 1) return arr;

  const q = partition3(arr, p, r);
  
  if (p < q - 1) {
    quickSort3(arr, p, q - 1);
  }
  if (q < r) {
    quickSort3(arr, q, r);
  }
  
  return arr;
}

function partition3(arr, p, r) {
  let pivot = arr[Math.floor((p + r) / 2)];

  let i = p, j = r;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    // 当i和j滑动停止的时候交换两个数的位置
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  return i;
}

const arr = [9, -1, 3, 1, 4, 2, 7];
console.log(quickSort3(arr, 0, arr.length - 1));
