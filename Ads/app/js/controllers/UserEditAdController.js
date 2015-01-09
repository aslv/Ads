adsApp.controller('UserEditAdController', ['$scope', '$location', '$routeParams', 'user', 'categories', 'towns', 'notify', function($scope, $location, $routeParams, user, categories, towns, notify) {
	$scope.imageChanged = false;
	$scope.imageDeleted = false;
	$scope.adId = $routeParams.adId;

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
	$scope.editAd = function(adData) {
		loadCurrentAd($scope.adId);
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
	$scope.changeImage = function () {
		$scope.imageChanged = true;
	}
	$scope.deleteImage = function () {
		$scope.imageDeleted = true;
	}

	function loadCurrentAd(id) {
		user.getAdById(
			id,
			function success(data) {
				console.log(data);
				$scope.adData = data;
			},
			function error(error) {
				notify.error('An error occured while loading ad.', error);
			}
		);
	}
}]);