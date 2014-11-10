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

window.config.add('googleClientId', '684961735644-bionqsdul2b7d8mfd8o16cm5f0nt2212.apps.googleusercontent.com');

window.config.add('facebookAppId', '1505800903037749');