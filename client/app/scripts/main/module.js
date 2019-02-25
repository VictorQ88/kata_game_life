'use strict';

angular.module('App', [
  'underscore',
  'ngRoute',
  'Game'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'scripts/main/views/dashboard.html'
  });
});
