adsApp.controller('UserAdsController', ['$scope', '$rootScope', 'user', 'notify', function ($scope, $rootScope, user, notify) {
	$scope.adsParams = {
		'startPage': 1,
		'pageSize': 10
	};
	$scope.reloadAds = function () {
		loadAds($scope.adsParams);
	}
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
	
	$scope.reloadAds();
	
	function loadAds(params) {
		$scope.adsLoading = true;
		user.getUserAds(
			params,
			function success(data) {
				$scope.ads = data.data;
			},
			function error(error) {
				notify.error('An error occured while loading ads.', error);
			},
			function loaded() {
				$scope.adsLoading = false;
			}
		);
	}
}]);