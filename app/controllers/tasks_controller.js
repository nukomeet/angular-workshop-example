
export default class TasksController {
  constructor(task) {
    task.fetch().then((data) => {
      this.tasks = data;
    })
  }
};
