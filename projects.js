
const hoversound = new Audio('audio/hover.mp3')
const clicksound = new Audio('audio/click2.mp3')
const catcollect = new Audio ('audio/catcollect.wav')
const mew = new Audio ('audio/mew.wav')
if(localStorage.getItem("briskets") === null) {
    localStorage.setItem("briskets", 0)
}
if(localStorage.getItem("projectbrisket") === null) {
    localStorage.setItem("projectbrisket", 0)
}

const tbper = document.getElementById("tbper")
const tbmus = document.getElementById("tbmus")
const tblik = document.getElementById("tblik")
const tbabt = document.getElementById("tbabt")
const tbproj = document.getElementById("tbproj")
const tbcon = document.getElementById("tbcon")
const tbmisc = document.getElementById("tbmisc")
const act = document.getElementById("act")
const brisket = document.getElementById("brisket")

tbper.addEventListener('mousedown', () => {
    window.location.href = ("index.html")
})
tbmus.addEventListener('mousedown', () => {
    window.location.href = ("music.html")
})
tblik.addEventListener('mousedown', () => {
    window.location.href = ("wip.html")
})
tbabt.addEventListener('mousedown', () => {
    window.location.href = ("wip.html")
})
tbproj.addEventListener('mousedown', () => {
    window.location.href = ("projects.html")
})
tbcon.addEventListener('mousedown', () => {
    window.location.href = ("contacts.html")
})
tbmisc.addEventListener('mousedown', () => {
    window.location.href = ("wip.html")
})
