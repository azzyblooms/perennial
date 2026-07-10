
const hoversound = new Audio('/audio/hover.mp3')
const clicksound = new Audio('/audio/click2.mp3')
const catcollect = new Audio ('/audio/catcollect.wav')
const mew = new Audio ('/audio/mew.wav')
const show = new Audio ('/audio/In.ogg')
const hide = new Audio ('/audio/Out.ogg')
const boom = new Audio ('/audio/boom.mp3')
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
const briskethouse = document.getElementById("briskethouse")
const pb1github = document.getElementById("pb1github")
const pb1image = document.getElementById("pb1img")
const pb2github = document.getElementById("pb2github")
const pb2image = document.getElementById("pb2img")
const pb3github = document.getElementById("pb3github")
const pb3image = document.getElementById("pb3img")
const pb4github = document.getElementById("pb4github")
const pb4image = document.getElementById("pb4img")
const pb5github = document.getElementById("pb5github")
const pb5image = document.getElementById("pb5img")
const mb1github = document.getElementById("mb1github")
const mb1image = document.getElementById("mb1img")
const mb2github = document.getElementById("mb2github")
const mb2image = document.getElementById("mb2img")
const b1 = document.getElementById("projbox1")
const b2 = document.getElementById("projbox2")
const b3 = document.getElementById("projbox3")
const b4 = document.getElementById("projbox4")
const b5 = document.getElementById("projbox5")
const mb1 = document.getElementById("mb1")
const mb2 = document.getElementById("mb2")
const majorbox = document.getElementById("majorproj")
const minorbox = document.getElementById("minorproj")
let open = false;
let mopen = false;
let overbox = false;
let moverbox = false;

b1.addEventListener('mouseenter', () => {
    overbox = true;
})
b1.addEventListener('mouseleave', () => {
    overbox = false;
})
b2.addEventListener('mouseenter', () => {
    overbox = true;
})
b2.addEventListener('mouseleave', () => {
    overbox = false;
})
b3.addEventListener('mouseenter', () => {
    overbox = true;
})
b3.addEventListener('mouseleave', () => {
    overbox = false;
})
b4.addEventListener('mouseenter', () => {
    overbox = true;
})
b4.addEventListener('mouseleave', () => {
    overbox = false;
})
b5.addEventListener('mouseenter', () => {
    overbox = true;
})
b5.addEventListener('mouseleave', () => {
    overbox = false;
})

mb1.addEventListener('mouseenter', () => {
    moverbox = true;
})
mb1.addEventListener('mouseleave', () => {
    moverbox = false;
})
mb2.addEventListener('mouseenter', () => {
    moverbox = true;
})
mb2.addEventListener('mouseleave', () => {
    moverbox = false;
})



majorbox.addEventListener('mouseenter', () => {
    if(!open) {
        majorbox.style.backgroundColor = ("rgb(160, 40, 96)")
        hoversound.cloneNode(true).play();
    }
})
majorbox.addEventListener('mouseleave', () => {
    majorbox.style.backgroundColor = ("rgb(175, 42, 104)")
})
majorbox.addEventListener('mousedown', () => {
    if(!overbox) {
        open = !open;
        if(open) {
            boom.cloneNode(true).play();
            majorbox.style.paddingBottom = ("40px")
            b1.style.display = ("flex")
            b2.style.display = ("flex")
            b3.style.display = ("flex")
            b4.style.display = ("flex")
            b5.style.display = ("flex")
        } else {
            clicksound.cloneNode(true).play();
            majorbox.style.paddingBottom = ("30px")
            b1.style.display = ("none")
            b2.style.display = ("none")
            b3.style.display = ("none")
            b4.style.display = ("none")
            b5.style.display = ("none")
        }
    }
})

minorbox.addEventListener('mouseenter', () => {
    if(!mopen) {
        minorbox.style.backgroundColor = ("rgb(160, 40, 96)")
        hoversound.cloneNode(true).play();
    }
})
minorbox.addEventListener('mouseleave', () => {
    minorbox.style.backgroundColor = ("rgb(175, 42, 104)")
})
minorbox.addEventListener('mousedown', () => {
    if(!moverbox) {
        mopen = !mopen;
        if(mopen) {
            boom.cloneNode(true).play();
            minorbox.style.paddingBottom = ("30px")
            mb1.style.display = ("flex")
            mb2.style.display = ("flex")
        } else {
            clicksound.cloneNode(true).play();
            minorbox.style.paddingBottom = ("20px")
            mb1.style.display = ("none")
            mb2.style.display = ("none")
        }
    }
})


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
    briskethouse.classList.add("moving")
})
pb1image.addEventListener('mouseleave', () => {
    briskethouse.classList.remove("moving")
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

pb3github.addEventListener('mousedown', () => {
    window.open("https://github.com/azzyblooms/brass.js", "_blank")
    clicksound.play();
})
pb3github.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
pb3image.addEventListener('mousedown', () => {
    window.open("https://azzyblooms.github.io/brass.js", "_blank")
    clicksound.play();
})
pb3image.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})

pb4github.addEventListener('mousedown', () => {
    window.open("https://github.com/azzyblooms/clikmin", "_blank")
    clicksound.play();
})
pb4github.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
pb4image.addEventListener('mousedown', () => {
    window.open("https://azzyblooms.github.io/clikmin", "_blank")
    clicksound.play();
})
pb4image.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
pb5github.addEventListener('mousedown', () => {
    window.open("https://github.com/azzyblooms/perennial", "_blank")
    clicksound.play();
})
pb5github.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
pb5image.addEventListener('mousedown', () => {
    window.location.href = '/inception'
    clicksound.play();
})
pb5image.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})

mb1github.addEventListener('mousedown', () => {
    window.open("https://github.com/azzyblooms/trumpet-practice", "_blank")
    clicksound.play();
})
mb1github.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
mb1image.addEventListener('mousedown', () => {
    window.open("https://azzyblooms.itch.io/trumpet", "_blank")
    clicksound.play();
})
mb1image.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
mb2github.addEventListener('mousedown', () => {
    window.open("https://github.com/azzyblooms/blossom", "_blank")
    clicksound.play();
})
mb2github.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
mb2image.addEventListener('mousedown', () => {
    window.open("https://azzyblooms.github.io/blossom", "_blank")
    clicksound.play();
})
mb2image.addEventListener('mouseenter', () => {
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
    brisket.offsetWidth;
    briskethouse.classList.remove("moving")
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
    setTimeout(() => {
        show.play();
    }, 2350)
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