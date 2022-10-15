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
      unionSet.add(keys[index], values[index]);      
    }
    return unionSet;
    }

    //交集方法实现
    Set.prototype.intersetction = function(otherSet){
      //创建新的集合
      //this:集合A
      //otherSet：集合B
      const intersetctionSet = new Set();
      let keys = Object.keys(this.items);
      let values = this.values();
     //从A集合中取出元素判断B中有吗 有的话则添加
        for (let index = 0; index < keys.length; index++) {
          let tempKey = keys[index];
          let tempVal = values[index];
          if (otherSet.has(tempKey)) {
            intersetctionSet.add(tempKey, tempVal);
          }
        }
        return intersetctionSet;
    }

    //差集方法实现 X存在于A集合中但是不能存在B集合中
    Set.prototype.difference = function(otherSet) {
        const differenceSet = new Set();
        let keys = Object.keys(this.items);
        let values = this.values();
        for (let index = 0; index < keys.length; index++) {
            if (!otherSet.has(keys[index])) {
              differenceSet.add(keys[index], values[index]);
            }
        }
        return differenceSet;
    }

    //子集方法
    Set.prototype.subset = function(otherSet){
      //this:集合A
      //otherSet:集合B
      //如果A集合中有元素不存在B集合中 返回false
      //如果遍历后没有返回fasle 则返回true
      let keys = Object.keys(this.items);
      let values = this.values();
      for (let index = 0; index < keys.length; index++) {
          if (!otherSet.has(keys[index])) {
            return false
          }        
      }
      return true;

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
  setA.add('num5', 5);
  console.log('集合A', Object.keys(setA.items));
  //创建集合B
  const setB = new Set();
  setB.add('num3', 24124);
  setB.add('num4', 123);
  setB.add('num5', 5);
  setB.add('num6', 6);
  setB.add('num7', 7);
  console.log('集合B', Object.keys(setB.items));

  //获取并集
  const resultObj = setA.union(setB);
  console.log('并集', resultObj.values());

  //获取交集
  const resultInterObj = setA.intersetction(setB);
  console.log('交集', resultInterObj.values());

  //获取差集
  const resultPoorObj = setA.difference(setB);
  console.log('差集', resultPoorObj.values());

  //获取子集
  const setC = new Set();
  setC.add('key1', 'value1');
  setC.add('key2', 'value2');
  setC.add('key3', 'value3');
  const setD = new Set();
  setD.add('key1', 'value1');
  setD.add('key2', 'value2');
  setD.add('key3', 'value3');
  setD.add('key4', 'value4');
  setD.add('key5', 'value5');
  const resultSubObj = setC.subset(setD);
  console.log(resultSubObj);