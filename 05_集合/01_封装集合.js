//封装集合类
  function Set() {
    //属性
      this.items = {};
    //方法
    // add方法
    Set.prototype.add = function(value) {
      //判断集合当前是否已经包含此元素
      if(this.has(value)) return false;
      //将元素添加到集合中
      this.items[value] = value;
      
      return true;
    }

    //has方法
    Set.prototype.has = function(value){
      //hasOwnProperty判断对象是否含有这个属性
      return this.items.hasOwnProperty(value);
    }

    //remove方法(集合无重复元素且无序, 不能使用下标值删除元素, )
    Set.prototype.remove = function(value){
      //判断集合是否包含这个元素 包含才删除 不包含返回false
      if(!this.has(value)){
        
        return false;
      }

      //将元素从属性中删除
      delete this.items[value];

      return true
    }

    //clear方法
    Set.prototype.clear = function(){
      this.items = {}; 
    }

    //size方法
    Set.prototype.size = function(){

      return Object.keys(this.items).length;
    }

    //获取集合中所以的值
    Set.prototype.values = function(){
      return Object.values(this.items) 
    }
 
  }
