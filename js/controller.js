var controllers = angular.module('controllers',[]);

controllers.controller('navController', function($scope){
  /*  $('header li a:first').click() ; */
    
    $scope.lititle =  $('header li a:first').attr('title');
    $('header li:first').addClass('active');

      $scope.change = function($event){
        $('header li').removeClass('active');
        $($event.target).parent().addClass('active');
        $scope.lititle = $($event.target).attr('title');
      }
});
