adsApp.controller('AdminDeleteTownController', ['$scope', '$location', '$sessionStorage', 'admin', 'user', 'notify', function ($scope, $location, $sessionStorage, admin, user, notify) {
	
	function loadTown() {
		$scope.town = $sessionStorage.townToBeManipulated;
		$scope.town.name = $scope.town.username;
		// console.log($scope.town);
		if (!$scope.town) {
			notify.error('An error occured while loading town.');
		}
	}
	loadTown();

	$scope.deleteTown = function (town) {
		admin.deleteTown(
			town.id,
			function success() {
				notify.info('Town deleted!');
				$location.path('/admin/towns');
			},
			function error(error) {
				notify.error('An error occured while deleting town.', error);
			}
		);
	}
}]);