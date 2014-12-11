'use strict';

angular.module('fr-demo').controller('items', function($scope, $route, $api, $document) {
	
	//-- root scope wrapper example --//
	/*
	$scope.api('get', '/items').success(function(results) {
		$scope.items = items;
	});
	*/
	
	//-- api service example --//
	$api.get('/items').success(function(results) {
		$scope.items = results;
		console.log(results);
	});
	
	$scope.add = function() {
		var modal = $document.find('#modal');
		modal.on('hidden.bs.modal', function(event) {
			//clear unsaved items
		});
		modal.modal();
	}
	
	$scope.create = function(item) {
		$api.post('/items', item).success(function(response) {
			$route.reload();
		});
	}
	
	/*
	$scope.add = function(item) {
		if (!item && !item.name) return $scope.error = 'item name cannot be left blank';
		$api.post('/items', item).success(function(response) {
			if (response.error) return $scope.error = response.error;
			$route.reload();
		});
	}
	*/
	
});