(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.HowMany = function () {
    if ($scope.dishes == ""){
      $scope.result="Please enter data first!";
    } else if ($scope.dishes.split(',').length <= 3 ) {
      $scope.result="Enjoy!"
    } else {
      $scope.result="Too much!"
    }
  }
}

})();
