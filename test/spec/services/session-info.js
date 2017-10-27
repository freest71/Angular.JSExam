'use strict';

describe('Service: sessionInfo', function () {

  // load the service's module
  beforeEach(module('angularjsexamApp'));

  // instantiate service
  var sessionInfo;
  beforeEach(inject(function (_sessionInfo_) {
    sessionInfo = _sessionInfo_;
  }));

  it('should do something', function () {
    expect(!!sessionInfo).toBe(true);
  });

});
