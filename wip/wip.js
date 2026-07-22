
const hoversound = new Audio('/perennial/audio/hover.mp3')
const clicksound = new Audio('/perennial/audio/click2.mp3')
const catcollect = new Audio ('/perennial/audio/catcollect.wav')
const mew = new Audio ('/perennial/audio/mew.wav')
const show = new Audio ('/perennial/audio/In.ogg')
const hide = new Audio ('/perennial/audio/Out.ogg')
const boom = new Audio ('/perennial/audio/boom.mp3')
const smallboom = new Audio ('/perennial/audio/boom.mp3')
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



const BASE = window.location.hostname === "azzyblooms.github.io"
    ? "/perennial"
    : "";
function go(path) {
    window.location.href = BASE + path;
}
tbper.addEventListener('mousedown', () => go("/"))
tbmus.addEventListener('mousedown', () => go("/music/"))
tblik.addEventListener('mousedown', () => go("/likes/"))
tbabt.addEventListener('mousedown', () => go("/about/"))
tbproj.addEventListener('mousedown', () => go("/projects/"))
tbcon.addEventListener('mousedown', () => go("/contacts/"))
tbmisc.addEventListener('mousedown', () => go("/wip/"))

document.addEventListener('keydown', (event) => {
    if(event.key === "b") {
        let perrenialbrisket = Number(localStorage.getItem("perrenialbrisket"))
        let briskets = Number(localStorage.getItem("briskets"))
        let contactbrisket = Number(localStorage.getItem("contactbrisket"))
        let likesbrisket = Number(localStorage.getItem("likesbrisket"))
        let inceptionbrisket = Number(localStorage.getItem("inceptionbrisket"))
        let projectbrisket = Number(localStorage.getItem("projectbrisket"))
        let musicbrisket = Number(localStorage.getItem("musicbrisket"))
        musicbrisket = 0;
        projectbrisket = 0;
        inceptionbrisket = 0;
        likesbrisket = 0;
        contactbrisket = 0;
        briskets = 0;
        perrenialbrisket = 0;
        localStorage.setItem("perrenialbrisket", 0)
        localStorage.setItem("contactbrisket", 0)
        localStorage.setItem("inceptionbrisket", 0)
        localStorage.setItem("likesbrisket", 0)
        localStorage.setItem("projectbrisket", 0)
        localStorage.setItem("briskets", 0)
        localStorage.setItem("musicbrisket", 0)
        mew.play();
    }
})

const enterSounds = [
    "/perennial/audio/floweryvoice/foundglue.mp3",
    "/perennial/audio/floweryvoice/hehjarona.mp3",
    "/perennial/audio/floweryvoice/HEREICOME.mp3",
    "/perennial/audio/floweryvoice/hey.mp3",
    "/perennial/audio/floweryvoice/heyboys.mp3",
    "/perennial/audio/floweryvoice/heylilguy.mp3",
    "/perennial/audio/floweryvoice/itsmeflowery.mp3",
    "/perennial/audio/floweryvoice/mysterywind.mp3",
    "/perennial/audio/floweryvoice/leafittome.mp3",
    "/perennial/audio/floweryvoice/sorrywaiting.mp3",
    "/perennial/audio/floweryvoice/sorrywaitingalt.mp3"
]
let currentJarona = new Audio('/perennial/audio/floweryvoice/foundglue.mp3')
const flowery = document.getElementById("floweryimg")

flowery.addEventListener('mousedown', () => {
    currentJarona = new Audio(`${enterSounds[Math.floor(Math.random() * 11)]}`)
    currentJarona.cloneNode(true).play();
})