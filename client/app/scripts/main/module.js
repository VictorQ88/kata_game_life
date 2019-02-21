'use strict';

angular.module('App', [
  'ngRoute',
  'Game'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'scripts/main/views/dashboard.html'
  });
});
