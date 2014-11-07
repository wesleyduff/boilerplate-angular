describe("Expenses Controller", function(){
    
    var $scope;
    
    beforeEach(function(){
    	module("app");
    	module(function($provide){
    		$provide.value('firebaseFactory', {
    			init: function(){
    				return {};
    			}
    		});
    	});
    });
    
    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('MainController', {$scope: $scope});
    }));
    
    it('Should have one items', function() {
        expect($scope.boilerplate.length).toBe(1);
    });
    
});