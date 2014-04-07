var taskList,
	resultList,
	sequentialClb;

module.exports = sequential;

function sequential (tasks, callback) {
	if (!tasks || !tasks.length) return;
	taskList = tasks;
	sequentialClb = callback;
	resultList = [];

	var startTask = taskList.shift();
	startTask(next);
}

function next (err, data) {
	if (err) throw err;
	resultList.push(data);
	var currentTask = taskList.shift();
	if (currentTask) {
		currentTask(next);
	} else if (sequentialClb) {
		sequentialClb(resultList);
	}
}