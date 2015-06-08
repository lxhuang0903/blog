var app = angular.module('app',['ngRoute','controllers']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
      $routeProvider.
       when('/',{
           templateUrl: 'views/about.html'
      }).
        when('/about',{
        redirectTo: '/'
      }).
        when('/productions',{
          templateUrl: 'views/productions.html'
      }).
        otherwise({
       redirectTo: '/404'
      });
      $locationProvider.html5Mode(true);
}])
