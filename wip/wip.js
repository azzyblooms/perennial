
const hoversound = new Audio('/perennial/audio/hover.mp3')
const clicksound = new Audio('/perennial/audio/click2.mp3')
const catcollect = new Audio ('/perennial/audio/catcollect.wav')
const mew = new Audio ('/perennial/audio/mew.wav')
const show = new Audio ('/perennial/audio/In.ogg')
const hide = new Audio ('/perennial/audio/Out.ogg')
const boom = new Audio ('/perennial/audio/boom.mp3')
const smallboom = new Audio ('/perennial/audio/boom.mp3')

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
tbmisc.addEventListener('mousedown', () => go("/wip/"))

document.addEventListener('keydown', (event) => {
    if(event.key === "b") {
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
        localStorage.setItem("projectbrisket", 0)
        localStorage.setItem("briskets", 0)
        localStorage.setItem("musicbrisket", 0)
        mew.play();
    }
})

const posSounds = [
    {
        sound: "/perennial/audio/floweryvoice/jarona1.mp3",
        text: "Jarona!"
    },
    {
        sound: "/perennial/audio/floweryvoice/jarona2.mp3",
        text: "Jarona!"
    },
    {
        sound: "/perennial/audio/floweryvoice/jarona3.mp3",
        text: "Jarona!"
    },
    {
        sound: "/perennial/audio/floweryvoice/jarona4.mp3",
        text: "Jarona!"
    },
    {
        sound: "/perennial/audio/floweryvoice/jaorangealt.mp3",
        text: "Ja- orange!"
    },
    {
        sound: "/perennial/audio/floweryvoice/jaorangealt.mp3",
        text: "Ja- orange!"
    },
    {
        sound: "/perennial/audio/floweryvoice/yes.mp3",
        text: "Yes!"
    },
    {
        sound: "/perennial/audio/floweryvoice/takethat.mp3",
        text: "Take that!"
    },
    {
        sound: "/perennial/audio/floweryvoice/thatsgreat.mp3",
        text: "That's great!"
    },
    {
        sound: "/perennial/audio/floweryvoice/wow.mp3",
        text: "Wow!"
    },
    {
        sound: "/perennial/audio/floweryvoice/sustingus.mp3",
        text: "Sustingus!"
    },
    {
        sound: "/perennial/audio/floweryvoice/glue.mp3",
        text: "Glue!"
    }
]

const negSounds = [
    {
        sound: "/perennial/audio/floweryvoice/flesh.mp3",
        text: "They're eating my flesh!"
    },
    {
        sound: "/perennial/audio/floweryvoice/no.mp3",
        text: "No, no, no!"
    },
    {
        sound: "/perennial/audio/floweryvoice/predictable.mp3",
        text: "What a predictable creature!"
    },
    {
        sound: "/perennial/audio/floweryvoice/falling.mp3",
        text: "I'm falling!"
    },
    {
        sound: "/perennial/audio/floweryvoice/dead.mp3",
        text: "You're dead."
    },
    {
        sound: "/perennial/audio/floweryvoice/goodbye.mp3",
        text: "Goodbye..."
    }
]

const enterSounds = [
    {
        sound: "/perennial/audio/floweryvoice/foundglue.mp3",
        text: "Hey guys, I think I found a glue!"
    },
    {
        sound: "/perennial/audio/floweryvoice/hehjarona.mp3",
        text: "Heh, it's my jarona!"
    },
    {
        sound: "/perennial/audio/floweryvoice/HEREICOME.mp3",
        text: "HERE I COME, SAN FRANDISCO!"
    },
    {
        sound: "/perennial/audio/floweryvoice/hey.mp3",
        text: "Hey!"
    },
    {
        sound: "/perennial/audio/floweryvoice/heyboys.mp3",
        text: "Hey, boys!"
    },
    {
        sound: "/perennial/audio/floweryvoice/heylilguy.mp3",
        text: "Hey there, little guy!"
    },
    {
        sound: "/perennial/audio/floweryvoice/itsmeflowery.mp3",
        text: "It's me, Flowery!"
    },
    {
        sound: "/perennial/audio/floweryvoice/mysterywind.mp3",
        text: "mysterious wind"
    },
    {
        sound: "/perennial/audio/floweryvoice/leafittome.mp3",
        text: "Leaf it to me!"
    },
    {
        sound: "/perennial/audio/floweryvoice/sorrywaiting.mp3",
        text: "Sorry to keep you waiting."
    },
    {
        sound: "/perennial/audio/floweryvoice/sorrywaitingalt.mp3",
        text: "Sorry to keep you waiting!"
    }
]

