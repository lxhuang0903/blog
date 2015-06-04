var app = angular.module('app',[]);

app.controller('navController', function($scope){
     
  $scope.lititle =  $('li a:first').attr('title');


      $scope.change = function($event){
        $scope.lititle = $($event.target).attr('title');
      }
});
