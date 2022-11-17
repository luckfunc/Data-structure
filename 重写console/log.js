(function rewriteLog() {
			const _ = console.log;
			console.log = function () {
				_(`%cConsole:`, `background:#333;height:18px;line-height:18px;padding:1px;border-radius:3px 0 0 3px;color:#fff background:#169fe6;height:18px;line-height:18px;padding:1px;border-radius:0 3px 3px 0;color:#fff`, ...arguments)
			}
		})();
//arguments就是传递给函数的参数组成的类数组对象
