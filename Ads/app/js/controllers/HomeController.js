adsApp.controller('HomeController', ['$scope', '$rootScope', 'ads', 'notify', function($scope, $rootScope, ads, notify) {
	ads.getAds(
	null,
	function success(data) {
		$scope.ads = data;
	},
	function error(error) {
		notify.error('An error occured while loading ads.', error);
	});
}]);