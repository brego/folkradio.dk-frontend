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
	$('html').removeClass('no-js')

	Player.init();
	PlayerInterface.init();
	Subpages.init();
	
	
	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "test.folkradio.dk:8000/folkradio-256k.mp3"
				// mp3: "http://mp3-vr-128.as34763.net:80/;stream/1",
				// ogg: "http://ogg2.as34763.net/vr160.ogg"
			});
		},
		swfPath: "/flash",
		supplied: "mp3",
		cssSelectorAncestor: "",
		cssSelector: {
			play: "#play",
			pause: "#pause",
			stop: "#stop",
			videoPlay: "",
			seekBar: "",
			playBar: "",
			mute: "#mute",
			unmute: "#unmute",
			volumeBar: "",
			volumeBarValue: "",
			currentTime: "#currentTime",
			duration: "#duration"
		},
		// solution: 'flash, html',
		// errorAlerts: true,
		// warningAlerts: true
	});
	
	
/*	$("#player").jPlayer({
			ready: function () {
				log(this.element);
				$(this).jPlayer("setFile", "http://mp3-vr-128.as34763.net:80/;stream/1", "http://ogg2.as34763.net/vr160.ogg").jPlayer("play");
				// demoInstanceInfo(this.element, $("#demo_info")); // This displays information about jPlayer's configuration in the demo page
			},
			swfPath: "../flash"
		})
		.jPlayer("onProgressChange", function(loadPercent, playedPercentRelative, playedPercentAbsolute, playedTime, totalTime) {
			// jpPlayTime.text($.jPlayer.convertTime(playedTime));
			// jpTotalTime.text($.jPlayer.convertTime(totalTime));

			// demoStatusInfo(this.element, jpStatus); // This displays information about jPlayer's status in the demo page
		})
		.jPlayer("onSoundComplete", function() {
			this.element.jPlayer("play");
		});*/
	
});
