const hoversound = new Audio('/perennial/audio/hover.mp3')
const clicksound = new Audio('/perennial/audio/click2.mp3')
const catcollect = new Audio ('/perennial/audio/catcollect.wav')
const mew = new Audio ('/perennial/audio/mew.wav')
const whoop = new Audio ('/perennial/audio/snd_slidewhist.wav')
const show = new Audio ('/perennial/audio/In.ogg')
const hide = new Audio ('/perennial/audio/Out.ogg')

if(localStorage.getItem("briskets") === null) {
    localStorage.setItem("briskets", 0)
}
if(localStorage.getItem("blogbrisket") === null) {
    localStorage.setItem("blogbrisket", 0)
}

const tbper = document.getElementById("tbper")
const tbmus = document.getElementById("tbmus")
const tblik = document.getElementById("tblik")
const tbabt = document.getElementById("tbabt")
const tbblog = document.getElementById("tbblog")
const tbproj = document.getElementById("tbproj")
const tbcon = document.getElementById("tbcon")
const briskettext = document.getElementById("briskettext")
const brisket = document.getElementById("brisket")

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
tbblog.addEventListener('mousedown', () => go("/blog/"))

const star1 = document.getElementById("star1")
const star2 = document.getElementById("star2")
const star3 = document.getElementById("star3")
const star4 = document.getElementById("star4")
const star5 = document.getElementById("star5")


const starlist = [
    star1,
    star2,
    star3,
    star4,
    star5
]
const imagelist = [
    "/perennial/images/stars/georgian.png",
    "/perennial/images/stars/star.png",
    "/perennial/images/stars/diamond.png",
    "/perennial/images/stars/penta.png",
    "/perennial/images/stars/twinkle.png"
]

document.addEventListener('DOMContentLoaded', () => {
    starlist.forEach((star, index) => {
        const pos = randomStar();
        let activeImg = imagelist[Math.floor(Math.random() * imagelist.length)]
        star.querySelector("img").src = activeImg;
        star.style.left = (`${pos.x}px`)
        star.style.top = (`${pos.y}px`)
        star.style.transform = (`scale(${Math.random() + 0.7})`)
    })
})

const galaxybounds = [
    {x: 0, y:30},
    {x:540, y:30},
    {x:1170, y:460},
    {x:1170, y:660},
    {x:510, y:660},
    {x:0, y:210}
]

function starInGalaxy(star, galaxybounds) {
    let inside = false;

    for (let a = 0, b = galaxybounds.length - 1; a < galaxybounds.length; b = a++) {
        const xa = galaxybounds[a].x;
        const ya = galaxybounds[a].y;
        const xb = galaxybounds[b].x;
        const yb = galaxybounds[b].y;

        const intersect = 
            ((ya > star.y) !== (yb > star.y)) &&
            (star.x < (xb - xa) * (star.y - ya) / (yb - ya) + xa);

        if (intersect) inside = !inside;
    }
    return inside;
}

function randomStar() {
    while (true) {
        const x = Math.random() * 1170;
        const y = Math.random() * 660;

        if (starInGalaxy ({x, y}, galaxybounds)) {
            return {x, y};
        }
    }
}