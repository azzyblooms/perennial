const musicbutton = document.getElementById("musicbutton");
const likebutton = document.getElementById("likebutton");
const mebutton = document.getElementById("mebutton");
const projectbutton = document.getElementById("projectbutton");
const contactbutton = document.getElementById("contactbutton");
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

const hoversound = new Audio('/perennial/audio/hover.mp3')
const clicksound = new Audio('/perennial/audio/click2.mp3')
const catcollect = new Audio ('/perennial/audio/catcollect.wav')
const mew = new Audio ('/perennial/audio/mew.wav')
const show = new Audio ('/perennial/audio/In.ogg')
const hide = new Audio ('/perennial/audio/Out.ogg')

const tbper = document.getElementById("tbper")
const tbmus = document.getElementById("tbmus")
const tblik = document.getElementById("tblik")
const tbabt = document.getElementById("tbabt")
const tbblog = document.getElementById("tbblog")
const tbproj = document.getElementById("tbproj")
const tbcon = document.getElementById("tbcon")

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
    go("/music/")
})
projectbutton.addEventListener('mousedown', () => {
    clicksound.play();
    go("/projects/")
})
contactbutton.addEventListener('mousedown', () => {
    clicksound.play();
    go("/contacts/")
})
likebutton.addEventListener('mousedown', () => {
    clicksound.play();
    go("/likes/")
})
mebutton.addEventListener('mousedown', () => {
    clicksound.play();
    go("/about/")
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

document.addEventListener('keydown', (event) => {
    if(event.key === "b") {
        let perrenialbrisket = Number(localStorage.getItem("perrenialbrisket"))
        let briskets = Number(localStorage.getItem("briskets"))
        let contactbrisket = Number(localStorage.getItem("contactbrisket"))
        let likesbrisket = Number(localStorage.getItem("likesbrisket"))
        let inceptionbrisket = Number(localStorage.getItem("inceptionbrisket"))
        let projectbrisket = Number(localStorage.getItem("projectbrisket"))
        let aboutbrisket = Number(localStorage.getItem("aboutbrisket"))
        let musicbrisket = Number(localStorage.getItem("musicbrisket"))
        musicbrisket = 0;
        projectbrisket = 0;
        inceptionbrisket = 0;
        likesbrisket = 0;
        contactbrisket = 0;
        aboutbrisket = 0;
        briskets = 0;
        perrenialbrisket = 0;
        localStorage.setItem("perrenialbrisket", 0)
        localStorage.setItem("aboutbrisket", 0)
        localStorage.setItem("contactbrisket", 0)
        localStorage.setItem("inceptionbrisket", 0)
        localStorage.setItem("likesbrisket", 0)
        localStorage.setItem("projectbrisket", 0)
        localStorage.setItem("briskets", 0)
        localStorage.setItem("musicbrisket", 0)
        mew.play();
    }
})

const bandtab = document.getElementById("bandtab")
const contenttab = document.getElementById("contenttab")
const buildtab = document.getElementById("buildtab")
const comptab = document.getElementById("comptab")
const pageturn = new Audio("/perennial/audio/turnpage.mp3")
const compfile = new Audio("/perennial/audio/composition.mp3")

const tabbox = document.getElementById("tabbox")
const tabtitle = document.getElementById("tabtitle")
const tabimg = document.getElementById("tabimg")
const tabyap = document.getElementById("tabyap")
const bottomimg1 = document.getElementById("bottomimg1")
const bottomimg2 = document.getElementById("bottomimg2")

const bandcolour = "rgb(211, 107, 194)";
const bandcolouralt = "rgb(150, 66, 136)";
const contentcolour = "rgb(214, 77, 118)";
const contentcolouralt = "rgb(150, 66, 91)";
const buildcolour = "rgb(212, 129, 73)";
const buildcolouralt = "rgb(150, 100, 66)";
const compcolour = "rgb(87, 170, 224)";
const compcolouralt = "rgb(66, 116, 150)";





bandtab.addEventListener('mousedown', () => {
    bandtab.style.backgroundColor = (`${bandcolour}`);
    contenttab.style.backgroundColor = (`${contentcolouralt}`);
    buildtab.style.backgroundColor = (`${buildcolouralt}`);
    comptab.style.backgroundColor = (`${compcolouralt}`);
    tabbox.style.backgroundColor = (`${bandcolour}`);
    tabtitle.style.backgroundColor = (`${bandcolouralt}`);
    tabyap.style.backgroundColor = (`${bandcolouralt}`)
    pageturn.cloneNode(true).play();
    clicksound.cloneNode(true).play();

    bandtab.style.borderBottom = ("none")
    contenttab.style.borderBottom = ("4px solid white")
    buildtab.style.borderBottom = ("4px solid white")
    comptab.style.borderBottom = ("4px solid white")
    tabimg.style.animation = ("none");

    compfile.pause();
    tabyap.textContent = ("i am part of the senior concert band at my high school! we perform major shows multiple times each year along with some smaller performances scattered in between. if you're in ottawa, come see us!!")
    tabimg.src = ("/perennial/images/azzy.png");
    tabimg.style.borderRadius = ("5px");
    tabtitle.textContent = ("CONCERT BAND")
    bottomimg1.src = ("/perennial/images/azzy.png");
    bottomimg2.src = ("/perennial/images/azzy.png");

})
contenttab.addEventListener('mousedown', () => {
    contenttab.style.backgroundColor = (`${contentcolour}`);
    bandtab.style.backgroundColor = (`${bandcolouralt}`);
    buildtab.style.backgroundColor = (`${buildcolouralt}`);
    comptab.style.backgroundColor = (`${compcolouralt}`);
    tabbox.style.backgroundColor = (`${contentcolour}`);
    tabtitle.style.backgroundColor = (`${contentcolouralt}`);
    tabyap.style.backgroundColor = (`${contentcolouralt}`)
    pageturn.cloneNode(true).play();
    clicksound.cloneNode(true).play();

    bandtab.style.borderBottom = ("4px solid white")
    contenttab.style.borderBottom = ("none")
    buildtab.style.borderBottom = ("4px solid white")
    comptab.style.borderBottom = ("4px solid white")
    compfile.pause();
    tabyap.textContent = ("i upload content for fun on my youtube and instagram accounts! i mostly make music content and practice videos, but tbh i'll just post whatever i feel like 😭😭😭 check out my contacts page to learn more!")
    tabimg.src = ("/perennial/images/azzy.png");
    tabimg.style.borderRadius = ("5px");
    tabtitle.textContent = ("MY CONTENT")
    tabimg.style.animation = ("none");
    bottomimg1.src = ("/perennial/images/azzy.png");
    bottomimg2.src = ("/perennial/images/azzy.png");
})
buildtab.addEventListener('mousedown', () => {
    buildtab.style.backgroundColor = (`${buildcolour}`);
    contenttab.style.backgroundColor = (`${contentcolouralt}`);
    bandtab.style.backgroundColor = (`${bandcolouralt}`);
    comptab.style.backgroundColor = (`${compcolouralt}`);
    tabbox.style.backgroundColor = (`${buildcolour}`);
    tabtitle.style.backgroundColor = (`${buildcolouralt}`);
    tabyap.style.backgroundColor = (`${buildcolouralt}`)
    pageturn.cloneNode(true).play();
    clicksound.cloneNode(true).play();

    bandtab.style.borderBottom = ("4px solid white")
    contenttab.style.borderBottom = ("4px solid white")
    buildtab.style.borderBottom = ("none")
    comptab.style.borderBottom = ("4px solid white")
    compfile.pause();
    tabyap.textContent = ("i do actually like hardware and engineering, just not when it's coding! i like to build contraptions and doohickeys with random stuff. i really want to get into 3d printing, and i'm working on a 3d printable contra-alto clarinet extension!")
    tabimg.src = ("/perennial/images/azzy.png");
    tabimg.style.borderRadius = ("5px");
    tabimg.style.animation = ("none");
    tabtitle.textContent = ("CREATIONS")
    bottomimg1.src = ("/perennial/images/azzy.png");
    bottomimg2.src = ("/perennial/images/azzy.png");
})
comptab.addEventListener('mousedown', () => {
    buildtab.style.backgroundColor = (`${buildcolouralt}`);
    contenttab.style.backgroundColor = (`${contentcolouralt}`);
    bandtab.style.backgroundColor = (`${bandcolouralt}`);
    comptab.style.backgroundColor = (`${compcolour}`);
    tabbox.style.backgroundColor = (`${compcolour}`);
    tabtitle.style.backgroundColor = (`${compcolouralt}`);
    tabyap.style.backgroundColor = (`${compcolouralt}`)
    pageturn.cloneNode(true).play();
    clicksound.cloneNode(true).play();
    tabimg.style.animation = ("none");


    bandtab.style.borderBottom = ("4px solid white")
    contenttab.style.borderBottom = ("4px solid white")
    buildtab.style.borderBottom = ("4px solid white")
    comptab.style.borderBottom = ("none")

    tabyap.textContent = ("in addition to music performance, i also dabble in composing. i mostly write/arrange for small groups, like sax or clarinet choir, but i'm experimenting with writing a fully orchestrated band piece sometime soon!")
    tabimg.src = ("/perennial/images/vinyl.png");
    tabimg.style.borderRadius = ("125px");
    tabtitle.textContent = ("COMPOSITION")
    bottomimg1.src = ("/perennial/images/azzy.png");
    bottomimg2.src = ("/perennial/images/azzy.png");
})
tabimg.addEventListener('mousedown', () => {
    if(tabimg.style.borderRadius === ("125px")) {
        tabimg.style.animation = ("spin 4s linear forwards infinite")
        if(compfile.paused) {
            compfile.play();
            tabimg.style.animationPlayState = ("running")
        } else {
            compfile.pause();
            tabimg.style.animationPlayState = ("paused")
        }
        clicksound.cloneNode(true).play();
    }
})