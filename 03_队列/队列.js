 //封装队列类
 function Queue () {
  //属性
  this.items = [];
  //方法
  //在后端添加元素  一个元素或多个元素
  Queue.prototype.enqueue = (element) => {

    // this.items.splice(this.items.length, element.length-1, [...element])
    this.items.push(element)
  }

  // 删除第一个元素 dequeue
  Queue.prototype.dequeue = () => {
    this.items.shift()
  }

  //front  返回队列第一个元素
  Queue.prototype.front = () => {
    // if (this.items.length !== 0) return undefined;
    return this.items[0]
  }
  //isEmpty 判断元素是否为空
  Queue.prototype.isEmpty = () => {

    return this.items.length == 0
  }
  Queue.prototype.size = () => {
    return this.items.length
  }
  //把队列中的元素转换为字符串

  Queue.prototype.toString = () => {
    let str = ''
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + '  '
    }
    return str
  }
}

const queue = new Queue();
queue.enqueue('1');
queue.enqueue('2');
queue.enqueue('3');
queue.enqueue('4');
console.log(queue.toString())

queue.dequeue();
console.log(queue.toString())
queue.dequeue();
console.log(queue.toString())
console.log(queue.front())
console.log(queue.isEmpty())
