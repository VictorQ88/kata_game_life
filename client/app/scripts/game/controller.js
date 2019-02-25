'use strict';

angular.module('Game')
.controller('game', function ($scope) {

  $scope.grid = []; 
  $scope.playing = false;
  $scope.object = { dimension: 0 };

  $scope.reset_game = function () {
    $scope.object.dimension = 0;
    $scope.grid = [];
    $scope.playing = false;
  };

  $scope.start_new_game = function (){
    $scope.grid  = new Array($scope.object.dimension);
    _($scope.grid).each(function (rows, x) {
       $scope.grid[x] = new Array($scope.object.dimension);
     _($scope.grid[x]).each(function (column, y) {
       var random_number = Math.random() * 10;
       $scope.grid[x][y] = random_number > 5 ? 1 : 0;
     });
    });

    $scope.playing = true;
  };

  $scope.calculate_next_generation = function () {
    $scope.object.dimension = $scope.grid.length;
    var new_generation  = new Array($scope.object.dimension);
    var living_neighbors;
  
    _($scope.grid).each(function (rows, x) {
      new_generation[x] = new Array($scope.object.dimension);
      _(rows).each(function (column, y) {
        living_neighbors = evaluate_neighbors(x, y, $scope.grid);
        new_generation[x][y] = evaluate_life_status(column, living_neighbors);
      });
    });

    $scope.grid = new_generation;
  };

  var evaluate_neighbors = function (index_x, index_y, grid) {
    var living_neighbors = 0;

    var range_x = _.range(index_x -1, index_x + 2);
    var range_y = _.range(index_y -1, index_y + 2);
    
    _(range_x).each(function (element_x, range_index_x) {
      _(range_y).each(function (element_y,range_index_y) {
        if (is_in_range(element_x) && is_in_range(element_y) ) {
          if (!(element_x == index_x && element_y == index_y) && grid[element_x][element_y] == 1 ){
          living_neighbors++;
          }
        }
      });
    });
    return living_neighbors;
  };

  var is_in_range = function (index) {
    return (index >= 0 && index < $scope.object.dimension);
  };

  var evaluate_life_status = function (cell, living_neighbors){
    if(cell == 0){
      if (living_neighbors == 3){
        return 1;
      }
    }

    if(cell == 1){
      if (living_neighbors == 2 || living_neighbors == 3){
        return 1;
      }
    }
    return 0;
  };


}).config(function ($routeProvider) {
  $routeProvider
  .when('/game', {
    templateUrl: 'scripts/game/views/game.html',
    controller: 'game'
  });
});
