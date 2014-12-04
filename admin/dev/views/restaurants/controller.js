'use strict';

angular.module('fr-demo').controller('restaurants', function($scope, $route, $api) {
	
	//-- root scope wrapper example --//
	/*
	$scope.api('get', '/restaurants').success(function(restaurants) {
		$scope.restaurants = restaurants;
	});
	*/
	
	//-- api service example --//
	$api.get('/restaurants').success(function(restaurants) {
		$scope.restaurants = restaurants;
	});
	
	$scope.add = function(restaurant) {
		if (!restaurant && !restaurant.name) return $scope.error = 'Restaurant name cannot be left blank';
		$api.post('/restaurants', restaurant).success(function(response) {
			if (response.error) return $scope.error = response.error;
			$route.reload();
		});
	}
	
});