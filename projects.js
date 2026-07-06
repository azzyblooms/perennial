
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
const brisket = document.getElementById("brisket")
const pb1github = document.getElementById("pb1github")
const pb1image = document.getElementById("pb1img")
const pb2github = document.getElementById("pb2github")
const pb2image = document.getElementById("pb2img")

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

pb1github.addEventListener('mousedown', () => {
    window.open("https://github.com/azzyblooms/catronome", "_blank")
    clicksound.play();
})
pb1github.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
pb1image.addEventListener('mousedown', () => {
    window.open("https://azzyblooms.github.io/catronome", "_blank")
    clicksound.play();
})
pb1image.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
    brisket.classList.add("moving")
})

pb2github.addEventListener('mousedown', () => {
    window.open("https://github.com/azzyblooms/trombonline", "_blank")
    clicksound.play();
})
pb2github.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
pb2image.addEventListener('mousedown', () => {
    window.open("https://azzyblooms.github.io/trombonline", "_blank")
    clicksound.play();
})
pb2image.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})




brisket.addEventListener('mouseenter', () => {
    brisket.textContent = "≽^•⩊•^≼";
})
brisket.addEventListener('mouseleave', () => {
    brisket.textContent = "≽^-⩊-^≼";
})
brisket.addEventListener('mousedown', () => {
    let projectbrisket = Number(localStorage.getItem("projectbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    brisket.textContent = "≽^•⩊-^≼";
    mew.preservesPitch = false;
    mew.playbackRate = 1.2;
    if(projectbrisket == 1) {
        clicksound.play();
    } else {
        mew.play();
    }
    presentBriskets();
    brisketnumber.textContent = Number(localStorage.getItem("briskets"));
    brisket.classList.add("sustingus")
})
function brisketIncrease() {
    let projectbrisket = Number(localStorage.getItem("projectbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    if(projectbrisket == 0) {
        briskets++;
        projectbrisket = 1;
        localStorage.setItem("projectbrisket", 1)
        localStorage.setItem("briskets", briskets)
        brisketnumber.textContent = Number(localStorage.getItem("briskets"));
    }
}
function presentBriskets() {
    let projectbrisket = Number(localStorage.getItem("projectbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    brisketcounter.style.transition = ("transform ease-out 4s")
    brisketcounter.classList.add("showing")

    setTimeout(() => {
            catcollect.preservesPitch = false;
            if(projectbrisket == 0) {
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
            }, 1000)
    }, 4500)
}

document.addEventListener('keydown', () => {
    let perrenialbrisket = Number(localStorage.getItem("perrenialbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    let musicbrisket = Number(localStorage.getItem("musicbrisket"))
    let contactbrisket = Number(localStorage.getItem("contactbrisket"))
    let projectbrisket = Number(localStorage.getItem("projectbrisket"))
    musicbrisket = 0;
    briskets = 0;
    perrenialbrisket = 0;
    contactbrisket = 0;
    projectbrisket = 0;
    localStorage.setItem("perrenialbrisket", 0)
    localStorage.setItem("briskets", 0)
    localStorage.setItem("musicbrisket", 0)
    localStorage.setItem("contactbrisket", 0)
    localStorage.setItem("projectbrisket", 0)
    mew.play();
})