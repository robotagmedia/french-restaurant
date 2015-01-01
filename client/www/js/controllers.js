angular.module('starter.controllers', [])

.controller('header', function($scope, $state) {
 	
 	$scope.toggled = false;
 	$scope.state;
 	$scope.params;
 	
 	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
 		if (toState.name != 'menu') {
 			$scope.state = toState;
 			$scope.params = toParams;
 			$scope.toggled = false;
 		} else {
 			$scope.toggled = true;
 		}
 	});
 	
 	$scope.toggleMenu = function() {
 		if (!$scope.toggled) {
 			$state.go('menu');
 		} else {
 			$state.go($scope.state, $scope.params, { reload: true });
 		}
 	}
 	
 	$scope.home = function() {
 		$scope.toggled = false;
 		$state.go('home');
 	}
 	
})

.controller('home', function($scope) {
	
	$scope.tabs = [
		{ name: 'women', slides: [{ name: '1.jpg' }, { name: '2.jpg' }, { name: '3.jpg' }, { name: '4.jpg' }]},
		{ name: 'men', slides: [{ name: '1.jpg' }, { name: '2.jpg' }, { name: '3.jpg' }, { name: '4.jpg' }]},
		{ name: 'kids', slides: [{ name: '1.jpg' }, { name: '2.jpg' }, { name: '3.jpg' }, { name: '4.jpg' }]}
	];
	$scope.goToTab = function(tab) {
		$scope.currentTab = $scope.tabs[tab];
		$scope.goToSlide(0, $scope.currentTab);
	}
	$scope.goToSlide = function(index, tab) {
		tab.slides[index].src = 'img/home/tabs/'+tab.name+'/'+tab.slides[index].name;
	}
	$scope.goToTab(0);
	
})

.controller('categories', function($scope, $stateParams, $http) {
	
	$http.get('http://localhost:3001/categories/'+$stateParams.categoryName).success(function(results) {
		$scope.category = results;
		console.log(results);
	});
	
})

.controller('collections', function($scope, $stateParams, $http) {
	
	$scope.store = $stateParams.categoryName;
	$http.get('http://localhost:3001/collections/'+$stateParams.collectionId).success(function(results) {
		console.log(results);
		$scope.collection = results;
	});
	
})

.controller('items', function($scope, $stateParams, $http) {
	$scope.store = $stateParams.categoryName;
	$http.get('http://localhost:3001/items/'+$stateParams.itemId).success(function(results) {
		$scope.item = results;
	});
});