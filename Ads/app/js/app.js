var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource', 'ngStorage', 'ui.bootstrap.pagination']);

adsApp.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');

adsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
		.when('/user/ads', {
			templateUrl: 'templates/user/user-ads.html',
			controller: 'UserAdsController'
		})
		.when('/user/ads/publish', {
			templateUrl: 'templates/user/publish-new-ad.html',
			controller: 'UserPublishNewAdController'
		})
		.when('/user/ads/edit/:adId', {
			templateUrl: 'templates/user/edit-ad.html',
			controller: 'UserEditAdController'
		})
		.when('/user/ads/delete/:adId', {
			templateUrl: 'templates/user/delete-ad.html',
			controller: 'UserDeleteAdController'
		})
		.when('/user/profile/edit', {
			templateUrl: 'templates/user/home.html',
			controller: 'HomeController'
		})
		.otherwise({
			redirectTo: '/'
		});
	//$locationProvider.html5Mode(true);
	/*	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	*/
}]);

adsApp.run(['$rootScope', '$location', 'user', 'notify', function($rootScope, $location, user, notify) {
	$rootScope.$on('$locationChangeStart', function (_) {
		if ($location.path().indexOf('/user/') != -1 && !user.isLoggedIn()) {
			notify.warn('Only authorized users can access this resource!');
			$location.path('/');
		}
	});
}]);