adsApp.controller('RegisterController', ['$scope', '$location', 'user', 'notify', function($scope, $location, user, notify) {
	$scope.register = function (userData) {
		user.register(
			userData,
			function success() {
				notify.info('Registration successful!');
				$location.path('/');
			},
			function error(error) {
				notify.error('An error occured while registration.', error);
			}
		);
	}
}]);