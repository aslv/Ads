adsApp.controller('AppController', ['$scope', '$location', 'user', 'notify', function($scope, $location, user, notify) {
	$scope.user = user;

	$scope.logout = function () {
		user.logout();
		notify.info('Logout successful!');
		$location.path('/');
	}
}]);