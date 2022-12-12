//设计一个函数
//--> 1.将字符串转换成比较大的数字 ：hashcode
//--> 2.将大的数字hashcode压缩到数组范围(大小)内
function hashFun(str, size) {
  //1.定义hashcode变量
  let hasCode = 0;
  
  //2.霍纳法则，来计算hashCode的值
  //cats -> Unicode编码
  for (let index = 0; index < str.length; index++) {
    hasCode = 37 * hasCode + str.charCodeAt(index);
  }
  //3.取余操作
  let index = hasCode % size;

  return index;

}
/* 
 const str = 'abc';
 hasCode = 37 * hasCode + str.charCodeAt(index);
    1.
    37 * 0 + 97 
    2.
    37 * (37 * 0 + 97) + 98
    3.
    37 * (37 * (37 * 0 + 97) + 98)  + 99

    ==>
    37 * (37 * 97 + 98) + 99
    97 * 37 * 37 + 37 * 98 + 99


*/


//测试hashFun函数
console.log(hashFun('xdd', 7).toString());
console.log(hashFun('asd', 7).toString());
console.log(hashFun('aaa', 7).toString());
console.log(hashFun('zxc', 7).toString());