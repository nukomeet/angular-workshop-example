import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';

import TaskService from './services/task_service'
import GithubService from './services/github_service'
import './controllers/index';

angular.module('app', ['controllers', 'ngResource', 'ui.router'])
  .service('task', TaskService)
  .service('github', GithubService)
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home.html'
      })
      .state('tasks', {
        url: '/tasks',
        templateUrl: 'app/views/tasks.html',
        controller: 'TasksController as ts'
      })
      .state('taskNew', {
        url: '/tasks/new',
        templateUrl: 'app/views/tasks-new.html',
        controller: 'TasksController as ts'
      })
      .state('githubIssues', {
        url: '/github',
        templateUrl: 'app/views/github.html',
        controller: 'GithubController as gc'
      })
  })
