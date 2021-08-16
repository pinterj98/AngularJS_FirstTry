(function () {
    'use strict';
    angular.module('MenuData')
    .controller('MenusController', MenusController);
    MenusController.$inject = ['MenuDataService', 'items'];
    function MenusController(MenuDataService, items) {
      var menus = this;
      menus.list = items.data.menu_items;
    }
    })();
