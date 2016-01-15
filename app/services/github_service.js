export default class GithubService {
  constructor($resource) {
    this.resource = $resource('https://api.github.com/repos/nukomeet/angular-workshop-example/issues/:number', {
      number: '@number',
      /*access_token: ""*/
    })
  }

  fetch(params) {
    return this.resource.query(params).$promise
  }
}
