angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  
})

.controller('collections', function($scope, $http) {
	
	$http.get('http://localhost:3001/items').success(function(results) {
		$scope.items = results;
	});
	
})

.controller('items', function($scope, $stateParams, $http) {
	$http.get('http://localhost:3001/items/'+$stateParams.itemId).success(function(results) {
		$scope.item = results;
		console.log($scope.item);
	});
});
