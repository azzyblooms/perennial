
const hoversound = new Audio('/perennial/audio/hover.mp3')
const clicksound = new Audio('/perennial/audio/click2.mp3')
const catcollect = new Audio('/perennial/audio/catcollect.wav')
const boom = new Audio('/perennial/audio/boom.mp3')
const mew = new Audio('/perennial/audio/mew.wav')
const whoop = new Audio('/perennial/audio/snd_slidewhist.wav')
const show = new Audio('/perennial/audio/In.ogg')
const hide = new Audio('/perennial/audio/Out.ogg')
if(localStorage.getItem("briskets") === null) {
    localStorage.setItem("briskets", 0)
}

if(localStorage.getItem("aboutbrisket") === null) {
    localStorage.setItem("aboutbrisket", 0)
}
let aboutbrisket = localStorage.getItem("aboutbrisket")
dayjs.extend(window.dayjs_plugin_duration);
dayjs.extend(window.dayjs_plugin_utc);

let data;

const tbper = document.getElementById("tbper")
const tbmus = document.getElementById("tbmus")
const tblik = document.getElementById("tblik")
const tbabt = document.getElementById("tbabt")
const tbproj = document.getElementById("tbproj")
const tbcon = document.getElementById("tbcon")
const tbblog = document.getElementById("tbblog")
const brisket = document.getElementById("brisket")
const docage = document.getElementById("age")
const basket = document.getElementById("funfactbasket")
const shader = document.getElementById("pageshader")
const ffwrap = document.getElementById("ffwrap")
const fact = document.getElementById("funfact")
const temperature = document.getElementById("temp")
const weathertype = document.getElementById("weathertype")
const specifics = document.getElementById("specifics")
const feelslike = document.getElementById("feelslike")
const weathericon = document.getElementById("daynnite")
const clock = document.getElementById("time")

const img1 = document.getElementById("outphotoleft")
const img2 = document.getElementById("photoleft")
const img3 = document.getElementById("bigphoto")
const img4 = document.getElementById("photoright")
const img5 = document.getElementById("outphotoright")

const images = [1, 2, 3, 4, 5, 6, 7];
const docimg = [img1, img2, img3, img4, img5];
const subtitles = {
    "1": "this is a placeholder! image #1",
    "2": "this is a placeholder! image #2",
    "3": "this is a placeholder! image #3",
    "4": "this is a placeholder! image #4",
    "5": "this is an alto saxophone.",
    "6": "this is a placeholder! image #6",
    "7": "this is a placeholder! image #7",
}
const subtitletext = document.getElementById("photocaption")

const dyears = document.getElementById("years")
const dmonths = document.getElementById("months")
const ddays = document.getElementById("days")
const dhours = document.getElementById("hours")
const dminutes = document.getElementById("minutes")
const dseconds = document.getElementById("seconds")
let safetycheck = 0;

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

