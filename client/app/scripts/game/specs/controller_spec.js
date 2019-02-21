'use strict';

describe('Controller: Game', function () {

  beforeEach(module('Game'));

  var controller;
  var scope;


  var initial_pattern = [
    [0, 1, 0, 0, 0 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 0, 0, 0, 0 ], 
    [ 0, 0, 1, 0, 0 ], 
    [ 0, 0, 0, 0, 0 ]
  ]; 

  var next_generation  = [
    [ 1, 1, 1, 0, 0 ],
    [ 1, 1, 1, 0, 0 ],
    [ 0, 1, 1, 1, 0 ], 
    [ 0, 0, 0, 0, 0 ], 
    [ 0, 0, 0, 0, 0 ]
  ]; 

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('game', { $scope: scope });
    scope.grid = [[ 0, 1, 0, 0, 0 ],
      [ 1, 1, 0, 1, 1 ],
      [ 0, 0, 0, 0, 0 ], 
      [ 0, 0, 1, 0, 0 ], 
      [ 0, 0, 0, 0, 0 ]
    ]; 
  }));

  describe('On instance', function(){
    iit('Should test fist condition', function() {
      expect(scope.grid).toEqual(initial_pattern);
    });

  });

  describe('When game play',function() {
    iit('Should test next generation', function() {
     scope.calculate_next_generation();
     expect(scope.grid).toEqual(next_generation);
    });
  });

});
