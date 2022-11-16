(function rewriteLog() {
  const _ = console.log;
  console.log = function () {
      _(`%cConsole:`, `color:#FFF; background-color:black; font-size:16px; padding:2px`, ...arguments)
  }
})();
//arguments就是传递给函数的参数组成的类数组对象