adsApp.controller('AdminDeleteCategoryController', ['$scope', '$location', '$sessionStorage', 'admin', 'user', 'notify', function ($scope, $location, $sessionStorage, admin, user, notify) {
	
	function loadCategory() {
		$scope.category = $sessionStorage.categoryToBeManipulated;
		$scope.category.name = $scope.category.username;
		// console.log($scope.category);
		if (!$scope.category) {
			notify.error('An error occured while loading category.');
		}
	}
	loadCategory();

	$scope.deleteCategory = function (category) {
		admin.deleteCategory(
			category.id,
			function success() {
				notify.info('Category deleted!');
				$location.path('/admin/categories');
			},
			function error(error) {
				notify.error('An error occured while deleting category.', error);
			}
		);
	}
}]);