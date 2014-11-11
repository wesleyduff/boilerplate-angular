app //get access to app

.directive('oauthDirect', function(){
	return {
		restrict: 'AE',
		transclude: true,
		replate: false,
		scope: {
			loadFacebook: '&'
		},
		link: function(scope, element, attrs){
			scope.$on('facebookLoginClick', function(event, message){
				console.dir(event);
				console.log(message);
			});
			//scope.loadFacebook();
		}
	}
});