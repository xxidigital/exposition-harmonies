const loadSvg = function(selector) {
		const targets = document.querySelectorAll('[data-file="'+selector+'"]'),
					paath = document.querySelector('meta[name="vector_path"]').getAttribute('content');
					//const paath = window.location.pathname.replace(/[^\/]*$/, '');
		let host = "";
		
		if(window.location.host !== "") {
			host = window.location.protocol + '//' + window.location.host + '/' + paath;
		}
		else {
			host = window.location.protocol + '//' + paath;
		}

  	if (typeof SVGRect != "undefined") {
	    const requete = new XMLHttpRequest();
	    requete.open("GET", host + selector + ".svg", true);
	    requete.send();
	    requete.onload = function(e) {
	    	[].slice.call(targets).forEach(function(target) {
					target.innerHTML = requete.responseText;
			});
		};
  }
};

const loadBandcamp = function(selector) {
	const targets = document.querySelectorAll(selector);

	[].forEach.call(targets,function(target){
		const reference = target.getAttribute('data-reference'),
							url = target.getAttribute('data-url'),
							titre = target.getAttribute('data-titre');

		console.log(reference, url, titre);
		target.innerHTML = '<iframe class="frame--audio" src="https://bandcamp.com/EmbeddedPlayer/album='+reference+'/size=large/bgcol=ffffff/linkcol=BBA569/artwork=none/transparent=true/" seamless=""><a href="'+url+'">'+titre+'</a></iframe>'
	});
};


(function(){
"use strict";
// Document ready
document.addEventListener('DOMContentLoaded', function() {

  //INJECT SVG
let vectors = [];
vectors = document.querySelectorAll('[data-inject="vector"]');
[].forEach.call(vectors, function(vect) {
	loadSvg(vect.getAttribute('data-file'));
});

// LOAD BANDCAMP
[].map.call(document.querySelectorAll("[data-target='#content--audio']"), function(element) {
		element.addEventListener('click', function(ev) {
				ev.preventDefault();
				loadBandcamp('.content__audio');
		});
});

});
}());
