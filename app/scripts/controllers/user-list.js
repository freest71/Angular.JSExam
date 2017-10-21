'use strict';

/**
 * @ngdoc function
 * @name angularjsexamApp.controller:UserListCtrl
 * @description
 * # UserListCtrl
 * Controller of the angularjsexamApp
 */
angular.module('angularjsexamApp')
  .controller('UserListCtrl', [
    "Data", "$scope", "$state", 
    function (Data, $scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //페이지가 로딩되었을 때 호출 (127.0.0.1, 로컬:172.16.1.253, 에뮬러이터로 테스트시 10.0.2.2변경 )
    $scope.$on('$viewContentLoaded', function() {
      $scope.requestUserList();
    });
    $scope.userList = [];
    $scope.requestUserList = function() {
      var dataPromise = Data.getData(
        'http://172.16.1.253:52273/user');
      dataPromise.then(function(results) {
        $scope.userList = results.data;
      },function(reason){},function(update){});
    }

    $scope.deleteUserInfo = function(id) {
      var dataPromise = Data.deleteData(
        'http://172.16.1.253:52273/user/'+id, '');
      dataPromise.then(function(requestUserListlts) {
        $scope.requestUserList();
      },function(reason){},function(update){});
    }

   $scope.modifyUserInfo = function(id,name,age) {
      var dataPromise = Data.modifyUserInfo(
        'http://172.16.1.253:52273/user/'+id,
         '&name='+name+'&age='+age);
      dataPromise.then(function(requestUserListlts) {
        $scope.requestUserList();
      },function(reason){},function(update){});
    }

    $scope.userInfo = {};
    $scope.getUserInfo = function(id) {
      var dataPromise = Data.getData(
        'http://172.16.1.253:52273/user/'+id);
      dataPromise.then(function(results){
        $scope.userInfo = results.data;
      },function(reason){},function(update){});
    }

  }]);