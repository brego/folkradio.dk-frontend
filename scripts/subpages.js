/*
 * FolkRadio.dk - http://folkradio.dk/
 * Copyright 2011 by Kamil "Brego" Dzieliński <brego.dk@gmail.com>
 *
 * Feel free to use & modify, but drop me an email ;)
 **/

var Subpages = {
	overlay:  null,
	subpages: null,
	close:    null,
	visible:  false,
	
	init: function() {
		this.overlay = $('<a href="#radio" id="subpages-overlay"></a>');
		$('body').append(this.overlay);

		this.subpages = $('#subpages');

		this.close = $('<a href="#radio" id="subpages-close" title="Luk"></a>');
		this.subpages.append(this.close);

		$(window).resize(function() {
			Subpages.overlay.height($(window).height());
			Subpages.overlay.width($(window).width());
		});
		
		$(window).hashchange(function() {
			hash = location.hash;
			if (hash !== '' && hash !== '#radio') {
				log('HashChange: "'+hash+'"');

				if (Subpages.visible) {
					Subpages.change(hash);
				} else {
					Subpages.show(hash);				
				}
			} else if (hash == '#radio') {
				Subpages.hide();
			}
		});

		$(window).hashchange();
	},
	
	show: function(name) {
		log('Subpages: show');

		this.overlay.show();
		this.subpages.show();
		
		$('#subpage-'+name.substr(1)).add(this.close).fadeIn(300);
		this.visible = true;
	},

	change: function(name) {
		log('Subpages: change');
		
		$('article:visible', this.subpages).add(this.close).fadeOut(200, function() {
			$('#subpage-'+name.substr(1)).add(Subpages.close).fadeIn(200);
		});
	},

	hide: function() {
		$('article:visible', this.subpages).add(this.close).fadeOut(300, function() {
			Subpages.subpages.hide();
			Subpages.overlay.hide();
			Subpages.close.hide();
		});
		this.visible = false;
	}
};
