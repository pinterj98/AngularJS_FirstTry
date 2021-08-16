(function () {
'use strict';
angular.module('MenuData')
.controller('MainListController', MainListController);
MainListController.$inject = ['MenuDataService', 'categories'];
function MainListController(MenuDataService, categories) {
  var mainlist = this;
  mainlist.items = categories.data;
}
})();
