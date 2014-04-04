var parallel = require('./parallel');

parallel([
	function (callback) {
		setTimeout(function () {
			console.log('task 1 completed');
			callback();
		}, 400);
	}, function (callback) {
		setTimeout(function () {
			console.log('task 2 completed');
			callback();
		}, 500);
	}, function (callback) {
		setTimeout(function () {
			console.log('task 3 completed');
			callback(); 
		}, 300);
	}], function () {
		console.log('all tasks completed');
	});