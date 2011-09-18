/*
 * FolkRadio.dk - http://folkradio.dk/
 * Copyright 2011 by Kamil "Brego" Dzieliński <brego.dk@gmail.com>
 *
 * Feel free to use & modify, but drop me an email ;)
 **/

var PlayerInterface = {
	button:      null,
	button_play: null,
	button_stop: null,
	volume:      null,
	current_track: null,
	cover_area:  null,
	cover_cache: [],

	init: function() {
		log('PlayerInterface initiated');
		
		$.getJSON('now_playing.php', function(data) {
			log('PlayerInterface: Initialising query in '+data.time_left+'sec');
			setTimeout(PlayerInterface.query_current_track, data.time_left*1000);
		});

		// Fetching certain elements into properties (speed)
		this.button        = $('#button');
		this.button_play   = $('#button-play');
		this.button_stop   = $('#button-stop');
		this.volume        = $('#volume');
		this.current_track = $('#current-track');
		this.cover_area    = $('#cover-area');
		
		// Adding the current cover into the cache
		current_cover    = this.cover_area.children('img');
		current_cover_id = current_cover.attr('id').substr(6,1)
		this.cover_cache[current_cover_id] = current_cover;
		
		this.button.click(function() { PlayerInterface.button_controll(); return false; });
	},
	
	query_current_track: function() {
		$.getJSON('now_playing.php', function(data) {
			log('PlayerInterface: Track change in '+data.time_left+'sec');
			PlayerInterface.track_change(data.artist, data.track, data.album, data.cover_id);
			setTimeout(PlayerInterface.query_current_track, data.time_left*1000);
		});
	},

	button_controll: function() {
		log('PlayerInterface: button clicked');

		if (Player.state == null || Player.state == 'stopped') {
			log('PlayerInterface: player is stopped, activating');

			this.indicator_on();
			this.button_play.hide();
			Player.play(function(event) {
				// PlayerInterface.volume.fadeIn();
				PlayerInterface.indicator_off();
				PlayerInterface.button_stop.show();
			});
		} else if (Player.state == 'playing') {
			log('PlayerInterface: player is playing, stopping');

			// this.indicator_on();
			Player.stop(function() {
				// PlayerInterface.volume.fadeOut();
				PlayerInterface.button_stop.hide();
				PlayerInterface.button_play.show();
			});
		}
	},

	volume_controll: function() {},
	
	set_title: function(artist, track_name) {
		document.title = artist+' - '+track_name+' - FolkRadio.dk';
	},

	load_cover: function(cover_id, album) {
		if (this.cover_cache[cover_id] == undefined) {
			log('PlayerInterface: Loading cover for '+album);
			
			new_cover                  = document.createElement('img');
			new_cover.src              = 'covers/'+cover_id+'.jpg';
			new_cover.id               = 'cover-'+cover_id;
			new_cover.alt              = album;
			new_cover.title            = album;
			new_cover.style.opacity    = 0;
			
			this.cover_cache[cover_id] = $(new_cover);
		}
	},

	track_change: function(artist, track_name, album, cover_id) {
		log('PlayerInterface: changing track to '+track_name);
		
		this.load_cover(cover_id, album);

		this.current_track.add(this.cover_area.children('img')).animate({opacity: 0}, 300, function() {
			
			// Changing the label
			PlayerInterface.current_track.text(artist+' - '+track_name);
			
			// Changing the page title
			PlayerInterface.set_title(artist, track_name);

			// Empty the cover_area and add the new cover
			PlayerInterface.cover_area.empty();
			PlayerInterface.cover_area.append(PlayerInterface.cover_cache[cover_id]);
	
			PlayerInterface.current_track.add('#cover-'+cover_id).animate({opacity: 1}, 300);
		});

	},

	indicator_on: function() {
		log('PlayerInterface: toggling indicator on');
		
		this.button.addClass('loader');
	},

	indicator_off: function() {
		log('PlayerInterface: toggling indicator off');

		this.button.removeClass('loader');
	}
};
