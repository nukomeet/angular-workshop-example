export default class GithubController {
  constructor(github) {
    this.github = github;

    this.queryParams = {
      state: 'open',
      sort: 'created',
      direction: 'desc'
    };

    this.getIssues();
  }

  getIssues() {
    this.github.fetch(this.queryParams).then((data) => {
      this.issues = data;
    })
  }

  setSort(sort) {
    let oldSort = angular.copy(this.queryParams.sort);
    this.queryParams.sort = sort;
    if (oldSort == sort) {
      this.setDirection(this.queryParams.direction == 'desc' ? 'asc' : 'desc');
    } else {
      this.setDirection('desc');
    }
  }

  setDirection(direction) {
    this.queryParams.direction = direction;
    this.getIssues();
  };
};
