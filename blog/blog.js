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
const star6 = document.getElementById("star6")
const star7 = document.getElementById("star7")
const star8 = document.getElementById("star8")
const star9 = document.getElementById("star9")
const star10 = document.getElementById("star10")
const star11 = document.getElementById("star11")


const starlist = [
    star1,
    star2,
    star3,
    star4,
    star5,
    star6,
    star7,
    star8,
    star9,
    star10,
    star11
]
const imagelist = [
    "/perennial/images/stars/star.png",
    "/perennial/images/stars/penta.png",
    "/perennial/images/stars/twinkle.png"
]

const texts = [
    `hi everyone!!! this is perennial, my first interactive personal website!
    a perennial is a kind of flower that lives over 2 years; they thrive in the warm months, die back in winter, and then bloom again in spring!
    i've been using these flower motifs for my website ever since <strong>blossom</strong>, an old static website i made for moonshot (but never shipped)

    anyways, i started making this website back in april/may to grind out some last-minute hours for sleepover. unfortunately, i had so many big plans for it that i couldn't fully realize, so i had to continue it in macondo.
    this website is a bit of a mix of different styles, because i've done much of my css and animation learning over the <strong>46</strong> hours i've tracked. hence why the blog page is so aesthetic and the likes page is so boring.
    honestly, the hardest part about making this website mightve been finding stuff about me to yap about 😭😭😭 maybe im not all that special gng

    anyways, that's all i have to say for now! see ya real soon!!!
    `
]

document.addEventListener('DOMContentLoaded', () => {
    starlist.forEach((star, index) => {
        const pos = randomStar();
        let activeImg = imagelist[Math.floor(Math.random() * imagelist.length)]
        star.querySelector("img").src = activeImg;
        star.style.left = (`${pos.x}px`)
        star.style.top = (`${pos.y}px`)
        //star.style.transform = (`scale(${Math.random() + 0.7})`)
    })
})

starlist.forEach((star) => {
    star.addEventListener('mouseenter', () => {
        hoversound.cloneNode(true).play();
        previewbox.style.animation = ("fadein 0.3s ease forwards")
        if(star == star1) {
            previewtitle.textContent = ("perennial!")
            previewdesc.textContent = ("(07/30/2026) read about my website! or take a look at the readme. that works too.")
        } else {
            previewtitle.textContent = ("nothing... yet.")
            previewdesc.textContent = ("(--/--/----) every star has a story. and eventually, they'll all be written. a comforting thought.")
        }






    })
    star.addEventListener('mouseleave', () => {
        previewbox.style.animation = ("fadeout 0.3s ease forwards")
    })
    if(star !== star1) {
        star.style.animation = ("none")
        star.style.opacity = ("0.2")
    }
})
star1.addEventListener('mousedown', () => {
    blogbox.style.display = ("flex")
    clicksound.cloneNode(true).play();
    blogbox.style.animation = ("stretchx 0.5s ease-in-out forwards")
    setTimeout(() => {
        blogbox.style.animation = ("stretchy 0.8s ease-in-out forwards")
        typeText(texts[0])
    }, 600)
})
const xbutton = document.getElementById("xbutton")
xbutton.addEventListener('mousedown', () => {
    clicksound.cloneNode(true).play();
    blogbox.style.animation = ("squishy 0.8s ease-in-out forwards")
    setTimeout(() => {
        blogbox.style.animation = ("squishx 0.5s ease-in-out forwards")
        setTimeout(() => {
            blogbox.style.display = ("none")
        }, 500)
    }, 800)
})

function typeText(text) {
    let speed = 35;
    let currentText = 0;
    let punctuation = [".", "?", "!", "-"]

    function type() {
        let speed = 20;
        const currentChar = text[currentText];
        blogpg.innerHTML = text.substring(0, ++currentText)
        if (currentChar === ",") {speed = 180;}
        if (punctuation.includes(currentChar)) {speed = 300;}

        if (currentText === text.length) {return;}
        setTimeout(type, speed)
    }
    type();
}

const blogbox = document.getElementById("blogbox")
const blogpg = document.getElementById("blogpg")
const previewbox = document.getElementById("previewbox")
const previewdesc = document.getElementById("previewdesc")
const previewtitle = document.getElementById("previewtitle")
const previewimg = document.getElementById("previewimg")
document.addEventListener('mousemove', (event) => {
    previewbox.style.left = (`${event.clientX}px`)
    previewbox.style.top = (`${event.clientY}px`)
})

const galaxybounds = [
    {x: 0, y:30},
    {x:540, y:30},
    {x:1170, y:460},
    {x:1170, y:660},
    {x:510, y:660},
    {x:0, y:210}
]
const placedstars = [];
const minimum = 120;


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

        if (!starInGalaxy ({x, y}, galaxybounds)) {
            continue;
        }

        let overlaps = false;
        for(const star of placedstars) {
            const dx = x - star.x;
            const dy = y - star.y;

            if(Math.sqrt(dx * dx + dy * dy) < minimum) {
                overlaps = true;
                break;
            }
        }
        if(!overlaps) {
            placedstars.push({x, y});
            return {x, y};
        }
    }
}