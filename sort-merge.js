// 归并排序
// 思路：分别处理q左侧和右侧的数据，最后合并左右两侧的元素
function mergeSort(arr) {
  // 任意数组分解到只有一个元素时返回
  if (arr.length <= 1) return arr;

  // 找到数组的中间位置
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

// left代表左侧数组，right代表右侧数组
function merge(left, right) {
  let temp = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      temp.push(left[i]);
      i++;
    } else {
      temp.push(right[j]);
      j++;
    }
  }

  // 最后把多余的元素直接追加在temp的末尾
  return temp.concat(left.slice(i).concat(right.slice(j)));
}

const arr = [9, 3, 1, 4, 2, 7, -1];
console.log(mergeSort(arr));