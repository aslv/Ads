adsApp.controller('RightSidebarController', ['$scope', 'categories', 'towns', 'notify', function($scope, categories, towns, notify) {
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
	}
}]);