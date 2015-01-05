// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      
    .state('menu', {
    	templateUrl: 'templates/nav.html'
    })
    
    .state('home', {
    	url: '/',
    	templateUrl: 'templates/home.html',
    	controller: 'home'
    })
    
    .state('store', {
    	url: '/store/:categoryName',
    	templateUrl: 'templates/store.html',
    	controller: 'categories'
    })
    
    .state('collection', {
    	url: '/store/:categoryName/:collectionName/:collectionId',
    	templateUrl: 'templates/collections.html',
    	controller: 'collections'
    })
    
    .state('item', {
    	url: '/store/goods/:categoryName/:collectionName/:itemId',
    	templateUrl: 'templates/items.html',
    	controller: 'items'
    })
    
  $urlRouterProvider.otherwise('/');
  
});

