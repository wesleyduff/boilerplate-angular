/* Angular APP entry Point */
var app = angular.module("app", ['firebase', 'OAuthModule'])

.config(["OAuthServiceProvider", function(OAuthServiceProvider) {
	/*
	* Params 
	* TYPE {String} : https://oauth.io/ to get your api key
	* TYPE {Boolean} : Set to true to dynamically load OAuth.js or else set it to false and load it yourself manually
	*/
	OAuthServiceProvider.addAppId('5i6jjRTYhHHMAwqCb3qsAqyRcVY', true);
}]);