export default class TaskService {
  constructor($resource) {
    this.resource = $resource('/tasks/:id')
  }

  fetch() {
    return this.resource.query().$promise
  }

  save(task) {
    return this.resource.save({}, task).$promise
  }
}
