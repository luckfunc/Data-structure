 //封装哈希表的类
  function HashTable() {
    //属性
      this.storage = [];
      this.count = 0; //用来当前哈希表里面的属性多少
      // 装载因子 > 0.75 对数组扩容  loadFactor --> 0.25 减少数组的长度 
      this.limit = 7;//用来记录数组的长度
    //方法
    HashTable.prototype.hashFun = function (str, size) {
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
     //插入和修改操作
     /* 
      //1.根据Key获取索引值  目的：将数据插入到对应得位置
      //2.根据索引值取出bucket
      // 1）判断桶是否存在 如果不存在，创建这个桶，并且放置在该索引得位置
      //3.判断是否是新增还是修改原来得值 
        //·如果已经有值就修改
        //·如果没有值就添加操作
      //4.新增操作
       */
     HashTable.prototype.put = function(key, value ) {
      //1.根据key获取index
        let index = this.hashFun(key, this.limit);
      //2.根据index 取出对应得bucket
      let bucket = this.storage[index];
      //3.如果桶为空 创建桶
      if(bucket == null){
        bucket = [];
        this.storage[index] = bucket;
      //4.判断是否是修改数据
      for (let index = 0; index < bucket.length; index++) {
            let tuple = bucket[index];
            if (tuple[0] == key) {
              tuple[1] = value;
              return;
            }
      }
      //新增数据
      bucket.push([key, value]); 
      this.count += 1;
      }
     }
     console.log(222);
  }