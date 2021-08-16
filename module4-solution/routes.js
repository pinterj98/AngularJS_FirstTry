(function () {
'use strict';
angular.module('MenuApp')
.config(RoutesConfig);
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/templates/mainlist.template.html',
    controller: 'MainListController as mainList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        var result=MenuDataService.getMenuCategories();
        return result;
      }]
    }
  })
  .state('mainList.menus', {
    url: '/menus/{category}',
    templateUrl: 'src/templates/menus.template.html',
    controller: "MenusController as menus",
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        var result=MenuDataService.getMenuForCategory($stateParams.category);
        return result;
      }]
    }
  });
}
})();
