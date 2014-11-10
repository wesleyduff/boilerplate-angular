'use strict';


window.config = window.config || {
	store: {},
	add: function(name, value){
		this.store[name] = value;
	},
	get: function(name){
		return this.store[name];
	},
	delete: function(name) {
		delete this.store[name];
	}
};

//turn on or off debugging
window.config.add('debug', true); //set to false to turn off debugging logs

/*
NOTE *
Moving all login etc.. over to OAuth 2.0
*/

window.config.add('googleClientId', 'YOUR GOOGLE CLIENT ID');

window.config.add('facebookAppId', 'YOUR FACEBOOK APP ID');