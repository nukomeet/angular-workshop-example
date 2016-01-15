
export default class TasksController {
  constructor(task, $state) {
    this.task = task;
    this.state = $state;

    this.task.fetch().then((data) => {
      this.tasks = data;
    })
  }

  addTask() {
    this.task.save(this.task).then((r) => {
      this.state.go("tasks")
    })
  }
};
