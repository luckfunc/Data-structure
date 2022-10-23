 //封装哈希表的类
  function hashTable() {
    //属性
      this.storage = [];
      this.count = 0; //用来当前哈希表里面的属性多少
      // 装载因子 > 0.75 对数组扩容  loadFactor --> 0.25 减少数组的长度 
      this.limit = 7;//用来记录数组的长度
    //方法
  }