'use strict';

angular.module('fr-demo').controller('restaurant', function($scope, $location, $routeParams, $api) {
	
	$api.get('/restaurants/'+$routeParams.id).success(function(response) {
		console.log(response);
		$scope.restaurant = response;
	});
	
	$scope.update = function(restaurant) {
		if (!restaurant && !restaurant.name) return $scope.error = 'Restaurant name cannot be left blank';
		$api.put('/restaurants/'+$routeParams.id, restaurant).success(function(response) {
			$location.path('/restaurants');
		});
	}
	
	$scope.delete = function() {
		if (confirm('Are you sure you want to delete this restaurant?')) {
			$api.delete('/restaurants/'+$routeParams.id).success(function(response) {
				$location.path('/restaurants');
			});
		}
	}
	
});