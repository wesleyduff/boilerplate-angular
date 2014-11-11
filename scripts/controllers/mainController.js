app //gain access to our angular app

/* 
This controller is a base controller and is set
on the <main> DOM tag.
Use this controller for root like scope that is namespaced away from the global namespace.
*/
.controller('MainController', ['$scope', 'firebaseFactory', 'OAuthFactory', '$timeout', function($scope, firebaseFactory, OAuthFactory, $timeout){
	/*remove this when you are ready to start development
	-also check test/specs/controllerSpecs/boilerplate.js and remove this file. It is there to give you piece of mind when you first clone this repository.
	*/
	$scope.user;
	$scope.boilerplate = [
		"testing to make sure everything is wired up and ready to go!"
	];

	$scope.loadFacebook = function(){
		OAuthFactory.loadFacebook(function(){
			$scope.user = OAuthFactory.user;
			$scope.$apply();
		});
	};

	//setup firebase
	firebaseFactory.init();

	$scope.$on('facebookLoginClick', function(event, message){
		$scope.loadFacebook();
	});

	
}]);