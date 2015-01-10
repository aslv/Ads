adsApp.controller('AdminDeleteAdController', ['$scope', '$location', '$routeParams', 'admin', 'user', 'categories', 'towns', 'notify', function($scope, $location, $routeParams, admin, user, categories, towns, notify) {
	$scope.adId = $routeParams.adId;

	// setting inputs
	loadCurrentAd($scope.adId);

	$scope.deleteAd = function() {
		admin.deleteAd(
			$scope.adId,
			function success() {
				notify.info('Ad successfully deleted!');
				$location.path('/user/ads');
			},
			function error(error) {
				notify.error('An error occured while deleting ad.', error);
			}
		);
	}
	
	function loadCurrentAd(id) {
		admin.getAdById(
			id,
			function success(data) {
				$scope.adData = data;
			},
			function error(error) {
				notify.error('An error occured while loading ad.', error);
			}
		);
	}
}]);