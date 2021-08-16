(function () {
    'use strict';
    angular.module('MenuApp')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
    var service = this;
    service.getMenuCategories = function () {
        var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
        });
        return response;
    };
    service.getMenuForCategory = function (shortName) {
        var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {category: shortName}
        });
        return response;
    };
    };
})();