const leftarrow = document.getElementById("leftarrow")
const rightarrow = document.getElementById("rightarrow")

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
rightarrow.addEventListener("mousedown", () => {
    goRight();
})
leftarrow.addEventListener("mousedown", () => {
    goLeft();
})
function updateImages() {
    docimg.forEach((img, index) => {
        img.src = `/perennial/images/gallery/${images[index]}.png`;
        subtitletext.textContent = subtitles[images[2]];
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
const facttext = document.getElementById("facttext");
basket.addEventListener('mousedown', () => {
    clicksound.cloneNode(true).play();
    show.cloneNode(true).play();
    shader.style.zIndex = 5;
    ffwrap.style.opacity = 1;
    fact.style.opacity = 1;
    if (factsviewed >= 10 && aboutbrisket == 0 && safetycheck == 0) {
        if (factsviewed > 10) {
            fact.style.transform = (`scale(${Math.pow((factsviewed / 9))})`)
        }
        facttext.textContent = null;
        brisket.textContent = "≽^-⩊-^≼";
        brisket.style.display = "inline";
        ffwrap.style.zIndex = 6;
        ffwrap.style.animation = ("factenter2 1s ease-in-out")
        shader.style.opacity = 0.6;
        setTimeout(() => {
            shader.style.opacity = 0;
            hide.cloneNode(true).play();
            ffwrap.style.animation = ("factexit2 1s ease-in-out")
            safetycheck = 1;
            setTimeout(() => {
                shader.style.zIndex = -100;
                brisket.style.display = "none";
                ffwrap.style.zIndex = -100;
                ffwrap.style.opacity = 0;
                fact.style.opacity = 1;
            }, 1000)
        }, 3500)
    } else {
        fact.style.transform = (`scale(1)`)
        brisket.style.display = "none";
        const randomFact = facts[Math.floor(Math.random() * facts.length)]
        facttext.textContent = randomFact;
        if (randomFact === facts[29]) {
            facttext.style.color = "rgb(221, 91, 141)"
        } else {
            facttext.style.color = "rgb(0, 0, 0)"
        }
        ffwrap.style.zIndex = 6;
        ffwrap.style.animation = ("factenter 1s ease-in-out")
        shader.style.opacity = 0.6;
        setTimeout(() => {
            shader.style.opacity = 0;
            hide.cloneNode(true).play();
            ffwrap.style.animation = ("factexit 1s ease-in-out")
            setTimeout(() => {
                shader.style.zIndex = -100;
                ffwrap.style.zIndex = -100;
                ffwrap.style.opacity = 0;
                fact.style.opacity = 1;
            }, 1000)
        }, 3500)
    }
    factsviewed++;
})

const bob = document.getElementById("boowomp")
const unemployed = document.getElementById("eltestito")
const boowomp = new Audio('/perennial/audio/boowomp.mp3')
eltestito.addEventListener('mousedown', () => {
    boowomp.cloneNode(true).play();
    boom.cloneNode(true).play();
    bob.style.display = ("inline")
    bob.style.animation = ("flingin 1s ease forwards")
    setTimeout(() => {
        bob.style.animation = ("fadeout 1s ease forwards")
        setTimeout(() => {
            bob.style.display = ("none")
        }, 1000)
    }, 1000)
})


brisket.addEventListener('mouseenter', () => {
    brisket.textContent = ("≽^•⩊•^≼")
})
brisket.addEventListener('mouseleave', () => {
    brisket.textContent = ("≽^-⩊-^≼")
})
brisket.addEventListener('mousedown', () => {
    let aboutbrisket = Number(localStorage.getItem("aboutbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    brisket.textContent = "≽^•⩊-^≼";
    mew.preservesPitch = false;
    mew.playbackRate = 1.2;
    if(aboutbrisket == 1) {
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
    let aboutbrisket = Number(localStorage.getItem("aboutbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    brisketcounter.style.transition = ("transform ease-out 4s")
    brisketcounter.classList.add("showing")
    setTimeout(() => {
            catcollect.preservesPitch = false;
            if(aboutbrisket == 0) {
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
    let aboutbrisket = Number(localStorage.getItem("aboutbrisket"))
    let briskets = Number(localStorage.getItem("briskets"))
    if(aboutbrisket == 0) {
        briskets++;
        aboutbrisket = 1;
        localStorage.setItem("aboutbrisket", 1)
        localStorage.setItem("briskets", briskets)
        brisketnumber.textContent = Number(localStorage.getItem("briskets"));
    }
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
        localStorage.setItem("aboutbrisket", aboutbrisket)
        localStorage.setItem("contactbrisket", 0)
        localStorage.setItem("inceptionbrisket", 0)
        localStorage.setItem("likesbrisket", 0)
        localStorage.setItem("projectbrisket", 0)
        localStorage.setItem("briskets", 0)
        localStorage.setItem("musicbrisket", 0)
        mew.play();
    }
})
const weathernames = {
    "clear sky": "Sunny",
    "few clouds": "Partly Cloudy",
    "scattered clouds": "Partly Cloudy",
    "broken clouds": "Mostly Cloudy",
    "overcast clouds": "Overcast",
    "mist": "Fog",
    "fog": "Fog",
    "haze": "Haze",
    "smoke": "Smoke",
    "ragged shower rain": "Scattered Rain",
    "light intensity drizzle": "Light Rain",
    "light intensity drizzle rain": "Light Rain",
    "light intensity shower rain": "Light Rain",
    "light rain": "Light Rain",
    "drizzle": "Light Rain",
    "moderate rain": "Rain",
    "shower rain": "Rain",
    "shower drizzle": "Rain",
    "drizzle rain": "Rain",
    "shower rain and drizzle": "Rain",
    "heavy intensity drizzle": "Rain",
    "heavy intensity drizzle rain": "Heavy Rain",
    "heavy shower rain and drizzle": "Heavy Rain",
    "heavy intensity drizzle rain": "Heavy Rain",
    "heavy shower rain and drizzle": "Heavy Rain",
    "heavy intensity shower rain": "Heavy Rain",
    "heavy intensity rain": "Heavy Rain",
    "very heavy rain": "Torrential Rain",
    "extreme rain": "Torrential Rain",
    "squalls": "Windy",
    "ragged thunderstorm": "Scattered Thunderstorms",
    "thunderstorm with light drizzle": "Thunderstorm",
    "thunderstorm with drizzle": "Thunderstorm",
    "thunderstorm with heavy drizzle": "Thunderstorm",
    "light thunderstorm": "Thunderstorm",
    "thunderstorm": "Thunderstorm",
    "thunderstorm with light rain": "Thunderstorm",
    "thunderstorm with heavy rain": "Thunderstorm",
    "heavy thunderstorm": "Severe Thunderstorm",
    "tornado": "Tornado",
    "light rain and snow": "Rain and Snow",
    "rain and snow": "Rain and Snow",
    "light shower snow": "Rain and Snow",
    "shower snow": "Rain and Snow",
    "heavy shower snow": "Rain and Snow",
    "freezing rain": "Freezing Rain",
    "light snow": "Light Snow",
    "snow": "Snow",
    "heavy snow": "Heavy Snow",
    "sleet": "Hail",
    "light shower sleet": "Hail",
    "shower sleet": "Hail",
}
const weathercolors = {
    "clear sky": "rgb(229, 190, 0)",
    "few clouds": "rgb(255, 239, 158)",
    "scattered clouds": "rgb(212, 212, 212)",
    "broken clouds": "rgb(212, 212, 212)",
    "overcast clouds": "rgb(255, 255, 255)",
    "mist": "rgb(172, 172, 172)",
    "fog": "rgb(161, 161, 161)",
    "haze": "rgb(122, 122, 122)",
    "smoke": "rgb(34, 34, 34)",
    "ragged shower rain": "rgb(105, 207, 255)",
    "light intensity drizzle": "rgb(105, 207, 255)",
    "light intensity drizzle rain": "rgb(105, 207, 255)",
    "light intensity shower rain": "rgb(105, 207, 255)",
    "light rain": "rgb(105, 207, 255)",
    "drizzle": "rgb(105, 207, 255)",
    "moderate rain": "rgb(46, 130, 168)",
    "shower rain": "rgb(46, 130, 168)",
    "shower drizzle": "rgb(46, 130, 168)",
    "drizzle rain": "rgb(46, 130, 168)",
    "shower rain and drizzle": "rgb(46, 130, 168)",
    "heavy intensity drizzle": "rgb(46, 130, 168)",
    "heavy intensity drizzle rain": "rgb(38, 92, 117)",
    "heavy shower rain and drizzle": "rgb(38, 92, 117)",
    "heavy intensity drizzle rain": "rgb(38, 92, 117)",
    "heavy shower rain and drizzle": "rgb(38, 92, 117)",
    "heavy intensity shower rain": "rgb(38, 92, 117)",
    "heavy intensity rain": "rgb(38, 92, 117)",
    "very heavy rain": "rgb(23, 55, 70)",
    "extreme rain": "rgb(23, 55, 70)",
    "squalls": "rgb(209, 203, 175)",
    "ragged thunderstorm": "rgb(33, 48, 54)",
    "thunderstorm with light drizzle": "rgb(33, 48, 54)",
    "thunderstorm with drizzle": "rgb(33, 48, 54)",
    "thunderstorm with heavy drizzle": "rgb(33, 48, 54)",
    "light thunderstorm": "rgb(33, 48, 54)",
    "thunderstorm": "rgb(33, 48, 54)",
    "thunderstorm with light rain": "rgb(33, 48, 54)",
    "thunderstorm with heavy rain": "rgb(33, 48, 54)",
    "heavy thunderstorm": "rgb(24, 31, 34)",
    "tornado": "rgb(24, 31, 34)",
    "light rain and snow": "rgb(168, 169, 255)",
    "rain and snow": "rgb(168, 169, 255)",
    "light shower snow": "rgb(168, 169, 255)",
    "shower snow": "rgb(168, 169, 255)",
    "heavy shower snow": "rgb(168, 169, 255)",
    "freezing rain": "rgb(93, 94, 172)n",
    "light snow": "rgb(243, 203, 255)",
    "snow": "rgb(185, 127, 202)",
    "heavy snow": "rgb(124, 52, 146)",
    "sleet": "rgb(69, 43, 77)",
    "light shower sleet": "rgb(69, 43, 77)",
    "shower sleet": "rgb(69, 43, 77)",
}





async function getWeather() {
    const apikey = "49f0506a9ea95970a80ce421edbc038f";
    const found = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=45.4215&lon=-75.6903&units=metric&appid=${apikey}`)
    data = await found.json();
    console.log(data)
    weathericon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    feelslike.textContent = `feels like ${Math.round(data.main.feels_like)}°C`
    specifics.textContent =(weathernames[data.weather[0].description] ?? data.weather[0].description).toLowerCase();
    specifics.style.webkitTextStroke = `1.5px ${(weathercolors[data.weather[0].description])}` ?? "1.5px black";
    const icon = data.weather[0].icon;
}
const colon = document.getElementById("colon")
const ampm = document.getElementById("ampm")
const clockhour = document.getElementById("hour")
const clockminute = document.getElementById("minute")
getWeather();
async function getTime() {
    if(colon.style.opacity == "1") {
        colon.style.opacity = "0"
    } else {
        colon.style.opacity = "1"
    }
    const now = dayjs.utc().utcOffset(data.timezone / 60);

    clockhour.textContent = `${now.format("HH")}`
    clockminute.textContent = `${now.format("mm")}`
}
getTime();
setInterval(getTime, 1000);

let factsviewed = 6;
const facts = [
    "1. I saw Angine de Poitrine in concert.",
    "2. My favourite fruit is mango.",
    "3. I used to make mods for Terraria.",
    "4. I use Legere synthetic reeds.",
    "5. I've been to 10 different countries.",
    "6. I started coding when I was 9.",
    "7. I joined Hack Club in November 2025.",
    "8. I build extensions for instruments.",
    "9. I want to make a mechatronic instrument.",
    "10. I build extensions for instruments.",
    "11. I speak both English and French.",
    "12. My favourite song is Twilight by boa.",
    "13. My favourite monster is Ultra Blue Hawaiian.",
    "14. Pineapple belongs on pizza.",
    "15. My favourite season is summer.",
    "16. I don't like tea.",
    "17. I want to become a music teacher.",
    "18. I am working on a contra-alto extension to low A.",
    "19. dude i fucken love frank's red hot.",
    "20. My favourite fictional character is Noelle Deltarune.",
    "21. I'm making OCs based on band instruments.",
    "22. I have a YouTube channel with over 2.5k subs.",
    "23. My longest single bike ride was 67.25km.",
    "24. Low reeds are the best band section.",
    "25. I compose music.",
    "26. I might start selling said music if I make something good enough.",
    "27. If I can't be a music teacher, my backup is in computer science.",
    "28. Biology is my least favourite subject.",
    "29. I lowkey wanna figure out crypto (I HAVE GOOD REASONS! ITS FOR MY HEALTH!!!)",
    "30. My favourite colour is this one.",
    "31. I am right handed.",
    "32. I'm a night owl.",
    "33. More facts coming soon!"

]