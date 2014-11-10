(function(window, angular, undefined){
	'use strict';

	var settigns = {},
		flags = {
			sdk: false,
			ready: false
		},
		//Deferred Object wheich will be resolved when the Facebook SDK is ready.
		//and the 'fbAsyncInit' function is called
		loadDefferred;

	/**
	 * @name facebook
	 * @description
	 * An Angularjs module apporach to the Facebook JavaScript SDK.
	 *
	 * @author
	 * Wes Duff - help : Ciul/angular-facbook ; written by Luis Carlos Osorio and Jayk
	 */
	 angular.module('OAuth', [])

	 /*
		inject the js needed to run OAuth.

	 */
	 .config(function(){
	 	// Asynchronously load the OAuth.js file
    		var po = document.createElement('script'); 
    			po.type = 'text/javascript'; 
    			po.async = true;
    			po.defer = true;
    			po.src = 'scripts/modules/OAuth_login/OAuth.js';
    		var s = document.getElementsByTagName('script')[0]; 
    		s.parentNode.insertBefore(po, s);
  		})();

	 })

	 // Decalre module settings value
	.value('settings', settings)

	// Decalre module flags value
	.value('flags', flags)

	/*
	* Facebook Provider
	*/
	.provider('OAuthProvider', [
		function(){

			if(typeof OAuth !== 'undefined'){

				/**
				* Facebook appId
				* @type {Number}
				*/
		        settings.appId = null;

		        this.setAppId = function(appId) {
					settings.appId = appId;
				};

				this.getAppId = function() {
					return settings.appId;
				};

				/**
		         * Set if you want to check the authentication status
		         * at the start up of the app
		         * @type {Boolean}
		         */
		        settings.status = true;

		        this.setStatus = function(status) {
		          settings.status = status;
		        };

		        this.getStatus = function() {
		          return settings.status;
		        };


		        this.init = function(initSettings, _loadSDK){

		        	if(angular.isStriing(initSettings)){
		        		settings.appId = initSettings;
		        	}

		        	if(angular.isNumber(initSettings)){
		        		settings.appId = initSettings.toString();
		        	}

		        	if(angular.isObject(initSettings)){
		        		angular.extend(settings, initSettings);
		        	}

		        	// Set if OAuth SDK should be loaded automatically or not
		        	if(angular.isDefined(_loadSDK)){
		        		settings.loadSDK = !!_loadSDK;
		        	}

		        	/* 
	        		* This is the NgOAuth class to be retrieved on Facebook Service request.
	        		*/
	        		OAuth.initialize(settings.appId);

		        };



			} else {
				if(config.get('debug')){
					throw "OAuth is not set. Check to make sure OAuth.js has been loaded";
				}
			}
		} //END of provider
	);

	})(window, angular, undefined);