adsApp.controller('LoginController', ['$scope', '$location', 'user', 'notify', function($scope, $location, user, notify) {
	$scope.login = function (userData) {
		user.login(
			userData,
			function success() {
				notify.info('Login successful!');
				$location.path('/');
			},
			function error(error) {
				notify.error('An error occured while login.', error);
			}
		);
	}
}]);