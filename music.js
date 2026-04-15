const yapincoming = document.getElementById("yapincoming");
const musicbigbox = document.getElementById("musicbigbox")
const hoversound = new Audio('audio/hover.mp3')
const clicksound = new Audio('audio/click2.mp3')
const boom = new Audio ('audio/boom.mp3')

yapincoming.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
yapincoming.addEventListener('mousedown', () => {
    boom.play();
    musicbigbox.style.display = ("flex");
})