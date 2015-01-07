adsApp.controller('HomeController', ['$scope', '$rootScope', 'ads', 'notify', function ($scope, $rootScope, ads, notify) {
	$scope.adsParams = {
		'startPage': 1,
		'pageSize': 10
	};
	$scope.reloadAds = function () {
		loadAds($scope.adsParams);
	}
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