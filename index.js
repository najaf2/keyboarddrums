window.addEventListener('keydown', playSounds);

// May add click events later.
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

const items=document.querySelectorAll('.key');

function clickTrigger(){
 let key = this.dataset.key;
 const audio = document.querySelector(`audio[data-key="${key}"]`);
 const item = this;
 item.classList.add('playing');
 audio.currentTime = 0;
 audio.play();
}

function unclickTrigger(){
 this.classList.remove('playing');
}
items.forEach(item=>item.addEventListener('mousedown',clickTrigger));
items.forEach(item=>item.addEventListener('mouseup',unclickTrigger));