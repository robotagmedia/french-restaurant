'use strict';

angular.module('fr-demo').controller('item', function($scope, $location, $routeParams, $api) {
	
	$api.get('/items/'+$routeParams.id).success(function(response) {
		console.log(response);
		$scope.item = response;
	});
	
	$scope.update = function(item) {
		if (!item && !item.name) return $scope.error = 'item name cannot be left blank';
		$api.put('/items/'+$routeParams.id, item).success(function(response) {
			$location.path('/items');
		});
	}
	
	$scope.delete = function() {
		if (confirm('Are you sure you want to delete this item?')) {
			$api.delete('/items/'+$routeParams.id).success(function(response) {
				$location.path('/items');
			});
		}
	}
	
});