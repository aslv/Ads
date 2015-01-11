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
		},
		getAdById: function (id, success, error) {
			var request = {
                method: 'GET',
                url: baseUrl + 'admin/ads/' + id,
                headers: user.getAuthHeaders()
            };
            $http(request).success(success).error(error);
		},
		editAd: function (id, adData, success, error) {
			var request = {
                method: 'PUT',
                url: baseUrl + 'admin/ads/' + id,
                headers: user.getAuthHeaders(),
                data: adData
            };
            $http(request).success(success).error(error);
		},
		deleteAd: function (id, success, error) {
            var request = {
                method: 'DELETE',
                url: baseUrl + 'admin/ads/' + id,
                headers: user.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
		getAllUsers: function (params, success, error, loaded) {
			var request = {
                method: 'GET',
                url: baseUrl + 'admin/users',
                headers: user.getAuthHeaders(),
                params: params
            };
            $http(request)
                .then(success, error)
                .finally(loaded);
		},
		editUserProfile: function (userName, userData, success, error) {
            var request = {
                method: 'PUT',
                url: baseUrl + 'admin/user/' + userName,
                headers: user.getAuthHeaders(),
                data: userData
            };
            $http(request).success(success).error(error);
        },
        changeUserPassword: function(userData, success, error) {
            var request = {
                method: 'PUT',
                url: baseUrl + 'admin/setpassword',
                headers: user.getAuthHeaders(),
                data: userData
            };
            $http(request).success(success).error(error);
        },
        deleteUser: function (userName, success, error) {
        	var request = {
                method: 'DELETE',
                url: baseUrl + 'admin/user/' + userName,
                headers: user.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        getAllCategories: function (params, success, error, loaded) {
        	var request = {
                method: 'GET',
                url: baseUrl + 'admin/categories',
                headers: user.getAuthHeaders(),
                params: params
            };
            $http(request)
                .then(success, error)
                .finally(loaded);
        },
        createCategory: function (categoryData, success, error) {
        	var request = {
                method: 'POST',
                url: baseUrl + 'admin/categories',
                headers: user.getAuthHeaders(),
                data: categoryData
            };
            $http(request).success(success).error(error);
        },
        editCategory: function (categoryId, categoryData, success, error) {
        	var request = {
                method: 'PUT',
                url: baseUrl + 'admin/categories/' + categoryId,
                headers: user.getAuthHeaders(),
                data: categoryData
            };
            $http(request).success(success).error(error);
        },
        deleteCategory: function (categoryId, success, error) {
        	var request = {
                method: 'DELETE',
                url: baseUrl + 'admin/categories/' + categoryId,
                headers: user.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        getAllTowns: function (params, success, error, loaded) {
        	var request = {
                method: 'GET',
                url: baseUrl + 'admin/towns',
                headers: user.getAuthHeaders(),
                params: params
            };
            $http(request)
                .then(success, error)
                .finally(loaded);
        },
        createTown: function (townData, success, error) {
        	var request = {
                method: 'POST',
                url: baseUrl + 'admin/towns',
                headers: user.getAuthHeaders(),
                data: townData
            };
            $http(request).success(success).error(error);
        },
        editTown: function (townId, townData, success, error) {
        	var request = {
                method: 'PUT',
                url: baseUrl + 'admin/towns/' + townId,
                headers: user.getAuthHeaders(),
                data: townData
            };
            $http(request).success(success).error(error);
        },
        deleteTown: function (townId, success, error) {
        	var request = {
                method: 'DELETE',
                url: baseUrl + 'admin/towns/' + townId,
                headers: user.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        }
	};
}]);