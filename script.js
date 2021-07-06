window.addEventListener('keydown', playSounds);
// document.getElementsByClassName('keys')[0]
// .addEventListener('click', playSounds);

function playSounds(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) 
    return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
} 

const keys = document.querySelectorAll('.key');
 
function removeTransition(e) {
  this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

