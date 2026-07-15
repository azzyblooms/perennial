
const hoversound = new Audio('/audio/hover.mp3')
const clicksound = new Audio('/audio/click2.mp3')
const catcollect = new Audio ('/audio/catcollect.wav')
const mew = new Audio ('/audio/deepmew.wav')
const whoop = new Audio ('/audio/snd_slidewhist.wav')
const show = new Audio ('/audio/In.ogg')
const fall = new Audio ('/audio/fall.wav')
const boom = new Audio ('/audio/boom.mp3')
const hide = new Audio ('/audio/Out.ogg')
if(localStorage.getItem("briskets") === null) {
    localStorage.setItem("briskets", 0)
}
if(localStorage.getItem("inceptionbrisket") === null) {
    localStorage.setItem("inceptionbrisket", 0)
}
const tb = document.getElementById("topbar")
const tbper = document.getElementById("tbper")
const tbmus = document.getElementById("tbmus")
const tblik = document.getElementById("tblik")
const tbabt = document.getElementById("tbabt")
const tbproj = document.getElementById("tbproj")
const tbcon = document.getElementById("tbcon")
const tbmisc = document.getElementById("tbmisc")
const brisket = document.getElementById("brisket")
const briskethouse = document.getElementById("briskethouse")
const spiral = document.getElementById("spiral")


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

brisket.addEventListener('mousedown', () => {
    let inceptionbrisket = Number(localStorage.getItem("inceptionbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    brisket.textContent = "≽^@w@^≼";
    brisket.offsetWidth;
    fall.play();
    clicksound.play();
    presentBriskets();
    brisketnumber.textContent = Number(localStorage.getItem("briskets"));
    brisket.classList.add("sustingus")
    setTimeout(() => {
        show.play();
    }, 5200)
    setTimeout(() => {
        document.body.classList.add("shaking")
        spiral.style.transition = "opacity ease 1.5s"
        spiral.style.opacity = 0;
        tbper.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg) translateY(${Math.random() * 15}px)`;
        tbmus.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg) translateY(${Math.random() * 15}px)`;
        tblik.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg) translateY(${Math.random() * 15}px)`;
        tbabt.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg) translateY(${Math.random() * 15}px)`;
        tbproj.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg) translateY(${Math.random() * 15})`;
        tbcon.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg) translateY(${Math.random() * 15}px)`;
        tbmisc.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg) translateY(${Math.random() * 15}spx)`;
        tb.classList.add("tbb")
        setTimeout(() => {
            document.body.classList.remove("shaking")
        }, 900)
    }, 4984)
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
    brisketcounter.style.transition = ("transform ease-out 8s")
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
                brisketcounter.style.transition = ("transform ease-in 8s")
                brisketcounter.classList.remove("showing")
                hide.play();
            }, 1000)
    }, 8584)
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
})