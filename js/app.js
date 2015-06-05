var app = angular.module('app',['ngRoute','controllers']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
      $routeProvider.
       when('/',{
           templateUrl: 'partials/about.html'
      }).
        when('/about',{
        redirectTo: '/'
      }).
        when('/productions',{
          templateUrl: 'partials/productions.html'
      }).
        otherwise({
       redirectTo: '/404'
      });
      $locationProvider.html5Mode(true);
}])
