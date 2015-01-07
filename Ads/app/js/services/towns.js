adsApp.factory('towns', ['$resource', 'baseUrl', function ($resource, baseUrl) {
	var townsResource = $resource(baseUrl + 'towns');

	function getAllTowns() {
		return townsResource.query();
	}

	return {
		getTowns: getAllTowns
	};
}]);