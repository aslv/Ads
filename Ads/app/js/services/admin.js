adsApp.factory('admin', ['$http', '$sessionStorage', 'user', 'baseUrl', function ($http, $sessionStorage, user, baseUrl) {
	return {
		getAds: function (params, success, error, loaded) {
			var request = {
                method: 'GET',
                url: baseUrl + 'admin/ads',
                headers: user.getAuthHeaders(),
                params: params
            };
            $http(request)
                .then(success, error)
                .finally(loaded);
		}
	};
}]);