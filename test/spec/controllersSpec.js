describe('controllers', function(){
    
    beforeEach(module('controllers'));
    
    it('should create "phones" model with 3 phones ', inject(function($controller){
      var scope = {}, ctrl = $controller('navController',  {$scope:scope});
      expect(scope.phones.length).toBe(3);
    }));

})
