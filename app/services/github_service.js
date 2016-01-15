export default class GithubService {
  constructor($resource) {
    this.resource = $resource('https://api.github.com/repos/nukomeet/angular-workshop-example/issues/:number', {
      number: '@number',
      access_token: "fa6e3d8a2f7c9ad26cea4a2783305bb0699fd52c"
    })
  }

  fetch(params) {
    return this.resource.query(params).$promise
  }
}
