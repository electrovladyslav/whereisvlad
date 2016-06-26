(function() {
	var map = document.querySelector('.map');


	if ("https:" == document.location.protocol) {
		/* secure */
		var src = 'https://www.marinetraffic.com/';
	} else {
		/* unsecure */
		var src = 'http://www.marinetraffic.com/';
	}

	if ((window.latitude === undefined) && (window.longitude === undefined) && (window.fleet !== undefined || window.fleet_id !== undefined)) {
		window.latitude = 0;
		window.longitude = 0;
	}

	if (typeof window.mtembedcode != "undefined") {
		map.innerHTML = 
			'<iframe name="marinetraffic" class = "map" ' + ' scrolling="no" ' + ' src="' + src + ((window.language === undefined) ? 'en' : language) + '/ais/embed' + '/mtembedcode:' + window.mtembedcode + '">Browser does not support embedded objects.<br/>Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a>' + '</iframe>\n'
		;
	} else {
		map.innerHTML = 
			'<iframe name="marinetraffic" class = "map" ' 
				+ ' scrolling="no" ' 
				+ ' src="' + src + ((window.language === undefined) ? 'en' : language) 
					+ '/ais/embed' + '/zoom:' + ((window.zoom === undefined) ? '3' : zoom) 
					+ '/centery:' +  10 //((window.latitude === undefined) ? '36' : latitude) 
					+ '/centerx:' +  -70   //((window.longitude === undefined) ? '23' : longitude) 
					+ '/maptype:' + ((window.maptype === undefined) ? '4' : maptype) 
					+ '/shownames:' + ((window.shownames === undefined) ? 'false' : shownames) 
					+ '/mmsi:' + ((window.trackvessel === undefined) ? '0' : trackvessel) 
					+ '/shipid:' + ((window.trackshipid === undefined) ? '0' : trackshipid) 
					+ '/fleet:' + ((window.fleet === undefined) ? '' : fleet) 
					+ '/fleet_id:' + ((window.fleet_id === undefined) ? '' : fleet_id) 
					+ '/vtypes:' + ((window.vtypes === undefined) ? '' : vtypes) 
					+ '/showmenu:' + ((window.showmenu === undefined) ? '' : showmenu) 
					+ '/remember:' + ((window.remember === undefined) ? 'false' : remember) 
				+ '">Browser does not support embedded objects.<br/>Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a>' + 
			'</iframe>\n'
		;
	}



})()