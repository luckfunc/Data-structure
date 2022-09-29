//封装栈类
function Stack() {
  //栈中的属性
  this.items = [];

  //1.将元素压入到栈
  Stack.prototype.push = function (element) {
    this.items.push(element);
  }
  //2.从栈中取出元素
  Stack.prototype.pop = function () {
    return this.items.pop();
  }
  //3.查看栈顶元素 不对栈进行修改
  Stack.prototype.peek = function () {

    return this.items[this.items.length - 1]
  }
  //4.判断栈是否为空
  Stack.prototype.isEmpty = function () {
    /* if (this.items.length !== 0) {
      return true;
    } else {
      return false;
    } */
    return this.items.length == 0;
  }
  //5.返回元素的个数
  Stack.prototype.size = function () {
    return this.items.length;
  }
  //toString把栈的内容以字符串形式返回
  Stack.prototype.toString = function () {
    // 1 2 3 4
    let resultString = '';
    for (let index = 0; index < this.items.length; index++) {
      resultString += this.items[index] + ' ';
    }
    return resultString;
  }



  //栈的相关操作
  /*
  常见操作 push 压栈
          pop 出栈操作
          peek查看栈顶元素
          isEmpty 如果栈里面没有任何元素返回true  否则返回false
          size()返回栈里面的元素个数
          toString()将栈的内容以字符串的形式返回

  */
}
//十进制转换为二进制
  function dec2bin (element) {
      //1.定义栈对象
    const stack = new Stack();
      //循环
    while (element > 0){
        //2.获取余数 并且放入到栈中
        stack.push(element % 2);
      //获取整除结果作为下次运算的数字
      element = Math.floor(element / 2);

    }

    // 3.从栈中取出0和1
    let str = '';
    while ( !stack.isEmpty()){
      str += stack.peek() + ' ';
    }
    console.log(str);
  }
  dec2bin(100);