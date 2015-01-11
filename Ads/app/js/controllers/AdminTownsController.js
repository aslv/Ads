adsApp.controller('AdminTownsController', ['$scope', '$location', '$sessionStorage', 'admin', 'user', 'notify', function ($scope, $location, $sessionStorage, admin, user, notify) {
	$scope.townsParams = {
		'startPage': 1,
		'pageSize': 10
	};
	$scope.reloadTowns = function () {
		loadTowns($scope.townsParams);
	}

	$scope.sortBy = function (param) {
		if (param) {
			$scope.townsParams.sortBy = param;
		}
		else {
			delete $scope.townsParams.sortBy;
		}
		$scope.reloadTowns();
	}
	
	$scope.editTown = function (town) {
		$sessionStorage.townToBeManipulated = town;
		console.log('/admin/towns/edit/' + town.id);
		$location.path('/admin/towns/edit/' + town.id);
	}

	$scope.deleteTown = function (town) {
		$sessionStorage.townToBeManipulated = town;
		$location.path('/admin/towns/delete/' + town.id);
	}
	
	$scope.reloadTowns();
	
	function loadTowns(params) {
		$scope.townsLoading = true;
		admin.getAllTowns(
			params,
			function success(data) {
				// console.log(data.data);
				$scope.towns = data.data;
			},
			function error(error) {
				notify.error('An error occured while loading towns.', error);
			},
			function loaded() {
				$scope.townsLoading = false;
			}
		);
	}
}]);