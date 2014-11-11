app

.factory('OAuthFactory',  function(){
	return {
		isUserLoggedIn : false,
		user : {
			avatar: null,
			email: null,
			name: null
		},
		loadFacebook: function(callback){
			var self = this;
			if(typeof OAuth === 'object') {
				//Authorize your user to facebook
				OAuth.popup('facebook').done(function(facebook) {
    				//Get your user's personal data
    				facebook.me().done(function(me) {
        				self.isUserLoggedIn = true;
        				self.user.avatar = me.avatar;
        				self.user.email = me.email;
        				self.user.name = me.name;
        				callback.call();
    				});
    				
				})
			} else {
				if(window.config.get("debug")){
					throw "OAuth is not set and cannot be used in the service OAuthFactory";
				}
			}
		}
	}
});
