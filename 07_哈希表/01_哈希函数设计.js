//设计一个函数
//--> 1.将字符串转换成比较大的数字 ：hashcode
//--> 2.将大的数字hashcode压缩到数组范围(大小)内
function hashFun(str, size) {
  //1.定义hashcode变量
  let hasCode = 0;
  
  //2.霍纳法则，来计算hashCode的值
  //cats -> Unicode编码
  for (let index = 0; index < str.length; index++) {
    hasCode = 37 * hasCode + str.codeCharAt(index);
  }

}