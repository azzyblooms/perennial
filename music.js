const yapincoming = document.getElementById("yapincoming");
const musicbigbox = document.getElementById("musicbigbox")
const hoversound = new Audio('audio/hover.mp3')
const clicksound = new Audio('audio/click2.mp3')
const boom = new Audio ('audio/boom.mp3')
const ihover = document.getElementById("ihover")

const flt = document.getElementById("flt")
const bcl = document.getElementById("bcl")
const tpt = document.getElementById("tpt")
const acc = document.getElementById("acc")
const asx = document.getElementById("asx")
const tsx = document.getElementById("tsx")
const cbc = document.getElementById("cbc")
const clo = document.getElementById("clo")
const mal = document.getElementById("mal")

const tbper = document.getElementById("tbper")
const tbmus = document.getElementById("tbmus")
const tblik = document.getElementById("tblik")
const tbabt = document.getElementById("tbabt")
const tbproj = document.getElementById("tbproj")
const tbcon = document.getElementById("tbcon")
const tbmisc = document.getElementById("tbmisc")

tbper.addEventListener('mousedown', () => {
    window.location.href = ("index.html")
})
tbmus.addEventListener('mousedown', () => {
    window.location.href = ("music.html")
})
/*tblik.addEventListener('mousedown', () => {
    window.location.href = ("likes.html")
})
tbabt.addEventListener('mousedown', () => {
    window.location.href = ("aboutme.html")
})
tbproj.addEventListener('mousedown', () => {
    window.location.href = ("projects.html")
})
tbcon.addEventListener('mousedown', () => {
    window.location.href = ("contact.html")
})
tbmisc.addEventListener('mousedown', () => {
    window.location.href = ("misc.html")
})
*/
yapincoming.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
yapincoming.addEventListener('mousedown', () => {
    boom.play();
    musicbigbox.style.display = ("block");
})

flt.addEventListener('mouseenter', () => {
    ihover.textContent = ("flute")
    hoversound.cloneNode(true).play();
})
flt.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

bcl.addEventListener('mouseenter', () => {
    ihover.textContent = ("bass clarinet")
    hoversound.cloneNode(true).play();
})
bcl.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

tpt.addEventListener('mouseenter', () => {
    ihover.textContent = ("trumpet")
    hoversound.cloneNode(true).play();
})
tpt.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

acc.addEventListener('mouseenter', () => {
    ihover.textContent = ("accordion")
    hoversound.cloneNode(true).play();
})
acc.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

asx.addEventListener('mouseenter', () => {
    ihover.textContent = ("alto sax")
    hoversound.cloneNode(true).play();
})
asx.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

tsx.addEventListener('mouseenter', () => {
    ihover.textContent = ("tenor sax")
    hoversound.cloneNode(true).play();
})
tsx.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

cbc.addEventListener('mouseenter', () => {
    ihover.textContent = ("contrabass clarinet")
    hoversound.cloneNode(true).play();
})
cbc.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

clo.addEventListener('mouseenter', () => {
    ihover.textContent = ("cello")
    hoversound.cloneNode(true).play();
})
clo.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

mal.addEventListener('mouseenter', () => {
    ihover.textContent = ("mallets")
    hoversound.cloneNode(true).play();
})
mal.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})