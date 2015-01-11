adsApp.controller('AdminEditTownController', ['$scope', '$location', '$sessionStorage', 'admin', 'user', 'notify', function ($scope, $location, $sessionStorage, admin, user, notify) {
	
	function loadTown() {
		$scope.town = $sessionStorage.townToBeManipulated;
		$scope.town.name = $scope.town.username;
		// console.log($scope.town);
		if (!$scope.town) {
			notify.error('An error occured while loading town.');
		}
	}
	loadTown();

	$scope.editTown = function (town) {
		admin.editTown(
			town.id,
			town,
			function success() {
				notify.info('Town edited!');
				$location.path('/admin/towns');
			},
			function error(error) {
				notify.error('An error occured while editing town.', error);
			}
		);
	}
}]);