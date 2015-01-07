adsApp.factory('categories', ['$resource', 'baseUrl', function ($resource, baseUrl) {
	var categoryResource = $resource(baseUrl + 'categories');
	
	function getAllCategories() {
		return categoryResource.query();
	}

	return {
		getCategories: getAllCategories
	};
}]);