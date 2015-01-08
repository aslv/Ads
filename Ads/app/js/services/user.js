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
        deactivateAd: function () {
            // TODO:
        },
        publishAdAgain: function () {
            // TODO:
        }
	};
}]);