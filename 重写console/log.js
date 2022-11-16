(function rewriteLog() {
  const _ = console.log;
  console.log = function () {
      _(`%cConsole:`, `color:#FFF; background-color:black; font-size:16px; padding:2px`, ...arguments)
  }
})();