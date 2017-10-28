'use strict';

/**
 * @ngdoc function
 * @name angularjsexamApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the angularjsexamApp
 */
angular.module('angularjsexamApp')
  .controller('SignupCtrl', [
  "Data", "$scope", "$state",
   function (Data, $scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.name = "";
    $scope.age = "";
    $scope.saveUserInfo = function() {
      var dataPromise = Data.setData(
        //'http://10.0.2.2:52273/user',
        'http://172.16.1.253:52273/user',
        '&name='+$scope.name+'&age='+$scope.age);
      dataPromise.then(function(restuls){
        $scope.name = "";
        $scope.age = "";
      },function(reason){},function(update){});
    };

  }]);