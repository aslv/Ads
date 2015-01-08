adsApp.factory('ads', ['$resource', 'baseUrl', function ($resource, baseUrl) {
	var adsResource = $resource(baseUrl + 'ads', null, { 'getAll': { method: 'GET' } });
	
	function getAllAds(params, success, error, loaded) {
		// return adsResource.getAll(params, success, error);
		adsResource
			.getAll(params)
			.$promise
			.then(success, error)
			.finally(loaded);
	}
	return {
		getAds: getAllAds
	};
}]);