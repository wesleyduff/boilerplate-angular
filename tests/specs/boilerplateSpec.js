describe("Expenses Controller", function(){
    
    var $scope;
    
    beforeEach(module("app"));
    
    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('MainController', {$scope: $scope});
    }));
    
    it('should have three epense items', function() {
        expect($scope.boilerplate.length).toBe(1);
    });
    
    
});