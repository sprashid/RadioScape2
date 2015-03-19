'use strict';

// Declare app level module which depends on views, and components
angular.module('hitachiApp', [
  'ngRoute',
  'hitachiApp.controllers',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/welcome.html', controller: 'HomeCtrl'});
  $routeProvider.when('/start', {templateUrl: 'partials/start.html', controller: 'HomeCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
  
}]);
