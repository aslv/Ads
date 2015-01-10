adsApp.controller('AdminUsersController', ['$scope', '$location', '$sessionStorage', 'admin', 'user', 'notify', function ($scope, $location, $sessionStorage, admin, user, notify) {
	$scope.usersParams = {
		'startPage': 1,
		'pageSize': 10
	};
	$scope.reloadUsers = function () {
		loadUsers($scope.usersParams);
	}

	$scope.sortBy = function (param) {
		if (param) {
			$scope.usersParams.sortBy = param;
		}
		else {
			delete $scope.usersParams.sortBy;
		}
		$scope.reloadUsers();
	}

	$scope.editUser = function (userData) {
		$sessionStorage.usedToBeManipulated = userData;
		// console.log('/admin/users/edit/' + encodeURIComponent(userData.username));
		$location.path('/admin/users/edit/' + encodeURIComponent(userData.username));
	}

	$scope.edeleteUser = function (userData) {
		$sessionStorage.usedToBeManipulated = userData;
		$location.path('/admin/users/delete/' + encodeURIComponent(userData.username));
	}
	
	$scope.reloadUsers();
	
	function loadUsers(params) {
		$scope.usersLoading = true;
		admin.getAllUsers(
			params,
			function success(data) {
				// console.log(data.data);
				$scope.users = data.data;
			},
			function error(error) {
				notify.error('An error occured while loading users.', error);
			},
			function loaded() {
				$scope.usersLoading = false;
			}
		);
	}
}]);