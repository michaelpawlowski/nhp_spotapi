'use strict';

describe('Controller: SearchController', function () {

  // load the controller's module
  beforeEach(module('spotapiApp'));

  var SearchController, scope, location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    SearchController = $controller('SearchController', {
      $scope: scope
    });
  }));

  it('should default to albums', function () {
    expect(scope.types).toBe('album');
  });

  describe( '$scope.runSearch', function() {
    it( 'should update url', function() {
      scope.searchQuery = 'biosphere';
      scope.types = 'artist';
      scope.runSearch();
      expect( location.path() ).toBe( '/search/artist/biosphere' );
    } );
  } );
});
