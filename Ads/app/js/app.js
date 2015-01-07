var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

adsApp.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');

adsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/user/home.html',
			controller: 'HomeController'
		})
		.when('/login', {
			templateUrl: 'templates/user/login.html',
			controller: 'LoginController'
		})
		.when('/register', {
			templateUrl: 'templates/user/register.html',
			controller: 'RegisterController'
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