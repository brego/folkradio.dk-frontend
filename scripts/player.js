/*
 * FolkRadio.dk - http://folkradio.dk/
 * Copyright 2011 by Kamil "Brego" Dzieliński <brego.dk@gmail.com>
 *
 * Feel free to use & modify, but drop me an email ;)
 **/

var Player = {
	state:              null,
	container:          null,

	init: function(container, media) {
		log('Player initiated');
		this.container = $(container);
		
		this.container.jPlayer({
			ready: function() {
				Player.container.jPlayer('setMedia', media)
			},
			swfPath: "/frontend/flash/player.swf",
			supplied: "mp3",
			solution: 'html, flash',
			volume: 0.5,
			preload: auto,
			wmode: "window"
		});
		
		
		return false;
	},

	play: function(callback) {
		log('Player.play() called');
		Player.state = 'playing';
		
		this.container.bind($.jPlayer.event.playing, function(event) {
			callback(event);
		});
		this.container.jPlayer('play');
	},

	stop: function(callback) {
		log('Player.stop() called');
		Player.state = 'stopped';
		
		this.container.jPlayer('stop');
		callback();
	},

	volume: function(value) {
		this.container.jPlayer('volume', value);
	}
};
