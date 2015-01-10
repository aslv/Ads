adsApp.factory('user', ['$http', '$sessionStorage', 'baseUrl', function ($http, $sessionStorage, baseUrl) {
	return {
        // IO actions
		login: function(userData, success, error) {
            var request = {
                method: 'POST',
                url: baseUrl + 'user/login',
                data: userData
            };
            $http(request)
                .success(function (data) {
                    $sessionStorage.adsUser = data;
                    success(data);
                })
                .error(error);
        },
        register: function(userData, success, error) {
            var request = {
                method: 'POST',
                url: baseUrl + 'user/register',
                data: userData
            };
            $http(request)
                .success(function (data) {
                    $sessionStorage.adsUser = data;
                    success(data);
                })
                .error(error);
        },
        logout: function() {
            delete $sessionStorage.adsUser;
        },
        // authentications
        getCurrentUser : function() {
            return $sessionStorage.adsUser;
        },
        isAnonymous : function() {  
            return this.getCurrentUser() == undefined;
        },
        isLoggedIn : function() {
            return !this.isAnonymous();
        },
        isNormalUser : function() {
            return this.isLoggedIn() && (!this.getCurrentUser().isAdmin);
        },
        isAdmin : function() {
            return this.isLoggedIn() && (!!this.getCurrentUser().isAdmin);
        },
        getAuthHeaders : function() {
            var headers = {};
            var currentUser = this.getCurrentUser();
            if (currentUser) {
                headers.Authorization = 'Bearer ' + currentUser.access_token;
            }
            return headers;
        },
        // publish actions
        publishNewAd: function (adData, success, error) {
            var request = {
                method: 'POST',
                url: baseUrl + 'user/ads',
                headers: this.getAuthHeaders(),
                data: adData
            };
            $http(request).success(success).error(error);
        },
        getUserAds: function (params, success, error, loaded) {
            var request = {
                method: 'GET',
                url: baseUrl + 'user/ads',
                headers: this.getAuthHeaders(),
                params: params
            };
            // $http(request).success(success).error(error);
            $http(request)
                .then(success, error)
                .finally(loaded);
        },
        deactivateAd: function (id, success, error) {
            var request = {
                method: 'PUT',
                url: baseUrl + 'user/ads/deactivate/' + id,
                headers: this.getAuthHeaders(),
            };
            $http(request).success(success).error(error);
        },
        publishAdAgain: function (id, success, error) {
            var request = {
                method: 'PUT',
                url: baseUrl + 'user/ads/publishagain/' + id,
                headers: this.getAuthHeaders(),
            };
            $http(request).success(success).error(error);
        },
        getAdById: function (id, success, error) {
             var request = {
                method: 'GET',
                url: baseUrl + 'user/ads/' + id,
                headers: this.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        editAd: function (id, adData, success, error) {
            var request = {
                method: 'PUT',
                url: baseUrl + 'user/ads/' + id,
                headers: this.getAuthHeaders(),
                data: adData
            };
            $http(request).success(success).error(error);
        },
        deleteAd: function (id, success, error) {
            var request = {
                method: 'DELETE',
                url: baseUrl + 'user/ads/' + id,
                headers: this.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        getUserProfile: function (success, error) {
            var request = {
                method: 'GET',
                url: baseUrl + 'user/profile',
                headers: this.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        editUserProfile: function (userData, success, error) {
            var request = {
                method: 'PUT',
                url: baseUrl + 'user/profile',
                headers: this.getAuthHeaders(),
                data: userData
            };
            $http(request).success(success).error(error);
        },
        changeUserPassword: function(userData, success, error) {
            var request = {
                method: 'PUT',
                url: baseUrl + 'user/changepassword',
                headers: this.getAuthHeaders(),
                data: userData
            };
            $http(request).success(success).error(error);
        }
	};
}]);