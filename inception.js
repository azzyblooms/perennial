
const hoversound = new Audio('audio/hover.mp3')
const clicksound = new Audio('audio/click2.mp3')
const catcollect = new Audio ('audio/catcollect.wav')
const mew = new Audio ('audio/deepmew.wav')
const whoop = new Audio ('audio/snd_slidewhist.wav')
const show = new Audio ('audio/In.ogg')
const boom = new Audio ('audio/boom.mp3')
const hide = new Audio ('audio/Out.ogg')
if(localStorage.getItem("briskets") === null) {
    localStorage.setItem("briskets", 0)
}
if(localStorage.getItem("inceptionbrisket") === null) {
    localStorage.setItem("inceptionbrisket", 0)
}

const tbper = document.getElementById("tbper")
const tbmus = document.getElementById("tbmus")
const tblik = document.getElementById("tblik")
const tbabt = document.getElementById("tbabt")
const tbproj = document.getElementById("tbproj")
const tbcon = document.getElementById("tbcon")
const tbmisc = document.getElementById("tbmisc")
const brisket = document.getElementById("brisket")
const briskethouse = document.getElementById("briskethouse")


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

brisket.addEventListener('mouseenter', () => {
    brisket.textContent = "≽^•⩊•^≼";
})
brisket.addEventListener('mouseleave', () => {
    brisket.textContent = "≽^-⩊-^≼";
})
brisket.addEventListener('mousedown', () => {
    let inceptionbrisket = Number(localStorage.getItem("inceptionbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    brisket.textContent = "≽^•⩊-^≼";
    brisket.offsetWidth;
    if(inceptionbrisket == 1) {
        clicksound.play();
    } else {
        mew.play();
    }
    boom.cloneNode(true).play();
    presentBriskets();
    brisketnumber.textContent = Number(localStorage.getItem("briskets"));
    brisket.classList.add("sustingus")
    setTimeout(() => {
        show.play();
    }, 2350)
})
function brisketIncrease() {
    let inceptionbrisket = Number(localStorage.getItem("inceptionbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    if(inceptionbrisket == 0) {
        briskets++;
        inceptionbrisket = 1;
        localStorage.setItem("inceptionbrisket", 1)
        localStorage.setItem("briskets", briskets)
        brisketnumber.textContent = Number(localStorage.getItem("briskets"));
    }
}
function presentBriskets() {
    let inceptionbrisket = Number(localStorage.getItem("inceptionbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    brisketcounter.style.transition = ("transform ease-out 4s")
    brisketcounter.classList.add("showing")

    setTimeout(() => {
            catcollect.preservesPitch = false;
            if(inceptionbrisket == 0) {
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
    let contactbrisket = Number(localStorage.getItem("contactbrisket"))
    let projectbrisket = Number(localStorage.getItem("projectbrisket"))
    let inceptionbrisket = Number(localStorage.getItem("inceptionbrisket"))
    musicbrisket = 0;
    briskets = 0;
    perrenialbrisket = 0;
    contactbrisket = 0;
    projectbrisket = 0;
    inceptionbrisket = 0;
    localStorage.setItem("perrenialbrisket", 0)
    localStorage.setItem("briskets", 0)
    localStorage.setItem("musicbrisket", 0)
    localStorage.setItem("contactbrisket", 0)
    localStorage.setItem("projectbrisket", 0)
    localStorage.setItem("inceptionbrisket", 0)
    mew.play();
})