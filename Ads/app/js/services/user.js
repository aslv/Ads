adsApp.factory('user', ['$http', 'baseUrl', function ($http, baseUrl) {
	return {
		login: function(userData, success, error) {
            // TODO
        },
        register: function(userData, success, error) {
            // TODO
        },
        logout: function() {
            // TODO
        },
        getCurrentUser : function() {
            // TODO
        },
        isAnonymous : function() {
            // TODO
            return true;
        },
        isLoggedIn : function() {
            // TODO
            return false;
        },
        isNormalUser : function() {
            return false;
            // TODO
        },
        isAdmin : function() {
            return false;
            // TODO
        },
        getAuthHeaders : function() {
            // TODO
        }
	};
}]);