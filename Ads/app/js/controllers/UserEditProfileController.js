adsApp.controller('UserEditProfileController', ['$scope', '$route', 'user', 'towns', 'notify', 'nullVal', function($scope, $route, user, towns, notify, nullVal) {
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

	function loadProfile() {
		user.getUserProfile(
			function success(data) {
				$scope.userData = data;
			},
			function error(error) {
				notify.error('An error occured while loading your profile.', error);
			}
		);
	}
	loadProfile();

	$scope.editProfile = function (userData) {
		user.editUserProfile(
			userData,
			function success() {
				notify.info('Your profile successfully editted!');
				$route.reload();
			},
			function error(error) {
				notify.error('An error occured while editting your profile.', error);
			}
		);
	}

	$scope.changePassword = function (userData) {
		user.changeUserPassword(
			userData,
			function success() {
				notify.info('Your password successfully changed!');
				$route.reload();
			},
			function error(error) {
				notify.error('An error occured while changing your password.', error);
			}
		);
	}
}]);