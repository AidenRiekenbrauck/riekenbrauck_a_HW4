// JavaScript Document
(() => {
console.log("linked up");
// variables come first
//grab the Video
const vidPlayer = document.querySelector('video')
      pauseButton = document.querySelectorAll('button')[0],
      playButton = document.querySelectorAll('button')[1],
      rewindButton = document.querySelectorAll('button')[2];

      //function go in the middle
      function volOn(){
        vidPlayer.muted = false;
      }

      function volOff(){
        vidPlayer.muted = true;
      }

      function playVid() {
        //make video player play
        vidPlayer.play();
      }

      function rewindVid() {
        //make video player play

        //rewinds by 5 s
        vidPlayer.currentTime -= 5;
      }



      function pauseVid() {
        //make video player play
        vidPlayer.pause();
      }

      vidPlayer.addEventListener('mouseover', volOn);
      vidPlayer.addEventListener('mouseout', volOff);

      playButton.addEventListener('click', playVid);
      pauseButton.addEventListener('click', pauseVid);
      rewindButton.addEventListener('click', rewindVid);
})();
