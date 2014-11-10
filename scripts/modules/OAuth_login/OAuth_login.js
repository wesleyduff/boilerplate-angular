(function(window, angular){
	/*
	 * @author
	 * Wes Duff
	 */
	angular.module("OAuthModule", [])
	
	.provider('OAuthService', function OAuthServiceProvider() {
		var appId = false,
			flags = {
				ready : false
			};

		this.addAppId = function(value, loadSDK) {
			// Asynchronously load the OAuth.js file
			var self = this;
			if(loadSDK){
				(function injectScript(){
					var src = '/scripts/modules/OAuth_login/OAuth.js',
						script = document.createElement('script');
						script.async = true;
						script.src = src;
						script.onload = function(){
							if(window.config.get('debug')){
								console.log('Script OAUth.js loaded');
							}

							init();
						}

						document.getElementsByTagName('head')[0].appendChild(script);
				})();


			} else {
				init();
			}
			
			function init(){
				if(typeof OAuth != 'undefined'){
					OAuth.initialize(value);
				} else {
					if(config.get('debug'))
						console.log('OAuth was not set');
				}
			};
		
		};

		this.$get = ["OAuthConfig", function OAuthServiceFactory(apiToken) {

	  		return new OAuthService(OAuthConfig, addAppId);
		}];
	});
})(window, angular);
