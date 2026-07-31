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
    i've been using these flower motifs for my websites ever since <strong>blossom</strong>, an old static page i made for moonshot (but never shipped)

    anyways, i started making this website back in april/may to grind out some last-minute hours for sleepover. unfortunately, i had so many big plans for it that i couldn't fully realize, so i had to continue it in macondo.
    this website is a bit of a mix of different styles, because i've done much of my css and animation learning over the <strong>48</strong> hours i've tracked. hence why the blog page is so aesthetic and the likes page is so boring.
    honestly, the hardest part about making this website might've been finding stuff about me to yap about 😭😭😭 maybe i'm not all that special gng

    anyways, that's all i have to say for now! see ya real soon!!!
    `,

    `summer school. ugh. this summer was my first experience taking a course over the summer. my mom wanted me to do chem to keep my options open in the future, but because i do music and french immersion, i had to take SOMETHING over the summer. so i took english. BIG MISTAKE. i also chose to take it in person because i thought it would help me focus. EVEN BIGGER MISTAKE.
    generally, i'd say i'm good at english class. in grade 10 i got a 94 in the class (yippee!!!) but this class was a different story. i thought i had it in the bag! most of the people in my class failed english, i was one of like. two? three? who were doing a reach-ahead course.
    
    WRONG.
    
    even though MORE THAN HALF THE CLASS USED AI FOR ALL OF THEIR WORK, THIS TEACHER GAVE ME AN 88. you might be saying "hey! that's a great mark!" DUDE. i didn't get a SINGLE mark in the entire course below a level 4 (90+) and i got a 92 on the summative. KILLMENOW.
    i managed to get it bumped up to a 90 after lowkey calling the teacher out on his bs 😭 but like. I'M STILL PISSED. 
    
    im pretty convinced he used ai on his own assignments too... genuinely pmo but at least i got a semi decent mark...`
]
const blogbox = document.getElementById("blogbox")
const blogpg = document.getElementById("blogpg")
const blogtitle = document.getElementById("blogtitle")
const previewbox = document.getElementById("previewbox")
const previewdesc = document.getElementById("previewdesc")
const previewtitle = document.getElementById("previewtitle")
const previewimg = document.getElementById("previewimg")

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

starlist.forEach((star, index) => {
    star.addEventListener('mouseenter', () => {
        hoversound.cloneNode(true).play();
        previewbox.style.animation = ("fadein 0.3s ease forwards")
        if(star == star1) {
            previewtitle.textContent = ("perennial!")
            previewimg.querySelector("img").src = ("/perennial/images/perennial.png")
            previewdesc.textContent = ("(07/30/2026) read about my website! or take a look at the readme. that works too.")
        } else if(star == star2) {
            previewtitle.textContent = ("summer school")
            previewdesc.textContent = ("(07/31/2026) i really hated summer school. summer school sux never do it...")
            previewimg.querySelector("img").src = ("/perennial/images/agony.jpg")
        } else {
            previewtitle.textContent = ("nothing... yet.")
            previewdesc.textContent = ("(--/--/----) every star has a story. and eventually, they'll all be written. a comforting thought.")
            previewimg.querySelector("img").src = ("/perennial/images/gallery/7.png")
        }






    })
    star.addEventListener('mouseleave', () => {
        previewbox.style.animation = ("fadeout 0.3s ease forwards")
    })
    if(index > 1 ) {
        star.style.animation = ("none")
        star.style.opacity = ("0.2")
    }
})
let blogClosed = true;
star1.addEventListener('mousedown', () => {
    if(blogClosed) {
        blogbox.style.display = ("flex")
        blogtitle.textContent = ("PERENNIAL")
        blogClosed = false;
        typeCancelled = true;
        clicksound.cloneNode(true).play();
        blogbox.style.animation = ("stretchx 0.5s ease-in-out forwards")

        blogpg.style.backgroundColor = ("rgb(173, 86, 162)")
        blogbox.style.backgroundColor = ("rgb(196, 100, 183)")
        setTimeout(() => {
            show.cloneNode(true).play();
            blogbox.style.animation = ("stretchy 0.8s ease-in-out forwards")
            typeText(texts[0])
        }, 600)
    }
})

star2.addEventListener('mousedown', () => {
    if(blogClosed) {
        blogbox.style.display = ("flex")
        blogClosed = false;
        blogtitle.textContent = ("SUMMER SCHOOL")
        typeCancelled = true;
        clicksound.cloneNode(true).play();
        blogbox.style.animation = ("stretchx 0.5s ease-in-out forwards")

        blogpg.style.backgroundColor = ("rgb(117, 43, 89)")
        blogbox.style.backgroundColor = ("rgb(99, 43, 90)")
        setTimeout(() => {
            show.cloneNode(true).play();
            blogbox.style.animation = ("stretchy 0.8s ease-in-out forwards")
            typeText(texts[1])
        }, 600)
    }
})

const xbutton = document.getElementById("xbutton")
xbutton.addEventListener('mousedown', () => {
    typeCancelled = true;
    clearTimeout(typeTimeout)
    blogClosed = true;
    clicksound.cloneNode(true).play();
    blogbox.style.animation = ("squishy 0.8s ease-in-out forwards")
    hide.cloneNode(true).play();
    setTimeout(() => {
        blogbox.style.animation = ("squishx 0.5s ease-in-out forwards")
        setTimeout(() => {
            blogbox.style.display = ("none")
        }, 500)
    }, 800)
})

let typeTimeout = null;
let typeCancelled = false;

function typeText(text) {
    let speed = 1;
    let typeCancelled = false;
    let currentText = 0;
    let punctuation = [".", "?", "!", "-"]

    function type() {
        if(typeCancelled) {return;}
        let speed = 1;
        const currentChar = text[currentText];
        blogpg.innerHTML = text.substring(0, ++currentText)
        if (currentChar === ",") {speed = 180;}
        if (punctuation.includes(currentChar)) {speed = 300;}

        if (currentText === text.length) {return;}
        typeTimeout = setTimeout(type, speed)
    }
    type();
}


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