var sequential = require('./sequential');

sequential([
	function (callback) {
		setTimeout(function () {
			console.log('first task completed');
			callback();
		}, 500);
	}, function (callback) {
		setTimeout(function () {
			console.log('second task completed');
			callback();
		}, 300);
	}, function (callback) {
		setTimeout(function () {
			console.log('third task completed');
			callback();
		}, 200);
	}
	]);