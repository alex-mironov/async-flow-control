var tasksCount, 
	tasksCompletedCallback,
	completedTasks = 0;

module.exports = parallel;

function parallel (taskList, callback) {
	if (!taskList) return;
	tasksCount = taskList.length;
	tasksCompletedCallback = callback; 
	for (var i = tasksCount - 1; i >= 0; i--) {
		taskList[i](taskCompleted);
	}
}

function taskCompleted () {
	completedTasks++;
	if (completedTasks == tasksCount) {
		tasksCompletedCallback();
	}
}