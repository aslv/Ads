adsApp.factory('notify', function () {
	return {
		info: function (message) {
			noty({
                text: message,
                type: 'info',
                // type: 'success',
                layout: 'topCenter',
                timeout: 1500
            });
		},
        warn: function (message) {
            noty({
                text: message,
                type: 'warn',
                layout: 'topCenter',
                timeout: 1500
            });
        },
		error: function (message, serverError) {
			var errors = [];
            if (serverError && serverError.error_description) {
                errors.push(serverError.error_description);
            }
            if (serverError && serverError.modelState) {
                var modelStateErrors = serverError.modelState;
                for (var propertyName in modelStateErrors) {
                    var errorMessages = modelStateErrors[propertyName];
                    var trimmedName =
                        propertyName.substr(propertyName.indexOf('.') + 1);
                    for (var i = 0; i < errorMessages.length; i++) {
                        var currentError = errorMessages[i];
                        errors.push(trimmedName + ' - ' + currentError);
                    }
                }
            }
            if (errors.length > 0) {
                message = message + '<br>Server responded:<br>' + errors.join('<br>');
            }
            noty({
                text: message,
                type: 'error',
                layout: 'topCenter',
                timeout: 3500
            });
		}
	};
});