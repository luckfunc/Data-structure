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
      }

      //4.判断是否是修改数据
      for (let index = 0; index < bucket.length; index++) {
            let tuple = bucket[index];
            if (tuple[0] == key) {
              tuple[1] = value;
              return;
            }
      }
      //新增数据 走到这里说明是新增操作 创建一个数组 然后push到桶里
      let temp = [key, value];
      bucket.push(temp); 
      this.count += 1;
     }
     //获取操作
     HashTable.prototype.get = function(key){
        //1.根据key获取index
        let index = this.hashFun(key, this.limit);
        // console.log(index);
        let bucket = this.storage[index];
        //判断这个key对应的桶是否存在
        if(!bucket) return null; //桶不存在 直接return 
        for (let index = 0; index < bucket.length; index++) {
          //走到这里说明key对应的桶存在  查找桶里面的元组
          let tuple = bucket[index];
          if (tuple[0] == key) {
            // console.log('tuple', tuple[1])
            //桶里面存在这个元素 返回null// 可能元素对应的index一样 桶是一样的 但是桶里面可能没用对应的key
            return tuple[1];
          }          
        }
        //在桶里面查找 没用找到这个key 返回nu

        return null;
     }
     //删除操作
     HashTable.prototype.remove = function(key){ 
      let index = this.hashFun(key, this.limit);
      let bucket = this.storage[index];
      if (!bucket) return null;
      for (let index = 0; index < bucket.length; index++) {
        let tuple = bucket[index];
        if (tuple[0] == key) {
        console.log('bucket[index] ',bucket[index] )
          bucket.splice(index, 1);
        /*   delete bucket[index];
          bucket.length -= 1; */
        /*   
        delete bucket[index];
          bucket.length -= 1;
            为什么delete bucket[index]会报错 delete删除元素的时候 数组长度没有减去1
             所以会再次进入循环 而这个桶的bucket[index] = undefined; undefined[0]会报错
          */
          this.count --;
          return  tuple[1];
        }
        
      }
      //遍历完数据依然没有找到 返回null
      return null;
     }
     // 其他方法
     //判断hash表是否为空
     HashTable.prototype.isEmpty = function() {

      return this.count == 0;
     }

     //获取hash表中元素个数
     HashTable.prototype.size = function() {

      return this.count;
     }
  }
  const hasObj = new HashTable();
  hasObj.put('xdd', {
    name: 'xdd',
    age: 20,
    address: '西安'
  })
//测试hash表方法
  hasObj.put('zt', {
    name: 'zt',
    age: 23,
    gender: '女',
    address: '西安'
  });
  console.log(hasObj.get('zt'), 'get方法');
  console.log(hasObj.get('xdd'), 'get方法');
  hasObj.put('xdd', {
    name: 'roll',
    address: 'yeahmobi'
  });
  console.log('hasObj修改后', hasObj.get('xdd'));
  hasObj.remove('xdd'); 
  console.log(hasObj.get('xdd'), '删除后xdd');
  console.log(hasObj.size(), 'size方法');
  console.log(hasObj.isEmpty(), 'isEmpty方法');