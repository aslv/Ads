adsApp.controller('UserPublishNewAdController', ['$scope', '$location', 'user', 'categories', 'towns', 'notify', function($scope, $location, user, categories, towns, notify) {
	$scope.adData = { townId: null, categoryId: null };
	towns.getTowns()
		.$promise
		.then(
			function success(data) {
				$scope.towns = data;
			},
			function error(error) {
				notify.error('An error occured while loading towns.', error);
			}
		);
	categories.getCategories()
		.$promise
		.then(
			function success(data) {
				$scope.categories = data;
			},
			function error(error) {
				notify.error('An error occured while loading categories.', error);
			}
		);
	$scope.publish = function (adData) {
		user.publishNewAd(
			adData,
			function success(data) {
				notify.info('Ad successfully sent for administrator\'s approval.');
				$location.path('/user/ads');
			},
			function error(error) {
				notify.error('An error occured sending ad for administrator\'s approval.', error);
			}
		);
	}
	$scope.fileSelected = function (fileInput) {
		delete $scope.adData.imageDataUrl;
	    var file = fileInput.files[0];
	    if (!file) {
	    	$('#upload-image').html('<img src="images/no-img.png" />');
	    	return;
	    }
	    if (file.type.match(/image\/.*/)) {
	        var reader = new FileReader();
	        reader.onload = function() {
	            $scope.adData.imageDataUrl = reader.result;
	            $('#upload-image').html('<img src="' + reader.result + '" />');
	        };
	        reader.readAsDataURL(file);
	    } else {
	        notify.error('Uploaded file type not supported.');
	    }
	}
}]);