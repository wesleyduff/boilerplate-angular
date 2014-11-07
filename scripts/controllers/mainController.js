app //gain access to our angular app

/* 
This controller is a base controller and is set
on the <main> DOM tag.
Use this controller for root like scope that is namespaced away from the global namespace.
*/
.controller('MainController', ['$scope', '$firebase', function($scope, $firebase){
	/*remove this when you are ready to start development
	-also check test/specs/controllerSpecs/boilerplate.js and remove this file. It is there to give you piece of mind when you first clone this repository.
	*/
	$scope.boilerplate = [
		"testing to make sure everything is wired up and ready to go!"
	];

	/*
	Setup Firebase : AngluarFire
	*/
	var ref = new Firebase("https://boilerplate-angular.firebaseio.com/"); //chnage this to your firebase link.
    var sync = $firebase(ref);

    // replace the entire node with new data
	sync.$set({foo: "bar"});

	// add a new child node
	sync.$push({hello: "world"}).then(function(newChildRef) {
  		console.log("added record with id " + newChildRef.name());
	});
}]);