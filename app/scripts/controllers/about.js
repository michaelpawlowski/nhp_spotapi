'use strict';

/**
 * @ngdoc function
 * @name spotapiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spotapiApp
 */
angular.module('spotapiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
