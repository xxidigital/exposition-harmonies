const loadSvg = function(selector) {
		const targets = document.querySelectorAll('[data-file="'+selector+'"]'),
		 			folder = "./assets/graphics/vectors/";
					//const paath = window.location.pathname.replace(/[^\/]*$/, '');
		let host = "";

		if(window.location.host !== "") {
			host = window.location.protocol + '//' + window.location.host + '/' + folder;
		}
		else {
			host = window.location.protocol + '//' + folder;
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

});
}());
