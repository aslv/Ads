adsApp.controller('AdminEditAdController', ['$scope', '$location', '$routeParams', 'admin', 'categories', 'towns', 'notify', function($scope, $location, $routeParams, admin, categories, towns, notify) {
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
	
	// setting inputs
	loadCurrentAd($scope.adId);

	$scope.editAd = function(adData) {
		if ($scope.imageChanged) {
			$scope.adData.changeImage = true;
			if ($scope.imageDeleted) {
				delete $scope.adData.imageDataUrl;
			}
		}
		else {
			$scope.adData.changeImage = false;
		}
		admin.editAd(
			$scope.adId,
			$scope.adData,
			function success() {
				notify.info('Ad successfully editted!');
				$location.path('/admin/ads');
			},
			function error(error) {
				notify.error('An error occured while editting ad.', error);
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
	$scope.changeImage = function () {
		$scope.imageChanged = true;
		$('#image-changed').text('Upload File');
		$('#upload-image').html('<img src="images/no-img.png" />');
	}
	$scope.deleteImage = function () {
		$scope.imageDeleted = true;
		$scope.imageChanged = true;
		$('#image-deleted').text('Image Deleted');
		$('#upload-image').html('<img src="images/no-img.png" />');
	}

	function loadCurrentAd(id) {
		admin.getAdById(
			id,
			function success(data) {
				// console.log(data);
				$scope.adData = data;
			},
			function error(error) {
				notify.error('An error occured while loading ad.', error);
			}
		);
	}
}]);