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

	angular.module('facebook', [])

	// Decalre module settings value
	.value('settings', settings)

	// Decalre module flags value
	.value('flags', flags)

	/*
	* Facebook Provider
	*/
	.provider('Facebook', [
		function(){

			/*
			* Facebook App Id
			* @type {Number}
			*/
			settings.appId = window.config.get('facebookAppId');

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


		}
	]);


})();
