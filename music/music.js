const yapincoming = document.getElementById("yapincoming");
const musicbigbox = document.getElementById("musicbigbox")
const hoversound = new Audio('/perennial/audio/hover.mp3')
const clicksound = new Audio('/perennial/audio/click2.mp3')
const boom = new Audio('/perennial/audio/boom.mp3')
const catcollect = new Audio('/perennial/audio/catcollect.wav')
const mew = new Audio('/perennial/audio/mew.wav')
const show = new Audio('/perennial/audio/In.ogg')
const hide = new Audio('/perennial/audio/Out.ogg')

const ihover = document.getElementById("ihover")
const sidebox = document.getElementById("sidebox")
const closeside = document.getElementById("closeside")
const bigbox = document.getElementById("musicbigbox")
const abttsimg = document.getElementById("abttsimg")
const ititbox = document.getElementById("ititbox")
const abtyap = document.getElementById("abtyap")
const doodlebcl = document.getElementById("doodlebcl")
const doodlecat = document.getElementById("doodlecat")
const brisketcounter = document.getElementById("brisketcounter")
const brisketnumber = document.getElementById("brisketnumber")
if(localStorage.getItem("briskets") === null) {
    localStorage.setItem("briskets", 0)
}
if(localStorage.getItem("musicbrisket") === null) {
    localStorage.setItem("musicbrisket", 0)
}
const musicboxes = document.getElementById("musboxes")
const flt = document.getElementById("flt")
const bcl = document.getElementById("bcl")
const tpt = document.getElementById("tpt")
const acc = document.getElementById("acc")
const asx = document.getElementById("asx")
const cto = document.getElementById("cto")
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

yapincoming.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
yapincoming.addEventListener('mousedown', () => {
    boom.play();
    musicboxes.style.boxShadow = ("5px 5px 10px 2px rgba(0,0,0,0.3);")
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

cto.addEventListener('mouseenter', () => {
    ihover.textContent = ("contralto clarinet")
    hoversound.cloneNode(true).play();
})
cto.addEventListener('mouseleave', () => {
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
    clicksound.cloneNode(true).play();
})
closeside.addEventListener('mouseenter', () => {
    hoversound.cloneNode(true).play();
})
pno.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("piano") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        pno.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/piano.png")
        ititbox.textContent = ("piano")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("the piano was my first real instrument. my family put me into lessons when i was like 3 or 4 (i lowkey dont remember 😭) and it was pretty alright! i like the piano but it started to feel like a chore instead of an instrument i actively enjoyed and wanted to pursue, and i stopped taking lessons for it in 2024. i still play the piano, but not as often as i once did, and i'm not quite as good as i was before. i used to play piano in SIDEQUEST OTTAWA (until i quit 💀) and now i mostly do it for fun. i might pick it up again and do my rcm exams tho bc it'll probably be useful!!!! \n \n tl;dr im glad i learned piano and its a pretty decent instrument")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
bsx.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("baritone sax") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        bsx.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/bari.png")
        ititbox.textContent = ("baritone sax")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("I LOVE MY SAXY PHONE!!!!! i started playing bari sax in grade 9 after my school's bass clarinet started tweaking out on me (rip.... only lasted 2 weeks...) and i feel in love IMMEDIATELY! i started learning it, got a teacher and applied to canterbury!!! unforsch i got in for clarinet but i still get to play it for jazz this year! after all, they DO call me the BARI SAX GUY!!!!! i also got to come along with LBP's band trip last year to play with them at wonderland! i'm hopefully planning on pursuing bari sax further on in my life, and i look forward to any opportunities i get to play it! top 3 instruments of all time i swear 🤤")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
eup.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("euphonium") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        eup.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/euph.png")
        ititbox.textContent = ("euphonium")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("\"it's a baby tuba 🥹\" the euphonium is pretty cool! i first started playing it in grade 7 after my trombone posture got corrected and i decided i HATED IT and RAGE QUIT!!!! anyways, turns out buttons are a LOT easier than slide positions! i played it throughout all of my band time at ND, and even became brass section leader 🤑 i ended up quitting after grade 9 though because i got kinda bored of brass and wanted to try reeds for once. i'm picking it up again for a duet, though! turns out i really havent forgotten how to play low brass!!!! i'm so goated like that yk")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
clt.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("clarinet") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        clt.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/clarinet.png")
        ititbox.textContent = ("clarinet")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("clarinet. my mortal enemy. and unfortunately my program instrument at canterbury. i literally only learned it for a music project in grade 9 and had 2 weeks of experience when i got in for canterbury how did ts even happen bro 😭😭😭 anyways, i've been kinda learning to tolerate the clarinet. it isnt easy, but i've finally started getting up to speed with the rest of the band! it's nothing really special, but it IS what i go to music school to do, so i suppose that's noteworthy. haha. NOTEworthy. ha. haha. ha. clarinet is a chopped ahh instrument but if it wasnt for me playing it i wouldn't be at the best school in ottawa so yk... you win some, you lose some!")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
tbn.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("trombone") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        tbn.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/tbn.png")
        ititbox.textContent = ("trombone")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("probably my least played instrument i'd say i'm somewhat proficient at. i played it for most of grade 7 band, and was pretty alright, i guess!! again, nothing really special. i liked the trombone until i found out i had to hold it UP and then poor baby azzy couldn't handle having an instrument on her shoulder so i quit 💀 but hey! i'm coming back to it for a duet too!!! and who knows, i might have to do it for jazz band next year if i cant get a spot on the bari sax 😓")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
flt.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("trombone") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        flt.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/flt.png")
        ititbox.textContent = ("flute")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("i lowkey stole my sister's flute and learned it for funsies!!! fingerings are pretty similar to clarinet and sax so it wasn't all that hard, i guess. i'm really flat though. don't like that very much. also i cant hit high notes. Gulp! i'm glad i'm not a flautist.")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
bcl.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("bass clarinet") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        bcl.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/bcl.png")
        ititbox.textContent = ("bass clarinet")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("i picked up bass clarinet at the start of grade 9 and genuinely started to lock in (i assumed this would be my new main instrument) and i really loved it!!! and then the keys stopped working like 3 weeks in and i had to jump ship 💔 i really hope i get another chance to play low clarinets though, they're really fun!")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
cbc.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("contrabass clarinet") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        cbc.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/cbc.png")
        ititbox.textContent = ("contrabass clarinet")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("woah, was that... foreshadowing???? earlier this year i found out my school has contra clarinets and my band director said i can play one next year! im super duper super duper super duper excited!!!! not really much to say yet since the senior bass clarinet is borrowing it over the summer 😓")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
acc.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("accordion") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        acc.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/acc.png")
        ititbox.textContent = ("accordion")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("as a newfie, it is my born and bred duty to learn the accordion. i learned it in a few days for a heritage project back in grade 6 and then. barely touched it afterwards. i'm pretty alright, though!!! i learned pretty fast!!!")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
asx.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("alto sax") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        asx.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/asx.png")
        ititbox.textContent = ("alto sax")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("i played this for like. 1 or 2 band rehearsals in grade 9 and then had to quit because of yearbook 💔 CAN SOMEONE EXPLAIN WHY THEY DIDNT HAVE A BAND AT ND FOR THE FIRST 8 MONTHS OF THE SCHOOL YEAR AND ONLY HAD THE BAND FOR LIKE THE LAST MONTH??? IM STILL MAD ABOUT THAT")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
cto.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("contralto clarinet") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        cto.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/cto.png")
        ititbox.textContent = ("contralto clarinet")
        abtyap.textContent = ("my wonderful son. this is my BABY. i am so lucky our school has basically the best model of contralto out there!!! since i cant borrow the contrabass he let me try the contralto, and its been amazing!!! its so awesome to play low niche instruments #lowreedsupremacy")
        clicksound.cloneNode(true).play();
        doodlecat.style.display = ("flex")
        showSide();
    }
})
tpt.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("trumpet") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        tpt.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/tpt.png")
        ititbox.textContent = ("trumpet")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("as brass section leader, i just HAD to learn trumpet. its easy as shit guys idk what everyone's complaining about 😭 anyways, this is one of the few instruments in this section that i actually own! i plan on restoring my old trumpet to playing condition and actually learning and practicing it this time!!!")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
