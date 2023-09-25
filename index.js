console.log('Working!');

const audio = new Audio();
audio.src = "./Build/click.wav";

const themetogglebtn = document.querySelector('input[type=checkbox]');

themetogglebtn.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
})
