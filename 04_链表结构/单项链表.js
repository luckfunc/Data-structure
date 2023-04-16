/*
   单向链表的特点
     只能从头部遍历到尾部 或者从尾部遍历到头部
     也就是说链表相连的过程是单向的
     实现原理是上一个链表中指向下一个节点的引用

   */

//封装链表类
function LinkedList() {
    //内部类
    function Node(data) {
        this.data = data;
        this.next = null;
    }

    //属性
    this.head = null;
    this.length = 0; //用于记录数组的长度
    //测试
    this.test = 0;
    //1.追加元素
    LinkedList.prototype.append = function (data) {
        //                1.通过data创建节点     抽取创建新的节点
        const newNode = new Node(data);

        //2.判断是否是第一个节点
        if (this.length == 0) {
            //2.1表示是第一个节点
            this.head = newNode;
        } else {
            //2.2不是第一个节点
            //current表示头部
            var current = this.head;
            //当节点next存在 证明不是最后一个节点
            while (current.next) {
                //找到最后一个节点
                current = current.next;
                // console.log('head', this.head);
            }
            //当节点next不存在 表示找到最后一个节点了
            current.next = newNode //在最后一个节点添加新的元素  最后节点的next指向新的节点
        }
        // 3. length + 1
        this.length += 1;
    }

    //toString 方法
    LinkedList.prototype.toString = function () {
        //1.定义变量
        var current = this.head;
        let listString = '';
        //2.循环获取节点
        while (current) {
            listString += current.data + ' ';
            current = current.next; //为什么这里面current有值？    想了很久 发现在 48行 把this.head赋值给了current 为什么这样操作就有值了呢    this.head 是一个引用类型 把this.head赋值给了current
            //指向同一个地址值    在append的时候 给current添加了next属性 代表this.head也有这个属性  所以current.next会有值
        }

        return listString

    }

    //insert 方法
    LinkedList.prototype.insert = function (position, data) {
        //1.对position进行越界判断
        if (position < 0 || position > this.length) return false;

        //2.创建节点
        const newNode = new Node(data);//在LinkedList 类里面声明了
        //3.插入数据  情况1  插入到position = 0 的一个位置
        if (position == 0) {
            //分两部分  把head指向newNode  把newNode.next 指向原来的第一个节点
            newNode.next = this.head;
            this.head = newNode;

        } else {
            //情况2 position > 0 || position < this.length
            let index = 0;
            let current = this.head;
            let previous = null; // 表示当前current前一个节点
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        //4. 长度+1
        this.length++;
        return true;
    }

    //4. get 方法
    LinkedList.prototype.get = function (position) {
        //1.越界判断
        if (position < 0 || position >= this.length) return null;
        //position 表示的就是索引

        let index = 0;
        let current = this.head;
        while (index++ < position) {

            current = current.next;
            // head ==> new 1
            // current ==> new 1
        }

        return current.data;


    }
    //5. indexOf方法
    LinkedList.prototype.indexOf = function (element) {

        let current = this.head;
        let position = 0;
        while (current) {

            /*
            错误示范

              current = current.next;
              position++;
             if (current.data == element) {
                return position
            }

            */
            if (current.data == element) {
                return position
            }
            current = current.next;
            position++;

        }

        // 找到最后还没有找到返回 -1
        return -1;

    }
    //update方法
    LinkedList.prototype.update = function (position, newDate) {
        let index = 0;
        let current = this.head;
        if (position < 0 || position >= this.length) return false;
        while (index++ < position) {

            current = current.next;

        }
        current.data = newDate;

        return true;

    }
    /*   LinkedList.prototype.update = function(position, data){
          if(position < 0 || position >= this.length) return false;
          const newNode = new Node(data);
          let current = this.head;
          let previous = null;
          let end = null;
          let index = 0;
          if(position == 0){
            newNode.next = this.head.next;
            this.head = newNode;
          }else{
            while(index ++ < position){
              previous = current;
              current = current.next;
              end = current.next;
            }
            previous.next = newNode;
            newNode.next = end;

          }

      } */
    LinkedList.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) return null;
        let current = this.head;
        if (position == 0) {
            console.log(this.head);
            this.head = current.next;

        } else {
            let index = 0;
            let previous = null;
            let end = null;
            while (index++ < position) {
                previous = current;
                current = current.next;
                end = current.next;
            }
            //current前一个指向current的next
            previous.next = end;

        }
        this.length -= 1;
        return current.data;
    }
    //删除元素实现
    LinkedList.prototype.remove = function (element) {
        let current = this.head;
        let previous = null;
        let temp = null;
        if (this.indexOf(element) == 0) {
            temp = this.head;
            this.head = this.head.next;
            this.length -= 1;
            return temp;
        } else {

            while (current) {
                if (current.data == element) {
                    temp = current;
                    previous.next = current.next;
                    break;
                }
                previous = current;
                current = current.next;
            }
        }
        this.length -= 1;
        return temp;
    }

    /*  //删除方法实现
     LinkedList.prototype.remove = function(data){
       //获取元素所在位置
       let position = this.indexOf(data);
       return  this.removeAt(position);

     } */
    //isEmpty方法
    LinkedList.prototype.isEmpty = function () {

        return this.length == 0;
    }
    //Size方法
    LinkedList.prototype.size = function () {

        return this.length;
    }
}

//测试代码
const list = new LinkedList();
//测试append方法
list.append('123');
list.append('234');
list.append('345');
list.append('456');
list.append('567');
list.append('678');
// console.log(list);
// console.log(list.get(2))
//测试insert 方法
// list.insert(1, 'xdd');
// list.insert(3, 'asd');
/* alert(list)
alert(list.get(1));
alert(list.get(3)) */
// alert(list.indexOf('1111'))
// alert(list)
// list.update(2, '薛军栋');
// alert(list)
// list.removeAt(0);
// alert(list)
/*  const delResult = list.removeAt(0);
console.log(list, delResult); */
// alert(list);
console.log('删除前的list', list.toString(), list.length);
list.remove('345');
list.remove('678');
console.log(list.remove('123'))
console.log('删除后的list', list.toString(), list.length);
console.log('isEmpty', list.isEmpty());
console.log('size', list.size());
// alert(list)
// console.log('删除后的list', list.toString());
// list.remove('345');
// console.log(list.toString());
// alert(list.update(0, 'aaa'))
