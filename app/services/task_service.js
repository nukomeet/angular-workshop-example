export default class TaskService {
  constructor($resource) {
    this.resource = $resource('/tasks/:id')
  }

  fetch() {
    return this.resource.query().$promise
  }
}
