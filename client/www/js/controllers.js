angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('RestaurantsCtrl', function($scope, $http) {
	$http.get('http://localhost:3001/restaurants').success(function(results) {
		$scope.restaurants = results;
	});
})

.controller('RestaurantDetailCtrl', function($scope, $stateParams, $http) {
	console.log($stateParams);
	$http.get('http://localhost:3001/restaurants/'+$stateParams.restaurantId).success(function(results) {
		console.log(results);
		$scope.restaurant = results;
	});
})

.controller('AccountCtrl', function($scope) {
});
