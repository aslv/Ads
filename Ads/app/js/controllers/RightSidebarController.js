adsApp.controller('RightSidebarController', ['$scope', '$rootScope', 'categories', 'towns', 'notify', function($scope, $rootScope, categories, towns, notify) {
	$scope.categoriesLoading = true;
	$scope.townsLoading = true;

	categories.getCategories()
		.$promise
		.then(
			function success(data) {
				$scope.categories = data;
			},
			function error(error) {
				notify.error('An error occured while loading categories.', error);
			}
		)
		.finally(
			function categoriesLoaded() {
				$scope.categoriesLoading = false;
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
		)
		.finally(
			function townsLoaded() {
				$scope.townsLoading = false;
			}
		);
	$scope.townClicked = function (clickedTownId) {
		$scope.selectedTownId = clickedTownId;
		$rootScope.$broadcast('townSelected', clickedTownId);
	}
}]);