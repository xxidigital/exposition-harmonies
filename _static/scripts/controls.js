(function() {
    "use strict"

    // Document ready
    document.addEventListener('DOMContentLoaded', function() {
        console.log('scripts loaded');

        // DISPLAY BUTTONS
        [].map.call(document.querySelectorAll('.content'), function(contenus) {
          var cibleId = contenus.id;
          document.querySelector('[data-target="#'+cibleId+'"]').classList.remove('ghost');
        });

        // DISPLAY MEDIAS
        [].map.call(document.querySelectorAll(".cmd--reverse"), function(element) {
            element.addEventListener('click', function(ev) {
                ev.preventDefault();
                var cible = this.getAttribute("data-target");
                if(cible !== null) {
                  [].map.call(document.querySelectorAll('.content'), function(groupe) {
                    if(!groupe.classList.contains('ghost')) {
                      groupe.classList.add('ghost');
                    }
                  });
                  document.querySelector(cible).classList.remove('ghost');
                }
                document.querySelector(this.getAttribute("href")).classList.toggle('state--reverse');
            });
        });

        // DISPLAY MENU
        [].map.call(document.querySelectorAll(".cmd--flip"), function(element) {
            element.addEventListener('click', function(ev) {
                ev.preventDefault();
                document.querySelector(this.getAttribute("href")).classList.toggle('state--flip');
            });
        });

    }); // Document.ready

}());
