
//定义一个链表
    function LinkedList() {

      //元素子类
      function Node(data) {
          this.data = data;
          this.next = null;

      }
      this.head = null;
      this.length = 0;
      //append方法
      LinkedList.prototype.append = function(data) {
              const node = new Node(data);
              if(this.length == 0) {//代表第一次进入 链表里面无元素
                this.head = node;
              }else{
                //第一次以后进入
                var current = this.head;
                //逻辑 如果为空代表是最后一个节点 
                while(current.next){
                  //如果current存在 代表不是最后一个元素
                  //继续执行程序
                  current = current.next;

                }

                //跳出循环证明是找到了最后一个节点
                current.next = node;
              }
              //增加新的节点length + 1
              this.length += 1;

      }

      
      //toString方法
      LinkedList.prototype.toString = function() {
          var current = this.head;
          let resultString = '';
          //当元素存在  this.head存在 也就是说使用了append放大 this.head有值 也就是说current有值
          while(current){
            resultString += current.data + '  ';
            //切换current指向 //第二次添加的时候current是最后一个元素 current.next 有值 切换指针指向
            current = current.next;
          }

          return resultString;

      }


    }

    const list = new LinkedList();
    list.append('123');
    list.append('23');
    list.append('3');
    alert(list)