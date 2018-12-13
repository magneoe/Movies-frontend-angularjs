'use strict';

// Declare app level module which depends on views, and core components
var movieDBApp = angular.module('MovieDBApp', ['ngRoute']).

config(($routeProvider) => {
  $routeProvider.when('/movies', {
      templateUrl: '/templates/movieList/MovieList.html',
      controller: 'MovieListController'
  });

  $routeProvider.otherwise({redirectTo: '/movies'});
});
