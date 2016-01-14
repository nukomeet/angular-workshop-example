export default class TasksController {
  constructor($http) {
    $http.get('app/data/tasks.json').then((r) => {
      this.tasks = r.data;
    });
  }
};
