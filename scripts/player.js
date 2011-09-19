/*
 * FolkRadio.dk - http://folkradio.dk/
 * Copyright 2011 by Kamil "Brego" Dzieliński <brego.dk@gmail.com>
 *
 * Feel free to use & modify, but drop me an email ;)
 **/

var Player = {
	state:     null,
	container: null,
	solution:  null,   

	init: function(container, media) {
		log('Player initiated');
		this.container = $(container);
		
		this.container.jPlayer({
			ready: function(event) {
				Player.container.jPlayer('setMedia', media)
				
				if (event.jPlayer.html.used) { 
					Player.solution = 'html';
				} else {
					Player.solution = 'flash';
				}
			},
			swfPath: "/frontend/flash/player.swf",
			supplied: "mp3",
			solution: "flash, html",
			volume: 0.5,
			preload:  "auto",
			wmode:    "window"
		});
		
		
		return false;
	},

	play: function(callback) {
		log('Player.play() called');
		Player.state = 'playing';

		if (this.solution === 'html') {
			this.container.bind($.jPlayer.event.playing, function(event) {
				callback(event);
			});
		} else if (this.solution === 'flash') {
			this.container.bind($.jPlayer.event.play, function(event) {
				callback(event);
			});
		}

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
