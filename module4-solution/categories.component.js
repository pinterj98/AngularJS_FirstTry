(function () {
    'use strict';
    angular.module('MenuData')
    .component('categories', {
      templateUrl: 'src/templates/categories.template.html',
      bindings: {
        items: '<'
      }
    });
})();
