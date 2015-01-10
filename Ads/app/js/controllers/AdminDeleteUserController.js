adsApp.controller('AdminDeleteUserController', ['$scope', '$location', '$sessionStorage', 'admin', 'user', 'notify', 'nullVal', function($scope, $location, $sessionStorage, admin, user, notify, nullVal) {
	function loadUserProfile() {
		$scope.userData = $sessionStorage.userToBeManipulated;
		// console.log($scope.userData);
		// console.log($scope.userData.townId);
		if (!$scope.userData) {
			notify.error('An error occured while loading user profile.');
		}
		// delete $sessionStorage.userToBeManipulated;
	}
	loadUserProfile();

	$scope.deleteUser = function (userData) {
		admin.deleteUser(
			userData.username,
			function success() {
				notify.info('User deleted successfully!');
				$location.path('/admin/users');
			},
			function error(error) {
				notify.error('An error occured while deleting user.', error);
			}
		);
	}
}]);