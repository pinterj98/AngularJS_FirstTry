(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  //toBuy.lstToBuy = ShoppingListCheckOffService.getToBuy();
  toBuy.lstToBuy = ShoppingListCheckOffService.getToBuy();
  toBuy.placeToBought = function (itemName, quantity, itemIndex){
    ShoppingListCheckOffService.placeToBought(itemName, quantity, itemIndex);
  }
  console.log(toBuy.lstToBuy);
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.lstBought = ShoppingListCheckOffService.getBought();
};


function ShoppingListCheckOffService() {
  var service = this;
  var lstToBuy = [
    {name: 'cookies',
    quantity: 10},
    {name: 'donuts',
    quantity: 5},
    {name: 'chicken strips',
    quantity: 3},
    {name: 'rabbit leg',
    quantity: 1},
    {name: 'cans of cola',
    quantity: 10},
  ];
  var lstBought= [];
  service.placeToBought = function (itemName, quantity, itemIndex){
    var item ={
      name: itemName,
      quantity: quantity
    }
    lstBought.push(item);
    lstToBuy.splice(itemIndex, 1);
  }
  service.getToBuy = function () {
    return lstToBuy;
  };
  service.getBought = function () {
    return lstBought;
  };
}
})();
