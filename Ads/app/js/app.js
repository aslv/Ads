var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource']);

adsApp.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');

adsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '',
			controller: ''
		})
		.when('/login', {
			templateUrl: '',
			controller: ''
		})
		.when('/register', {
			templateUrl: '',
			controller: ''
		})
		.when('/ads', {
			templateUrl: '',
			controller: ''
		})
		.when('/user/ads', {
			templateUrl: '',
			controller: ''
		})
		.otherwise({
			redirectTo: '/'
		});
}]);