(function () {
    'use strict';
    angular.module('MenuData')
    .component('menuitems', {
      templateUrl: 'src/templates/menuitems.template.html',
      bindings: {
        items: '<'
      }
    });

})();
