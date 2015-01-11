adsApp.controller('AdminEditCategoryController', ['$scope', '$location', '$sessionStorage', 'admin', 'user', 'notify', function ($scope, $location, $sessionStorage, admin, user, notify) {
	
	function loadCategory() {
		$scope.category = $sessionStorage.categoryToBeManipulated;
		$scope.category.name = $scope.category.username;
		// console.log($scope.category);
		if (!$scope.category) {
			notify.error('An error occured while loading category.');
		}
	}
	loadCategory();

	$scope.editCategory = function (category) {
		admin.editCategory(
			category.id,
			category,
			function success() {
				notify.info('Category edited!');
				$location.path('/admin/categories');
			},
			function error(error) {
				notify.error('An error occured while editing category.', error);
			}
		);
	}
}]);