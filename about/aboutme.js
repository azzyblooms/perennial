
const hoversound = new Audio('/perennial/audio/hover.mp3')
const clicksound = new Audio('/perennial/audio/click2.mp3')
const catcollect = new Audio('/perennial/audio/catcollect.wav')
const mew = new Audio('/perennial/audio/mew.wav')
const whoop = new Audio('/perennial/audio/snd_slidewhist.wav')
const show = new Audio('/perennial/audio/In.ogg')
const hide = new Audio('/perennial/audio/Out.ogg')
if(localStorage.getItem("briskets") === null) {
    localStorage.setItem("briskets", 0)
}
if(localStorage.getItem("contactbrisket") === null) {
    localStorage.setItem("contactbrisket", 0)
}
dayjs.extend(window.dayjs_plugin_duration);


const tbper = document.getElementById("tbper")
const tbmus = document.getElementById("tbmus")
const tblik = document.getElementById("tblik")
const tbabt = document.getElementById("tbabt")
const tbproj = document.getElementById("tbproj")
const tbcon = document.getElementById("tbcon")
const tbmisc = document.getElementById("tbmisc")
const brisket = document.getElementById("brisket")
const docage = document.getElementById("age")
const basket = document.getElementById("funfactbasket")
const shader = document.getElementById("pageshader")
const ffwrap = document.getElementById("ffwrap")
const fact = document.getElementById("funfact")

const img1 = document.getElementById("outphotoleft")
const img2 = document.getElementById("photoleft")
const img3 = document.getElementById("bigphoto")
const img4 = document.getElementById("photoright")
const img5 = document.getElementById("outphotoright")

const images = [1, 2, 3, 4, 5, 6, 7];
const docimg = [img1, img2, img3, img4, img5];

const dyears = document.getElementById("years")
const dmonths = document.getElementById("months")
const ddays = document.getElementById("days")
const dhours = document.getElementById("hours")
const dminutes = document.getElementById("minutes")
const dseconds = document.getElementById("seconds")


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
tbmisc.addEventListener('mousedown', () => go("/misc/"))

const birthdate = dayjs("2010-02-03T07:52:00");

function updateCounter() {
    const now = dayjs();
    let cursor = birthdate;

    const years = now.diff(cursor, "year")
    cursor = cursor.add(years, "year") 

    const months = now.diff(cursor, "month")
    cursor = cursor.add(months, "month")

    const days = now.diff(cursor, "day")
    cursor = cursor.add(days, "day")

    const hours = now.diff(cursor, "hour")
    cursor = cursor.add(hours, "hour")

    const minutes = now.diff(cursor, "minute")
    cursor = cursor.add(minutes, "minute")

    const seconds = now.diff(cursor, "second")

    dyears.textContent = `${years} years`;
    dmonths.textContent = `${months} months`;
    ddays.textContent = `${days} days`;
    dhours.textContent = `${hours} hours`;
    dminutes.textContent = `${minutes} minutes`;
    dseconds.textContent = `${seconds} seconds old.`
}
updateCounter();
setInterval(updateCounter, 1000);

document.addEventListener("DOMContentLoaded", () => {
    updateImages();
})
document.addEventListener("keydown", (event) => {
    if(event.key === 'ArrowRight' || event.key === 'd') {
        goRight();
    }
})
document.addEventListener("keydown", (event) => {
    if(event.key === 'ArrowLeft' || event.key === 'a') {
        goLeft();
    }
})
function updateImages() {
    docimg.forEach((img, index) => {
        img.src = `/perennial/images/gallery/${images[index]}.png`;
    });
}
function goRight() {
    images.unshift(images.pop());
    updateImages();
    hoversound.cloneNode(true).play();
}
function goLeft() {
    images.push(images.shift());
    updateImages();
    hoversound.cloneNode(true).play();
}
basket.addEventListener('mousedown', () => {
    clicksound.cloneNode(true).play();
    shader.style.zIndex = 5;
    ffwrap.style.zIndex = 6;
    ffwrap.style.animation = ("factenter 1s ease-in-out")
    shader.style.opacity = 0.6;
    setTimeout(() => {
        shader.style.opacity = 0;
        ffwrap.style.animation = ("factexit 1s ease-in-out")
        setTimeout(() => {
            shader.style.zIndex = -100;
            ffwrap.style.zIndex = -100;
        }, 1000)
    }, 5000)
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