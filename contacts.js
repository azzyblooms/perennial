
const hoversound = new Audio('audio/hover.mp3')
const clicksound = new Audio('audio/click2.mp3')
const discordsound = new Audio('audio/discord.wav')
const slacksound = new Audio('audio/slack.wav')
const instasound = new Audio ('audio/insta.wav')
const ytsound = new Audio ('audio/likebell.wav')
const mailsound = new Audio ('audio/mail.wav')
const catcollect = new Audio ('audio/catcollect.wav')
const mew = new Audio ('audio/mew.wav')
const whoop = new Audio ('audio/snd_slidewhist.wav')
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
const act = document.getElementById("act")
const brisket = document.getElementById("brisket")

const slack = document.getElementById("slack")
const discord = document.getElementById("discord")
const mail = document.getElementById("mail")
const insta = document.getElementById("insta")
const yt = document.getElementById("yt")

const slackcontact = document.getElementById("slackcontact")
const discordcontact = document.getElementById("discordcontact")
const mailcontact = document.getElementById("mailcontact")
const instacontact = document.getElementById("instacontact")
const ytcontact = document.getElementById("ytcontact")

slack.addEventListener('mousedown', () => {
    clicksound.cloneNode(true).play();
    if(slackcontact.style.filter == "opacity(0)") {
        slackcontact.style.filter = "opacity(1)"
        slacksound.cloneNode(true).play();
    } else {
        slackcontact.style.filter = "opacity(0)"
    }
})
discord.addEventListener('mousedown', () => {
    clicksound.cloneNode(true).play();
    if(discordcontact.style.filter == "opacity(0)") {
        discordcontact.style.filter = "opacity(1)"
        discordsound.cloneNode(true).play();
    } else {
        discordcontact.style.filter = "opacity(0)"
    }
})
mail.addEventListener('mousedown', () => {
    clicksound.cloneNode(true).play();
    if(mailcontact.style.filter == "opacity(0)") {
        mailcontact.style.filter = "opacity(1)"
        mailsound.cloneNode(true).play();
    } else {
        mailcontact.style.filter = "opacity(0)"
    }
})
insta.addEventListener('mousedown', () => {
    clicksound.cloneNode(true).play();
    if(instacontact.style.filter == "opacity(0)") {
        instacontact.style.filter = "opacity(1)"
        instasound.cloneNode(true).play();
    } else {
        instacontact.style.filter = "opacity(0)"
    }
})
yt.addEventListener('mousedown', () => {
    clicksound.cloneNode(true).play();
    if(ytcontact.style.filter == "opacity(0)") {
        ytcontact.style.filter = "opacity(1)"
        ytsound.cloneNode(true).play();
    } else {
        ytcontact.style.filter = "opacity(0)"
    }
})
document.addEventListener('DOMContentLoaded', () => {
    slackcontact.style.filter = "opacity(0)";
    discordcontact.style.filter = "opacity(0)";
    mailcontact.style.filter = "opacity(0)";
    instacontact.style.filter = "opacity(0)";
    ytcontact.style.filter = "opacity(0)";
})

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

act.addEventListener('mouseenter', () => {
    act.textContent = ("CAT")
    act.style.transform = ("scale(1.1)")
    hoversound.cloneNode(true).play();
})
act.addEventListener('mouseleave', () => {
    act.textContent = ("ACT")
    act.style.transform = ("scale(1)")
})
act.addEventListener('mousedown', () => {
    clicksound.cloneNode(true).play();
    brisket.classList.add("groovin")
    brisket.style.display = "inline";
    whoop.play();
})
brisket.addEventListener('mouseenter', () => {
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