adsApp.controller('UserAdsStatusFilterController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.statusClicked = function (clickedStatus) {
		$scope.selectedStatus = clickedStatus;
		$rootScope.$broadcast('statusSelected', clickedStatus);
	}
}]);