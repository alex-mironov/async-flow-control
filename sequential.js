var taskList;

module.exports = sequential;

function sequential (tasks) {
	if (!tasks || !tasks.length) return;
	taskList = tasks;
	next();
}

function next (err) {
	if (err) throw err;
	var currentTask = taskList.shift();
	if (currentTask) {
		currentTask(next);
	}
}