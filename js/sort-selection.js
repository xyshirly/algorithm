// 选择排序
// 思路：从未排区间找到一个最小或者最大值，放在已排区间的末尾
function sortSelection(arr) {
  if (arr.length <= 1) return arr;

  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let j = i, min = arr[j], minIndex = j;

    // 从未排区间中找到最小值和其位置
    while (j < len) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
      j++;
    }

    // 把最小值放在已排区间的末尾
    let temp = arr[i];
    arr[i] = min;
    arr[minIndex] = temp;
  }

  return arr;
}

const arr = [9, 3, 1, 4, 2, 7];
console.log(sortSelection(arr))