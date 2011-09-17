/*
 * FolkRadio.dk - http://folkradio.dk/
 * Copyright 2011 by Kamil "Brego" Dzieliński <brego.dk@gmail.com>
 *
 * Feel free to use & modify, but drop me an email ;)
 **/

var Player = {
	state: null,

	init: function() {
		console.log('Player initiated');
		return false;
	},

	play: function(callback) {
		console.log('Player.play() called');
		setTimeout(function() { Player.state = 'playing'; return callback(); }, 1500);
	},

	stop: function(callback) {
		console.log('Player.stop() called');
		setTimeout(function() { Player.state = 'stopped'; return callback(); }, 1500);
	},

	change_volume: function(value) {

	}
};
