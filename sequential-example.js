var sequential = require('./sequential');

sequential([
	function (callback) {
		setTimeout(function () {
			console.log('1 task completed');
			callback(null, 'passed from the first task');
		}, 500);
	}, function (callback) {
		setTimeout(function () {
			console.log('second task completed');
			callback(null, 'passed from the second task');
		}, 300);
	}, function (callback) {
		setTimeout(function () {
			console.log('3rd task completed');
			callback(null, 'passed from the 3rd task');
		}, 200);
	}
	], function (resultList) {
		console.log('result list:', resultList);
	});