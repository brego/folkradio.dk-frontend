/*
 * FolkRadio.dk - http://folkradio.dk/
 * Copyright 2011 by Kamil "Brego" Dzieliński <brego.dk@gmail.com>
 *
 * Feel free to use & modify, but drop me an email ;)
 **/

window.log = function() {
	log.history = log.history || [];   
	log.history.push(arguments);
	if (this.console) {
		if (arguments.length == 1) {
			console.debug(arguments[0]);
        } else {
			console.log(Array.prototype.slice.call(arguments));
		}
	}
};

$(function() {
	
	Player.init('#jquery_jplayer_1', {mp3: "http://test.folkradio.dk:8000/folkradio-256k.mp3"});
	PlayerInterface.init();
	Subpages.init();
	
	// $("#jquery_jplayer_1").jPlayer({
	// 	ready: function () {
	// 		$(this).jPlayer("setMedia", {
	// 			mp3: "http://test.folkradio.dk:8000/folkradio-256k.mp3"
	// 			// mp3: "http://mp3-vr-128.as34763.net:80/;stream/1",
	// 			// ogg: "http://ogg2.as34763.net/vr160.ogg"
	// 		});
	// 	},
	// 	swfPath: "/flash",
	// 	supplied: "mp3",
	// 	cssSelectorAncestor: "",
	// 	cssSelector: {
	// 		play:      "#play",
	// 		pause:     "#pause",
	// 		stop:      "#stop",
	// 		videoPlay: "",
	// 		seekBar:   "",
	// 		playBar:   "",
	// 		mute:      "#mute",
	// 		unmute:    "#unmute",
	// 		volumeBar: "",
	// 		volumeBarValue: "",
	// 		currentTime: "#currentTime",
	// 		duration:    "#duration"
	// 	},
	// 	// solution: 'flash, html',
	// 	solution: 'html, flash'
	// 	// errorAlerts: true,
	// 	// warningAlerts: true
	// });
});