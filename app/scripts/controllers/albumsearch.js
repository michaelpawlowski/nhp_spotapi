//album search controller

angular.module('spotapiApp')
.controller('AlbumSearchController', ['$scope', '$routeParams', 'searchFactory',
function($scope, $routeParams, searchFactory) {

  $scope.types = 'album';
  $scope.query = $routeParams.query;

  $scope.results = {};
  searchFactory.getSearchResults($routeParams.query, 'album')
  .success(function(results){
    $scope.results = results;
    console.log(results);
  })
  .error(function(error){
    $scope.status = 'Unable to load search results: ' + error.message;
  });

}
]);
