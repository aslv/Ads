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
		},
		approveAd: function (id, success, error) {
			var request = {
                method: 'PUT',
                url: baseUrl + 'admin/ads/approve/' + id,
                headers: user.getAuthHeaders(),
            };
            $http(request).success(success).error(error);
		},
		rejectAd: function (id, success, error) {
			var request = {
                method: 'PUT',
                url: baseUrl + 'admin/ads/reject/' + id,
                headers: user.getAuthHeaders(),
            };
            $http(request).success(success).error(error);
		}
	};
}]);