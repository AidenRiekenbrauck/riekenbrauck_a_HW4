// JavaScript Document
(() => {
console.log("linked up");

//variable stack goes here
let sigils = document.querySelectorAll('.sigilContainer'),
lightbox = document.querySelector('.lightbox'),
closeLightBoxButton = document.querySelector('.close-lightbox');
vidStark =document.querySelector('video');


//functions in the middle
function showHouseVideo(){
  //debugger;
  lightbox.classList.add('show-lightbox');
  vidStark.play();
}

function closeLightBox(){
  lightbox.classList.remove('show-lightbox')
  //stop video and rewind it to 0

  vidStark.pause();
  vidStark.currentTime = 0;

}



// event handelling at the bottomNav
sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
closeLightBoxButton.addEventListener('click', closeLightBox);

})();
