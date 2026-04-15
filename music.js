const yapincoming = document.getElementById("yapincoming");
const musicbigbox = document.getElementById("musicbigbox")
const hoversound = new Audio('audio/hover.mp3')
const clicksound = new Audio('audio/click2.mp3')
const boom = new Audio ('audio/boom.mp3')
const ihover = document.getElementById("ihover")
const sidebox = document.getElementById("sidebox")
const closeside = document.getElementById("closeside")
const bigbox = document.getElementById("musicbigbox")
const abttsimg = document.getElementById("abttsimg")
const ititbox = document.getElementById("ititbox")
const abtyap = document.getElementById("abtyap")

const flt = document.getElementById("flt")
const bcl = document.getElementById("bcl")
const tpt = document.getElementById("tpt")
const acc = document.getElementById("acc")
const asx = document.getElementById("asx")
const tsx = document.getElementById("tsx")
const cbc = document.getElementById("cbc")
const clo = document.getElementById("clo")
const mal = document.getElementById("mal")

const pno = document.getElementById("pno")
const bsx = document.getElementById("bsx")
const eup = document.getElementById("eup")
const clt = document.getElementById("clt")
const tbn = document.getElementById("tbn")

const tbper = document.getElementById("tbper")
const tbmus = document.getElementById("tbmus")
const tblik = document.getElementById("tblik")
const tbabt = document.getElementById("tbabt")
const tbproj = document.getElementById("tbproj")
const tbcon = document.getElementById("tbcon")
const tbmisc = document.getElementById("tbmisc")

tbper.addEventListener('mousedown', () => {
    window.location.href = ("index.html")
})
tbmus.addEventListener('mousedown', () => {
    window.location.href = ("music.html")
})
tblik.addEventListener('mousedown', () => {
    window.location.href = ("likes.html")
})
/*tbabt.addEventListener('mousedown', () => {
    window.location.href = ("aboutme.html")
})
tbproj.addEventListener('mousedown', () => {
    window.location.href = ("projects.html")
})
tbcon.addEventListener('mousedown', () => {
    window.location.href = ("contact.html")
})
tbmisc.addEventListener('mousedown', () => {
    window.location.href = ("misc.html")
})
*/
yapincoming.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
yapincoming.addEventListener('mousedown', () => {
    boom.play();
    musicbigbox.style.display = ("block");
})

flt.addEventListener('mouseenter', () => {
    ihover.textContent = ("flute")
    hoversound.cloneNode(true).play();
})
flt.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

bcl.addEventListener('mouseenter', () => {
    ihover.textContent = ("bass clarinet")
    hoversound.cloneNode(true).play();
})
bcl.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

tpt.addEventListener('mouseenter', () => {
    ihover.textContent = ("trumpet")
    hoversound.cloneNode(true).play();
})
tpt.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

acc.addEventListener('mouseenter', () => {
    ihover.textContent = ("accordion")
    hoversound.cloneNode(true).play();
})
acc.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

asx.addEventListener('mouseenter', () => {
    ihover.textContent = ("alto sax")
    hoversound.cloneNode(true).play();
})
asx.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

tsx.addEventListener('mouseenter', () => {
    ihover.textContent = ("tenor sax")
    hoversound.cloneNode(true).play();
})
tsx.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

cbc.addEventListener('mouseenter', () => {
    ihover.textContent = ("contrabass clarinet")
    hoversound.cloneNode(true).play();
})
cbc.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

clo.addEventListener('mouseenter', () => {
    ihover.textContent = ("cello")
    hoversound.cloneNode(true).play();
})
clo.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

mal.addEventListener('mouseenter', () => {
    ihover.textContent = ("mallets")
    hoversound.cloneNode(true).play();
})
mal.addEventListener('mouseleave', () => {
    ihover.textContent = ("and many more!")
})

closeside.addEventListener('mousedown', () => {
    hideSide();
})

