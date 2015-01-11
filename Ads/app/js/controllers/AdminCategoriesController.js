adsApp.controller('AdminCategoriesController', ['$scope', '$location', '$sessionStorage', 'admin', 'user', 'notify', function ($scope, $location, $sessionStorage, admin, user, notify) {
	$scope.categoriesParams = {
		'startPage': 1,
		'pageSize': 10
	};
	$scope.reloadCategories = function () {
		loadCategories($scope.categoriesParams);
	}

	$scope.sortBy = function (param) {
		if (param) {
			$scope.categoriesParams.sortBy = param;
		}
		else {
			delete $scope.categoriesParams.sortBy;
		}
		$scope.reloadCategories();
	}
	
	$scope.editCategory = function (category) {
		$sessionStorage.categoryToBeManipulated = category;
		// console.log('/admin/categories/edit/' + category.id);
		$location.path('/admin/categories/edit/' + category.id);
	}

	$scope.deleteCategory = function (category) {
		$sessionStorage.categoryToBeManipulated = category;
		$location.path('/admin/categories/delete/' + category.id);
	}
	
	$scope.reloadCategories();
	
	function loadCategories(params) {
		$scope.categoriesLoading = true;
		admin.getAllCategories(
			params,
			function success(data) {
				// console.log(data.data);
				$scope.categories = data.data;
			},
			function error(error) {
				notify.error('An error occured while loading categories.', error);
			},
			function loaded() {
				$scope.categoriesLoading = false;
			}
		);
	}
}]);