const allSounds = [
    {
        sound: "/perennial/audio/floweryvoice/foundglue.mp3",
        text: "Hey guys, I think I found a glue!"
    },
    {
        sound: "/perennial/audio/floweryvoice/hehjarona.mp3",
        text: "Heh, it's my jarona!"
    },
    {
        sound: "/perennial/audio/floweryvoice/HEREICOME.mp3",
        text: "HERE I COME SAN FRANDISCO!"
    },
    {
        sound: "/perennial/audio/floweryvoice/hey.mp3",
        text: "Hey!"
    },
    {
        sound: "/perennial/audio/floweryvoice/heyboys.mp3",
        text: "Hey, boys!"
    },
    {
        sound: "/perennial/audio/floweryvoice/heylilguy.mp3",
        text: "Hey there, little guy!"
    },
    {
        sound: "/perennial/audio/floweryvoice/itsmeflowery.mp3",
        text: "It's me, Flowery!"
    },
    {
        sound: "/perennial/audio/floweryvoice/mysterywind.mp3",
        text: "mysterious wind"
    },
    {
        sound: "/perennial/audio/floweryvoice/leafittome.mp3",
        text: "Leaf it to me!"
    },
    {
        sound: "/perennial/audio/floweryvoice/sorrywaiting.mp3",
        text: "Sorry to keep you waiting."
    },
    {
        sound: "/perennial/audio/floweryvoice/sorrywaitingalt.mp3",
        text: "Sorry to keep you waiting!"
    },
        {
        sound: "/perennial/audio/floweryvoice/flesh.mp3",
        text: "They're eating my flesh!"
    },
    {
        sound: "/perennial/audio/floweryvoice/no.mp3",
        text: "No, no, no!"
    },
    {
        sound: "/perennial/audio/floweryvoice/predictable.mp3",
        text: "What a predictable creature!"
    },
    {
        sound: "/perennial/audio/floweryvoice/falling.mp3",
        text: "I'm falling!"
    },
    {
        sound: "/perennial/audio/floweryvoice/dead.mp3",
        text: "You're dead."
    },
    {
        sound: "/perennial/audio/floweryvoice/goodbye.mp3",
        text: "Goodbye..."
    },     {
        sound: "/perennial/audio/floweryvoice/jarona1.mp3",
        text: "Jarona!"
    },
    {
        sound: "/perennial/audio/floweryvoice/jarona2.mp3",
        text: "Jarona!"
    },
    {
        sound: "/perennial/audio/floweryvoice/jarona3.mp3",
        text: "Jarona!"
    },
    {
        sound: "/perennial/audio/floweryvoice/jarona4.mp3",
        text: "Jarona!"
    },
    {
        sound: "/perennial/audio/floweryvoice/jaorangealt.mp3",
        text: "Ja- orange!"
    },
    {
        sound: "/perennial/audio/floweryvoice/jaorangealt.mp3",
        text: "Ja- orange!"
    },
    {
        sound: "/perennial/audio/floweryvoice/yes.mp3",
        text: "Yes!"
    },
    {
        sound: "/perennial/audio/floweryvoice/takethat.mp3",
        text: "Take that!"
    },
    {
        sound: "/perennial/audio/floweryvoice/thatsgreat.mp3",
        text: "That's great!"
    },
    {
        sound: "/perennial/audio/floweryvoice/wow.mp3",
        text: "Wow!"
    },
    {
        sound: "/perennial/audio/floweryvoice/sustingus.mp3",
        text: "Sustingus!"
    },
    {
        sound: "/perennial/audio/floweryvoice/glue.mp3",
        text: "Glue!"
    }
]



let currentJarona = new Audio('/perennial/audio/floweryvoice/foundglue.mp3')
const flowery = document.getElementById("floweryimg")

flowery.addEventListener('mousedown', () => {
    const line = allSounds[Math.floor(Math.random() * allSounds.length)]
    currentJarona = new Audio(line.sound)
    pirouette();
    currentJarona.cloneNode(true).play();
    typeText(line.text)
    drbox.style.display = "flex"
    speed = 1;
})
const drbox = document.getElementById("drtext")
const box = document.getElementById("thetext")
const flowertalk = new Audio("/perennial/audio/floweryvoice/flowertalk.mp3")

function typeText(text) {
    let speed = 35;
    let currentText = 0;
    let punctuation = [".", "?", "!", "-"]

    function type() {
        let speed = 35;
        const currentChar = text[currentText - 1];
        box.textContent = text.substring(0, ++currentText)
        //flowertalk.play();
        if (currentChar === ",") {speed = 300;}
        if (punctuation.includes(currentChar)) {speed = 600;}


        if (currentText === text.length) {walk(); return;}
        setTimeout(type, speed)
    }
    type();
}

let floweryx = -5;
let speed = 0.05;
let moving = true;

function pirouette() {
    flowery.classList.remove("walking")
    moving = false;
    flowery.classList.add("pirouette")
    flowery.style.background = ("url(/perennial/images/flowery/pirouette.png/) no-repeat")
    flowery.style.backgroundSize = ("418.29px 122px")
    flowery.style.width = ("52.29px")
    flowery.style.height = ("122px")
}

function walk() {
    flowery.classList.remove("pirouette")
    let speed = 0.5;
    flowery.classList.add("walking")
    moving = true;
    flowery.style.background = ("url(/perennial/images/flowery/flowerywalkcycle.png/) no-repeat")
    flowery.style.backgroundSize = ("176px 122px")
    flowery.style.width = ("44px")
    flowery.style.height = ("122px")
}



function update() {
    if (moving) {
        floweryx += speed;
        if (floweryx >= 105) {
            floweryx = -5
            speed = 0.05
        }
        flowery.style.left = `${floweryx}%`
    }

    requestAnimationFrame(update)
}

update();