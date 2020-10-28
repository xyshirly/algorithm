/**
 * 单模式-暴力匹配算法
 * 思路：利用模式串和主串逐一比较，主串中需要一个指针移动标记
 */

 function bf(str, temp) {
  if (!str || !temp) return false;

  for (let i = 0; i < str.length; i++) {
    let k = i;  // 用于在主串中移动
    for (let j = 0; j < temp.length; j++) {
      if (str[k] === temp[j]) {
        k++;
        if ((k - i + 1) === temp.length) {
          return true;
        }
      } else {
        break;
      }
    }
  }   

  return false;
 }

 const str = 'These days there is so much tempting technology to look at: smartphones, tablets, computer games and TV screens. Much of our entertainment and education comes from using them';
 const temp = 'smartphones';
 console.log(bf(str, temp));