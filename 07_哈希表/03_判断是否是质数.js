    //封装函数： 判断传入的数字是否是质数
    //只能被1和自己整除  （不能被2-(num - 1)之间的数字整除 ）
    function isPrime(num) {
        for (let index = 2; index < num; index++) {
            if (num % index == 0) {
              //如果被2-num之间的数字整除  说明不是质数
              return false;
            }
        }
        return true;
      }

      //验证是否是质数
      console.log('isPrime(1)',isPrime(1));//true
      console.log('isPrime(2)',isPrime(2));//true
      console.log('isPrime(3)',isPrime(3));//true
      console.log('isPrime(4)',isPrime(4));//false