adsApp.factory('ads', ['$resource', 'baseUrl', function ($resource, baseUrl) {
	var adsResource = $resource(baseUrl + 'ads', null, { 'getAll': { method: 'GET' } });
	
	function getAllAds(params, success, error) {
		return adsResource.getAll(params, success, error);
	}
	return {
		getAds: getAllAds
	};
}]);