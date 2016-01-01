var app = angular.module('magic-book', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.buttonVisible = true;

  $scope.enter = function(){
    $scope.buttonVisible = false;
  }    
}]);