clo.addEventListener('mousedown', () => {
        if(ititbox.textContent == ("cello") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        clo.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/clo.png")
        ititbox.textContent = ("cello")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("learned it for discipline switch in grade 10. i was pretty bad at it. nuff said.")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
mal.addEventListener('mousedown', () => {
    if(ititbox.textContent == ("mallets") && sidebox.style.display !== ("none")) {
        clicksound.cloneNode(true).play();
        hideSide();
    } else {
        mal.style.borderColor = ("rgb(192, 192, 192)")
        abttsimg.src = ("/perennial/images/mal.png")
        ititbox.textContent = ("mallets")
        doodlecat.style.display = ("none")
        abtyap.textContent = ("sometimes during lunch i'll just start playing the mallets because they're always out and theres no restrictions on who can play them!!!! it's pretty sweet and i'm not actually that bad at them!!! like i could probably do mallets for a music group if i was needed.")
        clicksound.cloneNode(true).play();
        showSide();
    }
})
function showSide() {
    sidebox.style.display = ("block")
    musicbigbox.style.left = ("50%")
    musicbigbox.style.transform = ("translateX(-188.5px)")
}
function hideSide() {
    sidebox.style.display = ("none")
    musicbigbox.style.left = ("0%")
    musicbigbox.style.transform = ("translateX(0px)")
    doodlecat.style.display = ("none")
}
document.addEventListener("DOMContentLoaded", () => {
    let bclrotate = Math.random() * 50 - 25;
    doodlebcl.style.transform = `rotate(${bclrotate}deg)`;
})
doodlecat.addEventListener('mouseenter', () => {
    doodlecat.textContent = "≽^•⩊•^≼";
})
doodlecat.addEventListener('mouseleave', () => {
    doodlecat.textContent = "≽^-⩊-^≼";
})
doodlecat.addEventListener('mousedown', () => {
    let musicbrisket = Number(localStorage.getItem("musicbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    doodlecat.textContent = "≽^•⩊-^≼";
    mew.preservesPitch = false;
    mew.playbackRate = 1.2;
    if(musicbrisket == 1) {
        clicksound.play();
    } else {
        mew.play();
    }
    presentBriskets();
    doodlecat.classList.add("sustingus")
    brisketnumber.textContent = Number(localStorage.getItem("briskets"));
    setTimeout(() => {
        show.play();
    }, 2350)
})
function brisketIncrease() {
    let musicbrisket = Number(localStorage.getItem("musicbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    if(musicbrisket == 0) {
        briskets++;
        musicbrisket = 1;
        localStorage.setItem("musicbrisket", 1)
        localStorage.setItem("briskets", briskets)
        brisketnumber.textContent = Number(localStorage.getItem("briskets"));
    }
}
function presentBriskets() {
    let musicbrisket = Number(localStorage.getItem("musicbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    brisketcounter.style.transition = ("transform ease-out 4s")
    brisketcounter.classList.add("showing")
    setTimeout(() => {
            catcollect.preservesPitch = false;
            if(musicbrisket == 0) {
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
    }
})
