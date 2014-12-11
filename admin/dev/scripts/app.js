'use strict';

var app = angular.module('fr-demo', ['ngRoute']);

//routes
app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', { templateUrl: 'views/home/view.html', controller: 'home' });
	
	$routeProvider.when('/items', { templateUrl: 'views/items/view.html', controller: 'items' });
	$routeProvider.when('/items/:id', { templateUrl: 'views/item/view.html', controller: 'item' });
	
	$routeProvider.otherwise({ redirectTo: '/' });
	$locationProvider.html5Mode(true);
});

//api service wrapper example
app.factory('$api', ['$http', function($http) {
	var _apiUrl = 'http://localhost:3001';
	return {
		get: function(url) {
			return $http.get(_apiUrl+url);
		},
		post: function(url, data) {
			return $http.post(_apiUrl+url, data);
		},
		put: function(url, data) {
			return $http.put(_apiUrl+url, data);
		},
		delete: function(url) {
			return $http.delete(_apiUrl+url);
		}
	}
}]);

//root controller
app.controller('root', function($scope, $http) {
	
	//root api wrapper example
	/*
	$scope.api = function(type, url, data) {
		return $http[type]('http://localhost:3001'+url, data);
	}
	*/
	
});