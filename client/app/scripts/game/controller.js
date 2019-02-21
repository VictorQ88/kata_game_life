'use strict';

angular.module('Game')
.controller('game', function ($scope) {

  $scope.grid = [[ 0, 1, 0, 0, 0 ],
  [ 1, 1, 0, 1, 1 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]];

  $scope.dimention = 5;

  $scope.calculate_next_generation = function (){
   var new_generation  = new Array($scope.dimention);
    var x,y,living_neighbors;
    for (x = 0; x < $scope.dimention; x++) {
      new_generation[x] = new Array($scope.dimention);
      for (y = 0; y < $scope.dimention; y++) {        
       living_neighbors = evaluate_neighbors(x,y,$scope.grid);
       new_generation[x][y] = evaluate_life_status($scope.grid[x][y], living_neighbors);
      }
    }
    $scope.grid = new_generation;
  };

  var evaluate_neighbors = function (index_x, index_y, grid) {
    var living_neighbors = 0;
    for (var x = index_x -1; x <= index_x + 1; x++) {
      for (var y = index_y -1; y <= index_y +1; y++) {
        if (is_in_range(x) && is_in_range(y) ) {
          if (!(x == index_x && y == index_y) && grid[x][y] == 1 ){
            living_neighbors++;
          }
        }
      }
    }
    return living_neighbors;
  };

  var is_in_range = function (index) {
    return (index >= 0 && index < $scope.dimention);
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
