//封装集合类
  function Set() {
    //属性
      this.items = {};
    //方法
    // add方法
    Set.prototype.add = function(key, value) {
      //判断集合当前是否已经包含此元素
      if(this.has(key)) return false;
      //将元素添加到集合中
      this.items[key] = value;
      
      return true;
    }

    //has方法
    Set.prototype.has = function(key){
      //hasOwnProperty判断对象是否含有这个属性
      return this.items.hasOwnProperty(key);
    }

    //remove方法(集合无重复元素且无序, 不能使用下标值删除元素, )
    Set.prototype.remove = function(key){
      //判断集合是否包含这个元素 包含才删除 不包含返回false
      if(!this.has(key)){
        
        return false;
      }

      //将元素从属性中删除
      delete this.items[key];

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

    //集合并集方法
    Set.prototype.union = function(otherSet){
    //this：集合对象A
    //otherSet:集合对象B
    //1.创建一个新的集合
    const unionSet = new Set();   
    //将A集合的所有元素全部添加到unionSet
    let keys = Object.keys(this.items); //获取到元素的所有属性得数组
    let values = this.values(); //获取到元素的所有属性值得数组

    for (let index = 0; index < keys.length; index++) {
          //添加每个元素
          unionSet.add(keys[index], values[index]);      
    }   
    // 3.取出集合B中的元素 判断是否需要添加到新集合
    keys = Object.keys(otherSet.items);
    values = otherSet.values();
    for (let index = 0; index < values.length; index++) {
      console.log('keys', keys[index]);
      console.log('values', values[index]);
      unionSet.add(keys[index], values[index]);      
    }
    return unionSet;
    }
 
  }

 /*  //测试set类
  const set = new Set();
  set.add('a');
  console.log('再次添加属性a' ,set.add('a'));
  console.log('set判断有重复元素是否添加',set)
  set.add('b');
  set.add('c');
  console.log('set添加方法', set);
  console.log('set的has方法', set.has('a'));
  set.remove('a');
  console.log('set的remove方法', set);
  console.log('set的size方法', set.size());
  console.log('set的values方法', set.values());
  set.clear();
  console.log('set的clear方法', set); */

  //测试并集
  //创建集合A
  const setA = new Set();
  setA.add('num1', 1);
  setA.add('num2', 2);
  setA.add('num3', 3);
  setA.add('num4', 4);
  //创建集合B
  const setB = new Set();
  setB.add('num3', 24124);
  setB.add('num4', 123);
  setB.add('num5', 5);
  setB.add('num6', 6);

  //获取并集
  const resultObj = setA.union(setB);
  console.log(resultObj);