pno.addEventListener('mousedown', () => {
    pno.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/piano.png")
    ititbox.textContent = ("piano")
    abtyap.textContent = ("the piano was my first real instrument. my family put me into lessons when i was like 3 or 4 (i lowkey dont remember 😭) and it was pretty alright! i like the piano but it started to feel like a chore instead of an instrument i actively enjoyed and wanted to pursue, and i stopped taking lessons for it in 2024. i still play the piano, but not as often as i once did, and i'm not quite as good as i was before. i used to play piano in SIDEQUEST OTTAWA (until i quit 💀) and now i mostly do it for fun. i might pick it up again and do my rcm exams tho bc it'll probably be useful!!!! <br><br> tl;dr im glad i learned piano and its a pretty decent instrument")
    clicksound.cloneNode(true).play();
    showSide();
})
bsx.addEventListener('mousedown', () => {
    bsx.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/bari.png")
    ititbox.textContent = ("baritone sax")
    abtyap.textContent = ("I LOVE MY SAXY PHONE!!!!! i started playing bari sax in grade 9 after my school's bass clarinet started tweaking out on me (rip.... only lasted 2 weeks...) and i feel in love IMMEDIATELY! i started learning it, got a teacher and applied to canterbury!!! unforsch i got in for clarinet but i still get to play it for jazz this year! after all, they DO call me the BARI SAX GUY!!!!! i also got to come along with LBP's band trip last year to play with them at wonderland! i'm hopefully planning on pursuing bari sax further on in my life, and i look forward to any opportunities i get to play it! top 3 instruments of all time i swear 🤤")
    clicksound.cloneNode(true).play();
    showSide();
})
eup.addEventListener('mousedown', () => {
    eup.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/euph.png")
    ititbox.textContent = ("euphonium")
    abtyap.textContent = ("\"it's a baby tuba 🥹\" the euphonium is pretty cool! i first started playing it in grade 7 after my trombone posture got corrected and i decided i HATED IT and RAGE QUIT!!!! anyways, turns out buttons are a LOT easier than slide positions! i played it throughout all of my band time at ND, and even became brass section leader 🤑 i ended up quitting after grade 9 though because i got kinda bored of brass and wanted to try reeds for once. i'm picking it up again for a duet, though! turns out i really havent forgotten how to play low brass!!!! i'm so goated like that yk")
    clicksound.cloneNode(true).play();
    showSide();
})
clt.addEventListener('mousedown', () => {
    clt.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/clarinet.png")
    ititbox.textContent = ("clarinet")
    abtyap.textContent = ("clarinet. my mortal enemy. and unfortunately my program instrument at canterbury. i literally only learned it for a music project in grade 9 and had 2 weeks of experience when i got in for canterbury how did ts even happen bro 😭😭😭 anyways, i've been kinda learning to tolerate the clarinet. it isnt easy, but i've finally started getting up to speed with the rest of the band! it's nothing really special, but it IS what i go to music school to do, so i suppose that's noteworthy. haha. NOTEworthy. ha. haha. ha. clarinet is a chopped ahh instrument but if it wasnt for me playing it i wouldn't be at the best school in ottawa so yk... you win some, you lose some!")
    clicksound.cloneNode(true).play();
    showSide();
})
tbn.addEventListener('mousedown', () => {
    tbn.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/tbn.png")
    ititbox.textContent = ("trombone")
    abtyap.textContent = ("probably my least played instrument i'd say i'm somewhat proficient at. i played it for most of grade 7 band, and was pretty alright, i guess!! again, nothing really special. i liked the trombone until i found out i had to hold it UP and then poor baby azzy couldn't handle having an instrument on her shoulder so i quit 💀 but hey! i'm coming back to it for a duet too!!! and who knows, i might have to do it for jazz band next year if i cant get a spot on the bari sax 😓")
    clicksound.cloneNode(true).play();
    showSide();
})
flt.addEventListener('mousedown', () => {
    flt.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/flt.png")
    ititbox.textContent = ("flute")
    abtyap.textContent = ("i lowkey stole my sister's flute and learned it for funsies!!! fingerings are pretty similar to clarinet and sax so it wasn't all that hard, i guess. i'm really flat though. don't like that very much. also i cant hit high notes. Gulp! i'm glad i'm not a flautist.")
    clicksound.cloneNode(true).play();
    showSide();
})
bcl.addEventListener('mousedown', () => {
    bcl.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/bcl.png")
    ititbox.textContent = ("bass clarinet")
    abtyap.textContent = ("i picked up bass clarinet at the start of grade 9 and genuinely started to lock in (i assumed this would be my new main instrument) and i really loved it!!! and then the keys stopped working like 3 weeks in and i had to jump ship 💔 i really hope i get another chance to play low clarinets though, they're really fun!")
    clicksound.cloneNode(true).play();
    showSide();
})
cbc.addEventListener('mousedown', () => {
    cbc.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/cbc.png")
    ititbox.textContent = ("contrabass clarinet")
    abtyap.textContent = ("woah, was that... foreshadowing???? earlier this year i found out my school has contra clarinets and my band director said i can play one next year! im super duper super duper super duper excited!!!! not really much to say yet since we dont get the contrabass back until may 😓")
    clicksound.cloneNode(true).play();
    showSide();
})
acc.addEventListener('mousedown', () => {
    acc.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/acc.png")
    ititbox.textContent = ("accordion")
    abtyap.textContent = ("as a newfie, it is my born and bred duty to learn the accordion. i learned it in a few days for a heritage project back in grade 6 and then. barely touched it afterwards. i'm pretty alright, though!!! i learned pretty fast!!!")
    clicksound.cloneNode(true).play();
    showSide();
})
asx.addEventListener('mousedown', () => {
    asx.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/asx.png")
    ititbox.textContent = ("alto sax")
    abtyap.textContent = ("i played this for like. 1 or 2 band rehearsals in grade 9 and then had to quit because of yearbook 💔 CAN SOMEONE EXPLAIN WHY THEY DIDNT HAVE A BAND AT ND FOR THE FIRST 8 MONTHS OF THE SCHOOL YEAR AND ONLY HAD THE BAND FOR LIKE THE LAST MONTH??? IM STILL MAD ABOUT THAT")
    clicksound.cloneNode(true).play();
    showSide();
})
tsx.addEventListener('mousedown', () => {
    tsx.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/tsx.png")
    ititbox.textContent = ("tenor sax")
    abtyap.textContent = ("i played this for a single period back in grade 9 when i was going ham with reeds. i have no idea why i put this one here tbh. i mean, i can play it, i guess!!!")
    clicksound.cloneNode(true).play();
    showSide();
})
tpt.addEventListener('mousedown', () => {
    tpt.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/tpt.png")
    ititbox.textContent = ("trumpet")
    abtyap.textContent = ("as brass section leader, i just HAD to learn trumpet. its easy as shit guys idk what everyone's complaining about 😭 anyways, this is one of the few instruments in this section that i actually own! i plan on restoring my old trumpet to playing condition and actually learning and practicing it this time!!!")
    clicksound.cloneNode(true).play();
    showSide();
})
clo.addEventListener('mousedown', () => {
    clo.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/clo.png")
    ititbox.textContent = ("cello")
    abtyap.textContent = ("learned it for discipline switch in grade 10. i was pretty bad at it. nuff said.")
    clicksound.cloneNode(true).play();
    showSide();
})
mal.addEventListener('mousedown', () => {
    mal.style.borderColor = ("rgb(192, 192, 192)")
    abttsimg.src = ("images/mal.png")
    ititbox.textContent = ("mallets")
    abtyap.textContent = ("sometimes during lunch i'll just start playing the mallets because they're always out and theres no restrictions on who can play them!!!! it's pretty sweet and i'm not actually that bad at them!!! like i could probably do mallets for a music group if i was needed.")
    clicksound.cloneNode(true).play();
    showSide();
})
function showSide() {
    sidebox.style.display = ("block")
    musicbigbox.style.left = ("50%")
    musicbigbox.style.transform = ("translateX(-189.5px)")
}
function hideSide() {
    sidebox.style.display = ("none")
    musicbigbox.style.left = ("0%")
    musicbigbox.style.transform = ("translateX(0px)")
}