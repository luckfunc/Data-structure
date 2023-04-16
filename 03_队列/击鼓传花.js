function Queue() {
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

function passGame(nameList, num) {
    //1.创建队列结构
    const queue = new Queue();
    //2.将所有人加入到队列中
    for (let index = 0; index < nameList.length; index++) {
        queue.enqueue(nameList[index]);
        //1.开始的时候不是num的时候 加入到末尾
        //2.是num的时候将num从队列删除掉
    }
    // console.log(queue);
    while (queue.size() > 1) {

        for (let index = 0; index < num - 1; index++) {
            //3.1 num数字之前的人重新放到队列的末尾
            queue.enqueue(queue.dequeue());
            // 1 2 3  4          1
        }
        //num对应这个人直接淘汰
        queue.dequeue();  //这个删除是排序后删除对应的num
    }
    console.log(queue);
    const endName = queue.front();
    return endName + ` ${nameList.indexOf(endName)}`
}

console.log(passGame([1, 2], 1)); //     c  2 3 1 31   1 3
