adsApp.controller('HomeController', ['$scope', '$rootScope', 'ads', 'notify', function ($scope, $rootScope, ads, notify) {
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
	
	$scope.reloadAds();
	
	function loadAds(params) {
		ads.getAds(
		params,
		function success(data) {
			$scope.ads = data;
		},
		function error(error) {
			notify.error('An error occured while loading ads.', error);
		});
	}
}]);