(function() {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
           restrict: 'E',
           scope: {
                foundItems: '<',
                empty: '<',
                remove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'narrow',
            bindToController: true,
            templateUrl: 'template.html'
        };
        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrow = this;
        narrow.shortName = '';

        narrow.matchedMenuItems = function(searchTerm) {
            var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
            promise.then(function(items) {
                if (items && items.length > 0) {
                    narrow.message = '';
                    narrow.found = items;
                } else {
                    narrow.message = 'Nothing found!';
                    narrow.found = [];
                }
            });
        };
        narrow.removeMenuItem = function(itemIndex) {
            narrow.found.splice(itemIndex, 1);
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                url: (ApiBasePath + "/menu_items.json")
            }).then(function(response) {
                var foundItems = [];
                for (var i = 0; i < response.data['menu_items'].length; i++) {
                    if (searchTerm && searchTerm.length >=1 && response.data['menu_items'][i]['description'].toLowerCase().indexOf(searchTerm) !== -1) {
                        foundItems.push(response.data['menu_items'][i]);
                    }
                }
                return foundItems;
            });
        };
    }
})();
