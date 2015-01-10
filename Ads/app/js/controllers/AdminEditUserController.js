adsApp.controller('AdminEditUserController', ['$scope', '$route', '$sessionStorage', 'admin', 'user', 'towns', 'notify', 'nullVal', function($scope, $route, $sessionStorage, admin, user, towns, notify, nullVal) {
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

	function loadUserProfile() {
		
	}
	loadUserProfile();

	$scope.editUserProfile = function (userData) {
		admin.editUserProfile(
			userData.username,
			userData,
			function success() {
				notify.info('User profile successfully editted!');
				$route.reload();
			},
			function error(error) {
				notify.error('An error occured while editting user profile.', error);
			}
		);
	}

	$scope.changeUserPassword = function (userData) {
		admin.changeUserPassword(
			userData,
			function success() {
				notify.info('User password successfully changed!');
				$route.reload();
			},
			function error(error) {
				notify.error('An error occured while changing user password.', error);
			}
		);
	}
}]);