adsApp.controller('RegisterController', ['$scope', '$location', 'user', 'notify', 'towns', function($scope, $location, user, notify, towns) {
	$scope.userData = {townId: null};

	function loadTownsInRegisternForm() {
		towns.getTowns()
			.$promise
			.then(
				function success(data) {
					$scope.towns = data;
				},
				function error(error) {
					notify.error('An error occured while loading towns.', error);
				}
			);
	}
	loadTownsInRegisternForm();

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