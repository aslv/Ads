adsApp.controller('AdminCreateTownController', ['$scope', '$location', '$sessionStorage', 'admin', 'user', 'notify', function ($scope, $location, $sessionStorage, admin, user, notify) {
	$scope.createTown = function (town) {
		admin.createTown(
			town,
			function success() {
				notify.info('Town created!');
				$location.path('/admin/towns');
			},
			function error(error) {
				notify.error('An error occured while creating town.', error);
			}
		);
	}
}]);