'use strict';

/**
 * @ngdoc overview
 * @name spotsearchAngularApp
 * @description
 * # spotsearchAngularApp
 *
 * Main module of the application.
 */
angular
  .module('spotapiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/search/artist/:query', {
        templateUrl: 'views/artistsearch.html',
        controller: 'ArtistSearchController'
      })
      .when('/search/album/:query', {
        templateUrl: 'views/albumsearch.html',
        controller: 'AlbumSearchController'
      })
      .when('/about', {

      })
      .otherwise({
        redirectTo: '/'
      });
  });
