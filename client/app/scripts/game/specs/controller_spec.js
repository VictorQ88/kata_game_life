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

  var next_next_generation  = [
    [ 1, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 1, 0, 0, 1, 0 ], 
    [ 0, 0, 1, 0, 0 ], 
    [ 0, 0, 0, 0, 0 ]
  ]; 

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('game', { $scope: scope});
    scope.grid = [
      [ 0, 1, 0, 0, 0 ],
      [ 1, 1, 0, 1, 1 ],
      [ 0, 0, 0, 0, 0 ], 
      [ 0, 0, 1, 0, 0 ], 
      [ 0, 0, 0, 0, 0 ]
    ]; 
  }));

  describe('On instance', function(){
    it('Should test fist condition', function() {
      expect(scope.grid).toEqual(initial_pattern);
    });
  });

  describe('When game play',function() {    
    it('Should test start new game', function() {
      scope.object.dimension = 10;
      scope.start_new_game();
      expect(scope.grid.length).toEqual(scope.object.dimension);
    });

    it('Should test next generation', function() {      
      scope.calculate_next_generation();    
      expect(scope.grid).toEqual(next_generation);
      scope.calculate_next_generation();    
      expect(scope.grid).toEqual(next_next_generation);
    });

    it('Should test auto play', function() {     
     expect(scope.calculate_next_generation).toHaveBeenCalled();
    });
  });

});
