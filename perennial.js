const musicbutton = document.getElementById("musicbutton");
const likebutton = document.getElementById("likebutton");
const mebutton = document.getElementById("mebutton");
const projectbutton = document.getElementById("projectbutton");
const contactbutton = document.getElementById("contactbutton");
const miscbutton = document.getElementById("miscbutton");
const cooltext1 = document.getElementById("cooltext1");
const brisket = document.getElementById("brisket");
const brisketcounter = document.getElementById("brisketcounter")
const brisketnumber = document.getElementById("brisketnumber")
if(localStorage.getItem("briskets") === null) {
    localStorage.setItem("briskets", 0)
}
if(localStorage.getItem("perrenialbrisket") === null) {
    localStorage.setItem("perrenialbrisket", 0)
}

const hoversound = new Audio('/audio/hover.mp3')
const clicksound = new Audio('/audio/click2.mp3')
const catcollect = new Audio ('/audio/catcollect.wav')
const mew = new Audio ('/audio/mew.wav')
const show = new Audio ('/audio/In.ogg')
const hide = new Audio ('/audio/Out.ogg')

const tbper = document.getElementById("tbper")
const tbmus = document.getElementById("tbmus")
const tblik = document.getElementById("tblik")
const tbabt = document.getElementById("tbabt")
const tbproj = document.getElementById("tbproj")
const tbcon = document.getElementById("tbcon")
const tbmisc = document.getElementById("tbmisc")

tbper.addEventListener('mousedown', () => {
    window.location.href = "/";
})
tbmus.addEventListener('mousedown', () => {
    window.location.href = ("/music/")
})
tblik.addEventListener('mousedown', () => {
    window.location.href = ("/likes/")
})
tbabt.addEventListener('mousedown', () => {
    window.location.href = ("/about/")
})
tbproj.addEventListener('mousedown', () => {
    window.location.href = ("/projects/")
})
tbcon.addEventListener('mousedown', () => {
    window.location.href = ("/contacts/")
})
tbmisc.addEventListener('mousedown', () => {
    window.location.href = ("/misc/")
})

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
musicbutton.addEventListener('mousedown', () => {
    clicksound.play();
    window.location.href = ("music.html")
})
projectbutton.addEventListener('mousedown', () => {
    clicksound.play();
    window.location.href = ("projects.html")
})
miscbutton.addEventListener('mousedown', () => {
    clicksound.play();
    window.location.href = ("wip.html")
})
contactbutton.addEventListener('mousedown', () => {
    clicksound.play();
    window.location.href = ("contacts.html")
})
likebutton.addEventListener('mousedown', () => {
    clicksound.play();
    window.location.href = ("likes.html")
})
mebutton.addEventListener('mousedown', () => {
    clicksound.play();
    window.location.href = ("wip.html")
})
brisket.addEventListener('mouseenter', () => {
    brisket.textContent = "≽^•⩊•^≼";
})
brisket.addEventListener('mouseleave', () => {
    brisket.textContent = "≽^-⩊-^≼";
})
brisket.addEventListener('mousedown', () => {
    let perrenialbrisket = Number(localStorage.getItem("perrenialbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    brisket.textContent = "≽^•⩊-^≼";
    mew.preservesPitch = false;
    mew.playbackRate = 1.2;
    if(perrenialbrisket == 1) {
        clicksound.play();
    } else {
        mew.play();
    }
    presentBriskets();
    brisketnumber.textContent = Number(localStorage.getItem("briskets"));
    brisket.classList.add("sustingus")
    setTimeout(() => {
        show.play();
    }, 2350)
})
function brisketIncrease() {
    let perrenialbrisket = Number(localStorage.getItem("perrenialbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    if(perrenialbrisket == 0) {
        briskets++;
        perrenialbrisket = 1;
        localStorage.setItem("perrenialbrisket", 1)
        localStorage.setItem("briskets", briskets)
        brisketnumber.textContent = Number(localStorage.getItem("briskets"));
    }
}
function presentBriskets() {
    let perrenialbrisket = Number(localStorage.getItem("perrenialbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    brisketcounter.style.transition = ("transform ease-out 4s")
    brisketcounter.classList.add("showing")

    setTimeout(() => {
            catcollect.preservesPitch = false;
            if(perrenialbrisket == 0) {
                if(briskets > 1) {
                catcollect.playbackRate = (Math.sqrt(briskets) / 1.39)
            } else {
                catcollect.playbackRate = 1;
            }
                catcollect.play();
                brisketIncrease();
            }
            setTimeout(() => {    
                brisketcounter.style.transition = ("transform ease-in 4s")
                brisketcounter.classList.remove("showing")
                hide.play();
            }, 1000)
    }, 4500)
}

document.addEventListener('keydown', () => {
    let perrenialbrisket = Number(localStorage.getItem("perrenialbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    let musicbrisket = Number(localStorage.getItem("musicbrisket"))
    musicbrisket = 0;
    briskets = 0;
    perrenialbrisket = 0;
    localStorage.setItem("perrenialbrisket", 0)
    localStorage.setItem("briskets", 0)
    localStorage.setItem("musicbrisket", 0)
    localStorage.setItem("contactbrisket", 0)
    mew.play();
})