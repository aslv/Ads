adsApp.controller('AdminCreateCategoryController', ['$scope', '$location', '$sessionStorage', 'admin', 'user', 'notify', function ($scope, $location, $sessionStorage, admin, user, notify) {
	$scope.createCategory = function (category) {
		admin.createCategory(
			category,
			function success() {
				notify.info('Category created!');
				$location.path('/admin/categories');
			},
			function error(error) {
				notify.error('An error occured while creating category.', error);
			}
		);
	}
}]);