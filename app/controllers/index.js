import angular from 'angular';

import TasksController from './tasks_controller';
import GithubController from './github_controller';

angular.module('controllers', [])
  .controller('TasksController', TasksController)
  .controller('GithubController', GithubController);
