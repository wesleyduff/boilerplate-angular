app

.factory('firebaseFactory', ['$firebase', function($firebase){
	return {
		init: function(){
			//init firebase
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
		}
	}
}]);
