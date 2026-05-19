
const hoversound = new Audio('audio/hover.mp3')
const clicksound = new Audio('audio/click2.mp3')
const discordsound = new Audio('audio/discord.wav')
const slacksound = new Audio('audio/slack.wav')
const instasound = new Audio ('audio/insta.wav')
const ytsound = new Audio ('audio/likebell.wav')
const mailsound = new Audio ('audio/mail.wav')

const tbper = document.getElementById("tbper")
const tbmus = document.getElementById("tbmus")
const tblik = document.getElementById("tblik")
const tbabt = document.getElementById("tbabt")
const tbproj = document.getElementById("tbproj")
const tbcon = document.getElementById("tbcon")
const tbmisc = document.getElementById("tbmisc")

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
    window.location.href = ("wip.html")
})
tbcon.addEventListener('mousedown', () => {
    window.location.href = ("contacts.html")
})
tbmisc.addEventListener('mousedown', () => {
    window.location.href = ("wip.html")
})
