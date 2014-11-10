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

		}
	]);


})();
