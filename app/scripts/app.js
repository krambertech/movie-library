'use strict';

/**
 * @ngdoc overview
 * @name movieLibraryApp
 * @description
 * # movieLibraryApp
 *
 * Main module of the application.
 */
angular
  .module('movieLibraryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
