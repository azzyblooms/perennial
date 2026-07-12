
const hoversound = new Audio('/audio/hover.mp3')
const clicksound = new Audio('/audio/click2.mp3')
const catcollect = new Audio ('/audio/catcollect.wav')
const mew = new Audio ('/audio/mew.wav')
const whoop = new Audio ('/audio/snd_slidewhist.wav')
const show = new Audio ('/audio/In.ogg')
const hide = new Audio ('/audio/Out.ogg')
if(localStorage.getItem("briskets") === null) {
    localStorage.setItem("briskets", 0)
}
if(localStorage.getItem("contactbrisket") === null) {
    localStorage.setItem("contactbrisket", 0)
}

const tbper = document.getElementById("tbper")
const tbmus = document.getElementById("tbmus")
const tblik = document.getElementById("tblik")
const tbabt = document.getElementById("tbabt")
const tbproj = document.getElementById("tbproj")
const tbcon = document.getElementById("tbcon")
const tbmisc = document.getElementById("tbmisc")
const brisket = document.getElementById("brisket")

const img1 = document.getElementById("leftphoto")
const img2 = document.getElementById("leftphoto2")
const img3 = document.getElementById("bigphoto")
const img4 = document.getElementById("rightphoto")
const img5 = document.getElementById("rightphoto2")

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

/*brisket.addEventListener('mouseenter', () => {
    brisket.textContent = ("≽^•⩊•^≼")
})
brisket.addEventListener('mouseleave', () => {
    brisket.textContent = ("≽^-⩊-^≼")
})
brisket.addEventListener('mousedown', () => {
    let contactbrisket = Number(localStorage.getItem("contactbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    brisket.textContent = "≽^•⩊-^≼";
    mew.preservesPitch = false;
    mew.playbackRate = 1.2;
    if(contactbrisket == 1) {
        clicksound.play();
    } else {
        mew.play();
    }
    presentBriskets();
    brisket.classList.add("sustingus")
    brisketnumber.textContent = Number(localStorage.getItem("briskets"));
    setTimeout(() => {
        show.play();
    }, 2350)
})
function presentBriskets() {
    let contactbrisket = Number(localStorage.getItem("contactbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    brisketcounter.style.transition = ("transform ease-out 4s")
    brisketcounter.classList.add("showing")
    setTimeout(() => {
            catcollect.preservesPitch = false;
            if(contactbrisket == 0) {
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
function brisketIncrease() {
    let contactbrisket = Number(localStorage.getItem("contactbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    if(contactbrisket == 0) {
        briskets++;
        contactbrisket = 1;
        localStorage.setItem("contactbrisket", 1)
        localStorage.setItem("briskets", briskets)
        brisketnumber.textContent = Number(localStorage.getItem("briskets"));
    }
}
document.addEventListener('keydown', () => {
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
    localStorage.setItem("briskets", 0)
    localStorage.setItem("musicbrisket", 0)
    localStorage.setItem("likesbrisket", 0)
    mew.play();
})*/