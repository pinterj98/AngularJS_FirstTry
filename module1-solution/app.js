(function () {
'use strict';

angular.module('Mod1App', [])
.controller('Mod1Controller', Mod1Controller);

Mod1Controller.$inject = ['$scope'];
function Mod1Controller($scope) {
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
