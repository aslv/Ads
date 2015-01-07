adsApp.controller('RightSidebarController', ['$scope', '$rootScope', 'categories', 'towns', 'notify', function($scope, $rootScope, categories, towns, notify) {
	categories.getCategories()
		.$promise
		.then(
			function success(data) {
				$scope.categories = data;
			},
			function error(error) {
				notify.error('An error occured while loading categories.', error);
			}
		);
	$scope.categoryClicked = function (clickedCategoryId) {
		$scope.selectedCategoryId = clickedCategoryId;
		$rootScope.$broadcast('categorySelected', clickedCategoryId);
	}
	
	towns.getTowns()
		.$promise
		.then(
			function success(data) {
				$scope.towns = data;
			},
			function error(error) {
				notify.error('An error occured while loading towns.', error);
			}
		);
	$scope.townClicked = function (clickedTownId) {
		$scope.selectedTownId = clickedTownId;
		$rootScope.$broadcast('townSelected', clickedTownId);
	}
}]);