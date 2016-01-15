import angular from 'angular';
import 'angular-resource';

import TaskService from './services/task_service'
import './controllers/index';

angular.module('app', ['controllers', 'ngResource'])
  .service('task', TaskService);
