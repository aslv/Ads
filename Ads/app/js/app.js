var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource', 'ngStorage', 'ui.bootstrap.pagination']);

adsApp.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');
adsApp.constant('nullVal', null);

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
		.when('/user/profile', {
			redirectTo: '/user/profile/edit'
		})
		.when('/user/profile/edit', {
			templateUrl: 'templates/user/edit-profile.html',
			controller: 'UserEditProfileController'
		})
		.when('/admin/ads', {
			templateUrl: 'templates/admin/admin-ads.html',
			controller: 'AdminAdsController'
		})
		.when('/admin/ads/list', {
			redirectTo: '/admin/ads'
		})
		.when('/admin/ads/edit/:adId', {
			templateUrl: 'templates/admin/edit-ad.html',
			controller: 'AdminEditAdController'
		})
		.when('/admin/ads/delete/:adId', {
			templateUrl: 'templates/admin/delete-ad.html',
			controller: 'AdminDeleteAdController'
		})
		.when('/admin/users', {
			templateUrl: 'templates/admin/users.html',
			controller: 'AdminUsersController'
		})
		.when('/admin/users/list', {
			redirectTo: '/admin/users'
		})
		.when('/admin/users/edit/:userName', {
			templateUrl: 'templates/admin/edit-user.html',
			controller: 'AdminEditUserController'
		})
		.when('/admin/users/delete/:userName', {
			templateUrl: 'templates/admin/delete-user.html',
			controller: 'AdminDeleteUserController'
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