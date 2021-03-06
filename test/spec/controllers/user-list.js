'use strict';

describe('Controller: UserListCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsexamApp'));

  var UserListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserListCtrl = $controller('UserListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserListCtrl.awesomeThings.length).toBe(3);
  });
});
