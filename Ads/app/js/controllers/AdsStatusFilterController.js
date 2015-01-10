// used by both users and admins

adsApp.controller('AdsStatusFilterController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.statusClicked = function (clickedStatus) {
		$scope.selectedStatus = clickedStatus;
		$rootScope.$broadcast('statusSelected', clickedStatus);
	}
}]);