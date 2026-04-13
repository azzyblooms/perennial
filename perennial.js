const musicbutton = document.getElementById("musicbutton");
const likebutton = document.getElementById("likebutton");
const mebutton = document.getElementById("mebutton");
const projectbutton = document.getElementById("projectbutton");
const contactbutton = document.getElementById("contactbutton");
const miscbutton = document.getElementById("miscbutton");

const hoversound = new Audio('audio/hover.mp3')

musicbutton.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    musicbutton.classList.add("muswiggle");
})
musicbutton.addEventListener('mouseleave', () => {
    musicbutton.classList.remove("muswiggle");
})
likebutton.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    likebutton.classList.add("likewiggle");
})
likebutton.addEventListener('mouseleave', () => {
    likebutton.classList.remove("likewiggle");
})
miscbutton.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    miscbutton.classList.add("miscwiggle");
})
miscbutton.addEventListener('mouseleave', () => {
    miscbutton.classList.remove("miscwiggle");
})
contactbutton.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    contactbutton.classList.add("contactwiggle");
})
contactbutton.addEventListener('mouseleave', () => {
    contactbutton.classList.remove("contactwiggle");
})
projectbutton.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    projectbutton.classList.add("projwiggle");
})
projectbutton.addEventListener('mouseleave', () => {
    projectbutton.classList.remove("projwiggle");
})
mebutton.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    mebutton.classList.add("mewiggle");
})
mebutton.addEventListener('mouseleave', () => {
    mebutton.classList.remove("mewiggle");
})