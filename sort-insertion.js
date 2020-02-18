// 插入排序
// 思路：在未排区间取一个数插入到已排区间中
// 插入排序为原地排序，最坏时间复杂度为O(n*n)
function sortInsertion(unsorted) {
  if (unsorted.length <= 1) return unsorted;

  for (let i = 1; i < unsorted.length; i++) {
    // 在未排区间取一个数，插入到已排区间中
    let key = unsorted[i];
    let j = i - 1;

    // 整个while循环的目的就是寻找key插入的位置
    while (j >= 0) {
      if (key < unsorted[j]) {
        // 所有比key大的元素都向后移动一位
        unsorted[j + 1] = unsorted[j];
      } else {
        break;
      }
      j--;
    }

    unsorted[j + 1] = key;
  }

  return unsorted;
}

const arr = [9, 3, 1, 5, 4, 2, 7, -1];
console.log(sortInsertion(arr))

