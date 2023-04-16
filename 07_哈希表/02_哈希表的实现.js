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
    HashTable.prototype.put = function (key, value) {
        //1.根据key获取index
        let index = this.hashFun(key, this.limit);
        //2.根据index 取出对应得bucket
        let bucket = this.storage[index];
        //3.如果桶为空 创建桶
        if (bucket == null) {
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

        //判断是否需要扩容操作
        if (this.count > this.limit * 0.75) {

            let newSize = this.limit << 1;
            let newPrime = this.getPrime(newSize);
            this.resize(newPrime);
            //可以使用
            // this.resize(this.limit << 1);  7 左移  相当于 7 * 2的1次方
        }
    }
    //获取操作
    HashTable.prototype.get = function (key) {
        //1.根据key获取index
        let index = this.hashFun(key, this.limit);
        // console.log(index);
        let bucket = this.storage[index];
        //判断这个key对应的桶是否存在
        if (!bucket) return null; //桶不存在 直接return
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
    HashTable.prototype.remove = function (key) {
        let index = this.hashFun(key, this.limit);
        let bucket = this.storage[index];
        if (!bucket) return null;
        for (let index = 0; index < bucket.length; index++) {
            let tuple = bucket[index];
            if (tuple[0] == key) {
                console.log('bucket[index] ', bucket[index])
                bucket.splice(index, 1);
                /*   delete bucket[index];
                  bucket.length -= 1; */
                /*
                delete bucket[index];
                  bucket.length -= 1;
                    为什么delete bucket[index]会报错 delete删除元素的时候 数组长度没有减去1
                     所以会再次进入循环 而这个桶的bucket[index] = undefined; undefined[0]会报错
                  */
                this.count--;
                //当删除的元素过多时 需要缩小容量
                if (this.limit > 7 && this.count < this.limit * 0.25) {
                    let newSize = Math.floor(this.limit >> 1);
                    let newPrime = this.getPrime(newSize);
                    this.resize(newPrime);

                }
                return tuple[1];
            }

        }
        //遍历完数据依然没有找到 返回null
        return null;
    }
    // 其他方法
    //判断hash表是否为空
    HashTable.prototype.isEmpty = function () {

        return this.count == 0;
    }

    //获取hash表中元素个数
    HashTable.prototype.size = function () {

        return this.count;
    }

    //hashTable的扩容
    HashTable.prototype.resize = function (newLimit) {
        //保存旧的数组的内容
        const oldStorage = this.storage;
        //新的storage 重置所有属性
        this.storage = [];
        this.count = 0;
        this.limit = newLimit;
        //遍历oldStorage里面所有的桶
        for (let index = 0; index < oldStorage.length; index++) {
            //取出对应的bucket
            let bucket = oldStorage[index];
            if (!bucket) continue;           //如果bucket为空的话 bucket.length会报错的  所有必须判断一下
            //bucket中有数据,取出数据重新插入
            for (let index = 0; index < bucket.length; index++) {
                let tuple = bucket[index];
                this.put(tuple[0], tuple[1]);
            }
        }

    }

    //判断是否是质数
    HashTable.prototype.isPrime = function (num) {

        //1. 获取num的平方根
        let temp = parseInt(Math.sqrt(num));
        //2. 判断是否是质数
        for (let index = 2; index <= temp; index++) {
            if (num % index == 0) {
                return false;
            }

        }
        return true;
    }

    //获取质数的方法
    HashTable.prototype.getPrime = function (num) {
        //找到最近的质数
        while (!this.isPrime(num)) {

            num += 1;
        }
        return num;
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
/*
console.log(hasObj.get('zt'), 'get方法');
console.log(hasObj.get('xdd'), 'get方法'); */
console.log(hasObj.limit, 'limit');
hasObj.put('xdd', {
    name: 'roll',
    address: 'yeahmobi'
});
console.log(hasObj.limit, 'limit');

hasObj.put('xzc', 1);
hasObj.put('1', 1);
console.log(hasObj.limit, 'limit');
hasObj.put('12', 1);
console.log(hasObj.limit, 'limit');
hasObj.put('13', 1);
hasObj.put('14', 1);
console.log(hasObj.limit, 'limit');
hasObj.put('15', 1);
console.log(hasObj.limit, 'limit');
hasObj.put('156', 1);
console.log(hasObj.limit, 'limit');
hasObj.put('1132', 1);
console.log(hasObj.limit, 'limit');
hasObj.put('113而且完成', 1);
console.log(hasObj.limit, 'limit');
hasObj.put('1123da', 1);
console.log(hasObj.limit, 'limit');
console.log(hasObj.limit, 'limit');
hasObj.put('1123', 1);
console.log(hasObj.limit, 'limit');
hasObj.put('145123', 1);
console.log(hasObj.limit, 'limit');
hasObj.put('1123123', 1);
console.log(hasObj.limit, 'limit');
console.log(hasObj.limit, 'limit');
hasObj.put('1123', 1);
console.log(hasObj.limit, 'limit');
hasObj.put('113123', 1);
console.log(hasObj.limit, 'limit');
console.log(hasObj.limit, 'limit');
hasObj.put('1231', 1);
hasObj.put('113123', 1);
console.log(hasObj.limit, 'limit');
hasObj.put('1qwesad', 1);
console.log(hasObj.limit, 'limit');
hasObj.put('1312312', 1);
console.log(hasObj.limit, 'limit');

hasObj.put('1231231', 1);
hasObj.put('1112323', 1);
console.log(hasObj.limit, 'limit');

hasObj.put('1123qwe', 1);
hasObj.put('1123', 1);
console.log(hasObj.limit, 'limit');

hasObj.put('1qwesdasd', 1);
hasObj.put('1asdsad', 1);
hasObj.put('1qweasdzcx', 1);
hasObj.put('1qwewqe123', 1);
hasObj.put('1qweqweasd', 1);
hasObj.put('1zxc', 1);
hasObj.put('1zxc', 1);
hasObj.put('1qdwe', 1);
hasObj.put('2qweasd', 1);
hasObj.put('3qwe', 1);
hasObj.put('4asdzxc', 1);
hasObj.put('5asd', 1);
console.log(hasObj.limit, 'limit');

hasObj.put('sad', 1);
console.log(hasObj.limit, 'limit')
hasObj.put('zxc123', 1);
/* console.log('hasObj修改后', hasObj.get('xdd'));
hasObj.remove('xdd');
console.log(hasObj.get('xdd'), '删除后xdd');
console.log(hasObj.size(), 'size方法');
console.log(hasObj.isEmpty(), 'isEmpty方法'); */
