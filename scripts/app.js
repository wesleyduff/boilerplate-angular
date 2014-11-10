/* Angular APP entry Point */
var app = angular.module("app", ["firebase", "OAuth"])

.config(function(OAuthProvider){

	//Visit https://oauth.io to create an account and gain access to your API key
	OAuthProvider.init('YOUR_APP_ID');

});