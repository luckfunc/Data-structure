//效率更高的判断质数
function isPrime(num) {
  //1. 获取num的平方根
    let temp = parseInt(Math.sqrt(num));
    //2. 判断是否是质数
    for (let index = 2; index <= temp; index++) {
      if (num % index == 0 ) {
        return false; 
      }

    } 
    return true;


}
console.log('isPrime', isPrime(1))
console.log('isPrime', isPrime(2))
console.log('isPrime', isPrime(3))
console.log('isPrime', isPrime(4))