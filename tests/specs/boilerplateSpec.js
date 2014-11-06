describe("Make sure everything is wired up", function(){
	
	var _scope;

	beforeEach(module('app')); //gain access to our app

	beforeEach($inject($rootScope, $controller){
		_scope = $rootScope.$new();
		$controller('MainController', {$scope: _scope});
	});

	it("Should have a length of 1 in our scope boilerplate variable.", function(){
		expect($scope.boilerplate.length).toBe(1);
	});

});