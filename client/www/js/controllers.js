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
	
	$scope.springSlides = [];
	for (var i = 1; i <= 8; i++) { $scope.springSlides.push({ name: i+'.jpg' }); }
	$scope.goToSpringSlide = function(index) {
		$scope.springSlides[index].src = $scope.springSlides[index].src || 'img/home/spring/'+$scope.springSlides[index].name;
		$scope.springSlides[index].prev = $scope.springSlides[index].prev || 'img/home/spring/'+$scope.springSlides[(index == 0) ? $scope.springSlides.length-1 : index-1].name;
		$scope.springSlides[index].next = $scope.springSlides[index].next || 'img/home/spring/'+$scope.springSlides[(index == $scope.springSlides.length-1) ? 0 : index+1].name;
		console.log($scope.springSlides[index]);
	}
	$scope.goToSpringSlide(0);
	
	$scope.slideWidth = Math.floor(window.innerWidth*0.6667);
	$scope.offset = Math.floor(-$scope.slideWidth+(window.innerWidth*(0.33334/2)));
	console.log($scope.offset);
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