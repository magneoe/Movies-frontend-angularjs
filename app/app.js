'use strict';

// Declare app level module which depends on views, and core components
var movieDBApp = angular.module('MovieDBApp', ['ngRoute', 'ngResource']).

config(($routeProvider, $locationProvider) => {
  $routeProvider.when('/movies', {
      templateUrl: '/templates/movieList/MovieList.html',
      controller: 'MovieListController'
  });
  $routeProvider.when('/movies/:movieId', {
    templateUrl: '/templates/movieDetails/MovieDetails.html',
    controller: 'MovieDetailsController'
});
$routeProvider.when('/login', {
    templateUrl: '/templates/login/login.html',
    controller: 'LoginController'
});

  $routeProvider.otherwise({redirectTo: '/movies'});
  $locationProvider.html5Mode(true);
});
