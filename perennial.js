const musicbutton = document.getElementById("musicbutton");
const likebutton = document.getElementById("likebutton");
const mebutton = document.getElementById("mebutton");
const projectbutton = document.getElementById("projectbutton");
const contactbutton = document.getElementById("contactbutton");
const miscbutton = document.getElementById("miscbutton");
const cooltext1 = document.getElementById("cooltext1");

const hoversound = new Audio('audio/hover.mp3')

musicbutton.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    musicbutton.classList.add("muswiggle");
    cooltext1.textContent = ("music!")
})
musicbutton.addEventListener('mouseleave', () => {
    musicbutton.classList.remove("muswiggle");
    cooltext1.textContent = ("------------------")
})
likebutton.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    likebutton.classList.add("likewiggle");
    cooltext1.textContent = ("likes/dislikes")
})
likebutton.addEventListener('mouseleave', () => {
    likebutton.classList.remove("likewiggle");
    cooltext1.textContent = ("------------------")
})
miscbutton.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    miscbutton.classList.add("miscwiggle");
    cooltext1.textContent = ("misc")
})
miscbutton.addEventListener('mouseleave', () => {
    miscbutton.classList.remove("miscwiggle");
    cooltext1.textContent = ("------------------")
})
contactbutton.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    contactbutton.classList.add("contactwiggle");
    cooltext1.textContent = ("socials/where to find me!")
})
contactbutton.addEventListener('mouseleave', () => {
    contactbutton.classList.remove("contactwiggle");
    cooltext1.textContent = ("------------------")
})
projectbutton.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    projectbutton.classList.add("projwiggle");
    cooltext1.textContent = ("my projects!")
})
projectbutton.addEventListener('mouseleave', () => {
    projectbutton.classList.remove("projwiggle");
    cooltext1.textContent = ("------------------")
})
mebutton.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    mebutton.classList.add("mewiggle");
    cooltext1.textContent = ("about me (more detailed)")
})
mebutton.addEventListener('mouseleave', () => {
    mebutton.classList.remove("mewiggle");
    cooltext1.textContent = ("------------------")
})