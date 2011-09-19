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
});