var sequential = require('./sequential');

sequential([
	function (callback) {
		setTimeout(function () {
			console.log('first task completed');
			callback(null, 'passed from the first task');
		}, 500);
	}, function (callback) {
		setTimeout(function () {
			console.log('second task completed');
			callback(null, 'passed from the second task');
		}, 300);
	}, function (callback) {
		setTimeout(function () {
			console.log('third task completed');
			callback(null, 'passed from the third task');
		}, 200);
	}
	], function (resultList) {
		console.log('Result List:', resultList);
	});