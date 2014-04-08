var sequential = require('./sequential');

sequential([
	function (callback) {
		setTimeout(function () {
			console.log('1st task completed');
			callback(null, 'passed from the 1st task');
		}, 500);
	}, function (callback) {
		setTimeout(function () {
			console.log('2nd task completed');
			callback(null, 'passed from the 2nd task');
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