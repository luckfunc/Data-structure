//封装双向链表
function DoublyLinkedList() {
  //属性
  this.head = null;
  this.tail = null;
  this.length = 0;
  //内部类  节点类
  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  //对常见的方法进行封装 append方法
  DoublyLinkedList.prototype.append = function (data) {
    const newNode = new Node(data);
    //1.判断是否是第一个节点
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else { //不是第一个节点
     //与单链表不同  通过tail找到最后一个节点 添加节点直接找到最后一个 this.tail.next = newNode;
     //在把newNode赋值给this.tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    
    //长度加1
    this.length += 1;

  }
  //将链表转换为字符串
    //2.1 toString()方法

  DoublyLinkedList.prototype.toString = function() {
    return this.backwardString();
  }
    //2.2 forwardString 方法
  DoublyLinkedList.prototype.forwardString = function() {
    let current = this.tail;
    let resultString = '';
    while(current){
      resultString += current.data + ' '; 
      current = current.prev;
    }
    return resultString;

  }
    //2.3 backwardString方法 向后转换为字符串的方法
  DoublyLinkedList.prototype.backwardString = function() {
    //1.定义变量
    let current = this.head; 
    let resultString = '';
    //获取current的data
    while(current){
      resultString += current.data + ' ';
      current = current.next;
    }
    return resultString;
  }
  //2.4 insert方法实现
  DoublyLinkedList.prototype.insert = function(position, data) {
    //1.边界判断
    if(position < 0 || position > this.length) return false;
    //2.根据data创建新的节点
    const newNode = new  Node(data);
    //3.根据position把元素插入到对应的位置
    // 双向链表的情况 1.初次插入元素的时候
    // 2.在有元素的时候在第0个位置插入元素的时候
    // 3.在有元素的时候在最后的位置插入元素的时候
    // 4.在有元素的时候 this.head 和 this.tail中间插入元素的时候
    if(this.length == 0){
      this.head = newNode;
      this.tail = newNode; 
    }else{
      if (position == 0) {
      //在如果已经有了节点后  要插入的节点的position为0
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      }else if(position == this.length){   //3.2 position == length
           newNode.prev =  this.tail;
           this.tail.next = newNode;
           this.tail = newNode;
      }else{
          let current = this.head;
          let index = 0;
          while(index ++ < position){
              current = current.next;
          }
          //修改指针
          newNode.prev = current.prev
          newNode.next = current;
          current.prev.next = newNode;
          current.prev = newNode;
      }
    }
    //length + 1
    this.length += 1;
    return true;
     
  }

  //get 方法
  DoublyLinkedList.prototype.get = function(position){
    //1.越界判断
    if (position < 0 || position >= this.length)  return null;
    let current ;
    let index ;
    //找到position对应的节点
    //从前往后遍历存在效率有时候会很低
    position < this.length / 2 ?  current = this.head : current = this.tail;
    position < this.length / 2 ?  index = 0 : index = this.length - 1;
    if (position < this.length / 2) {
      while(index ++ < position){
      current = current.next;
    }
    }else{
      while(index -- > position){
        current = current.prev;
      }
    }
    return current.data;
  }
  //indexOf方法
  DoublyLinkedList.prototype.indexOf = function (data) {
    let current = this.head;
    let index = 0;
    while(current){
      if(current.data == data){
        return index
      }
      current = current.next;
      index ++ ;

    }
    return -1;

  }
  //update方法
  DoublyLinkedList.prototype.update = function(position, newDate){
    //越界判断
    if(position < 0 || position >= this.length) return false;
    let current ;
    let index;
    position < this.length / 2 ?  current = this.head : current = this.tail;
    position < this.length / 2 ?  index = 0 : index = this.length - 1;
    if (position < this.length / 2) {
      while(index ++ < position){
      current = current.next;
    }
    }else {
      while(index -- < position){
        current = current.prev
      }
    }
    current.data = newDate;
    return true;
  }
  //removeAt方法
  DoublyLinkedList.prototype.removeAt = function(position) {
    //1.越界判断
    if(position < 0 || position > this.length) return null;
    //第一种情况 只有一个节点
    //为了返回删除的数据
    let current = this.head;
    if(this.length == 1){
      this.head = null;
      this.tail = null;
    }else{
    if (position == 0) {
      //如果节点个数不是1 删除第一个节点的情况
      this.head.next.prev = null;
      this.head = this.head.next;          
    }else if(position == this.length - 1){
      current = this.tail;
      //要删除的是最后的节点
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }else{
      //在中间的节点删除
      let index = 0;
      while(index ++ < position){
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
      // current.prev = null;
      // current.next = null; 不需要这两行 因为没有引用指向current即可 current可以有指向别人的属性
    }

  }

    //长度减1
    this.length -= 1;
    return current.data;
  }

  //remove方法
  DoublyLinkedList.prototype.remove = function(data) {
    //根据data获取下标值
      const index = this.indexOf(data);
    //根据下表值移除对应元素 
      return this.removeAt(index);
  }
  //isEmpty方法
  DoublyLinkedList.prototype.isEmpty = function(){
    return this.length == 0;
  }

  //size方法实现
  DoublyLinkedList.prototype.size = function() {
    return this.length;
  }

  //获取链表的第一个元素
  DoublyLinkedList.prototype.getHead = function(){
    return this.head.data;
  }
  //获取链表的最后一个元素
  DoublyLinkedList.prototype.getTail = function(){
    return this.tail.data;
  }
 
}
const list = new DoublyLinkedList();
// list.append('xdd');
// list.append('xdd111');
// console.log(list, 'list')
// console.log(list.toString());
// console.log(list.backwardString());
// console.log(list.forwardString());
list.append('1');
list.append('2');
list.append('3');
list.append('4');
list.append('5');
list.append('6');
list.append('7');
list.append('8');
list.insert(0, '0');
list.insert(3, '我是三')
console.log('this.length = ', list.length);
// console.log(list.get(list.length - 3));
console.log('indexOf方法', list.indexOf('1'))
console.log(list.toString(), '没有更新前的list');
console.log('removeAt方法', list.removeAt(3))
console.log('update方法', list.update(0, 'asd'))
console.log( 'remove方法', list.remove('8'));
console.log('size方法', list.size())
console.log('isEmtpy方法', list.isEmpty());
console.log('getHead方法', list.getHead());
console.log('getTail方法', list.getTail());
console.log(list.toString());