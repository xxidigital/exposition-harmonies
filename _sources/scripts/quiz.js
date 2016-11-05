(function(){
"use strict";
document.addEventListener('DOMContentLoaded', function() {

  function setQuizStep(index) {
    // Move holder
    const slide = document.querySelector('.quiz__article:first-child').offsetWidth * (index - 1),
              holder = document.querySelector('.holder');

    holder.setAttribute('style','transform: translateX(-'+slide+'px)');
    // Set quiz nav element
    [].map.call(document.querySelectorAll('.quiz__nav__link'), function(bouton) {
    if(bouton !== null) {
      bouton.classList.remove('state--active');
      const cible = document.querySelector('#quiz__step--'+index);

      if(cible !== null) {
        cible.classList.add('state--active');
      }
    }
    });
  }

    if(document.querySelector('.quiz')) {

      // create arrays
      let solutions = [],
      reponses = [];

      const total = parseInt( document.querySelector('.quiz').getAttribute('data-total') );

      // Load solutions
      [].map.call(document.querySelectorAll('.quiz__article'), function(article) {
        solutions.push(article.getAttribute('data-solution'));
      });

      console.log(solutions);

      // Quiz navigation
      [].map.call(document.querySelectorAll('.quiz__nav__link'), function(bouton) {
        bouton.addEventListener('click', function(eve) {
          eve.preventDefault();
          const step = bouton.getAttribute('data-id');
          setQuizStep(step);
        });
      });

      document.querySelector('#quiz--return').addEventListener('click', function(even){
        even.preventDefault();
        document.querySelector('.holder').setAttribute('style','transform:translateX(0vw);');
      });

      // On response
      [].map.call(document.querySelectorAll('.button--quiz'), function(element) {
        element.addEventListener('click', function(ev) {
          ev.preventDefault();
          const father = element.parentElement,
          pointeur = parseInt(father.getAttribute('data-id')),
          ind = pointeur + 1,
          champ = "question_" + ind;

          // Test if is checked and save response
          if(document.querySelectorAll('input[name="'+champ+'"]:checked').length > 0) {
            const reponse = document.querySelector('input[name="'+champ+'"]:checked').value;
            if(reponse !== null ) {
              reponses[pointeur] = reponse;
              console.log(reponses);
              setQuizStep(ind+1);
            }
          }

          // Test if reponses == solutions
          if(reponses.length == total) {
            var is_same = (solutions.length == reponses.length) && solutions.every(function(element, index) {
              return element === reponses[index];
            });
            const victory = document.querySelector('#quiz_victory'),
            defeat = document.querySelector('#quiz_defeat');

            if(is_same) {
              if(victory.classList.contains('ghost')) {
                victory.classList.remove('ghost');
              }
              if(!defeat.classList.contains('ghost')) {
                defeat.classList.add('ghost');
              }
            }
            else {
              if(!victory.classList.contains('ghost')) {
                victory.classList.add('ghost');
              }
              if(defeat.classList.contains('ghost')) {
                defeat.classList.remove('ghost');
              }
            }
          }
        });
      });

    }

      });
      }());
