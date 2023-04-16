//封装优先级队列
function PriorityQueue() {
    this.items = [];

    //内部类
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    //实现插入方法
    PriorityQueue.prototype.enqueue = function (element, priority) {
        //1.创建QueueElement对象
        const queueElement = new QueueElement(element, priority);
        //2.判断队列是否为空
        if (this.items.length === 0) {
            this.items.push(queueElement);
        } else {
            let added = false;
            for (let i = 0; i < this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement);
                    console.log(this.items);
                    added = true;
                    break;
                } else {
                    this.items.push(queueElement)
                }
            }
        }
    }

    // 删除第一个元素 dequeue
    PriorityQueue.prototype.dequeue = () => {
        this.items.shift()
    }

    //front  返回队列第一个元素
    PriorityQueue.prototype.front = () => {
        // if (this.items.length !== 0) return undefined;
        return this.items[0]
    }
    //isEmpty 判断元素是否为空
    PriorityQueue.prototype.isEmpty = () => {

        return this.items.length == 0
    }
    PriorityQueue.prototype.size = () => {
        return this.items.length
    }
    //把队列中的元素转换为字符串

    PriorityQueue.prototype.toString = () => {
        let str = ''
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + '  '
        }
        return str
    }

};
const pq = new PriorityQueue();
pq.enqueue('12', 100);
pq.enqueue('123', 1123);
pq.enqueue('1234', 22);
pq.enqueue('12345', 31);
console.log(pq)
