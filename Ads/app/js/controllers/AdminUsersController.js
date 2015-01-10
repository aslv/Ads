adsApp.controller('AdminUsersController', ['$scope', '$rootScope', '$route', 'admin', 'user', 'notify', function ($scope, $rootScope, $route, admin, user, notify) {
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
	/*
	$scope.$on('categorySelected', function (_, selectedCategoryId) {
		$scope.adsParams.categoryId = selectedCategoryId;
		$scope.adsParams.startPage = 1;
		$scope.reloadAds();
	});
	$scope.$on('townSelected', function (_, selectedTownId) {
		$scope.adsParams.townId = selectedTownId;
		$scope.adsParams.startPage = 1;
		$scope.reloadAds();
	});
	$scope.$on('statusSelected', function (_, selectedStatus) {
		$scope.adsParams.status = selectedStatus;
		$scope.adsParams.startPage = 1;
		$scope.reloadAds();
	});
	*/
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