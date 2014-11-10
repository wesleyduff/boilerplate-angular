var login_module = angular.module('login', [])

/* 
Create the google sign in directive
- allows the user to register or signin to use this app

Step 1: Create a client ID and client secret.
Step 2: Include the Google+ script on your page.
Step 3: Choose your OAuth scopes.
Step 4: Add a sign-in button to your page.
Step 5: Handle the sign in with a JavaScript callback.

*/
//google sign in
.directive('googleSignIn', function(){
	return {
		restrict : "AE",
		templateUrl: 'templates/google_sign_in.html',
		scope: {},
		replace: true,
		transclude: true,
		link: function(scope, element, attrs){

			var settings = {
				scope: 'https://www.googleapis.com/auth/plus.login',
				callback: 'googleSigninCallback',
				cookiepolicy: "single_host_origin",
				requestvisibleactions: "http://schema.org/AddAction"
			}

			//create client id
			if(window.config != 'undefined'){

				attrs.$set('data-clientid', config.get('googleClientId'));

			} else {

				if(config.store.debug)
					throw "Your google security key is not set in your config file.";
				
				return false;
				
			}


			if(settings.clinetId !== null && settings.clientSecret !== null){

				angular.forEach(Object.getOwnPropertyNames(settings), function(name){

					if(!attrs.hasOwnProperty(name)){
						attrs.$set('data-' + name, settings[name]);
					}
				});

				// Asynchronously load the G+ SDK.
				(function() {
	        		var po = document.createElement('script'); 
	        			po.type = 'text/javascript'; 
	        			po.async = true;
	        			po.defer = true;
	        			po.src = 'https://apis.google.com/js/client:platform.js';
	        		var s = document.getElementsByTagName('script')[0]; 
	        		s.parentNode.insertBefore(po, s);
	      		})();

			} else {

				if (config.store.debug)
					throw "Google client ID and/or Secrete not set in config file";
				
				return false;
			}
			
		}
	}
})
//facebook sign in
.directive('facebookSignIn', function(){
	return {
		restrict : "AE",
		templateUrl: "templates/facebook_sign_in.html",
		link: function(scope, element, attrs){
			//perform work
		}
	}
})
//custom signin
.directive('customSignIn', function(){
	return {
		restrict: "AE",
		templateUrl: "templates/custom_sign_in.html",
		link: function(scope, element, attrs){
			//peform work
		}
	}
})

.run(['$window','$rootScope',function($window, $rootScope) {
  $window.googleSigninCallback = function (authResult) {
    if (authResult['status'] && authResult['status']['signed_in']) {
      $rootScope.$broadcast('event:google-plus-signin-success', authResult);
    } else {
      $rootScope.$broadcast('event:google-plus-signin-failure', authResult);
    }
  }; 
}]);