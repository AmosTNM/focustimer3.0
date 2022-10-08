let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')
let numberMinutes = Number(displayMinutes.textContent)
let numberSeconds = Number(displaySeconds.textContent)
let countDown

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')

const cardForest = document.querySelector('.card-forest')
const svgForest = document.querySelector('.svg-forest')
const cardRain = document.querySelector('.card-rain')
const svgRain = document.querySelector('.svg-rain')
const cardCoffeeshop = document.querySelector('.card-coffeeshop')
const svgCoffeeshop = document.querySelector('.svg-coffeeshop')
const cardFireplace = document.querySelector('.card-fireplace')
const svgFireplace = document.querySelector('.svg-fireplace')

const audioForest = new Audio('./assets/Floresta.wav')
const audioRain= new Audio('./assets/Chuva.wav')
const audioCoffeeshop = new Audio('./assets/Cafeteria.wav')
const audioFireplace = new Audio('./assets/Lareira.wav')
const audioAlertTimer = new Audio("./assets/Alerta.mp3")

const iconLight = document.querySelector(".light");
const iconDark = document.querySelector(".dark");

const darkBody = document.body.style;
const darkContent = document.querySelector(".content").style;

const darkMinutes = document.querySelector(".minutes");
const darkTwoDots = document.querySelector(".two-dots");
const darkSeconds = document.querySelector(".seconds");

const svgPlay = document.querySelector(".svg-play");
const svgPause = document.querySelector(".svg-pause");
const svgStop = document.querySelector(".svg-stop");
const svgIncrease = document.querySelector(".svg-increase");
const svgDecrease = document.querySelector(".svg-decrease");

export {
    displayMinutes, displaySeconds, numberMinutes, numberSeconds, countDown,
    play, pause, stop, increase, decrease,
    cardForest, cardRain, cardCoffeeshop, cardFireplace,
    svgForest, svgRain, svgCoffeeshop, svgFireplace,
    audioForest, audioRain, audioCoffeeshop, audioFireplace, audioAlertTimer,
    iconLight, iconDark, darkBody, darkContent,
    darkMinutes, darkTwoDots, darkSeconds,
    svgPlay, svgPause, svgStop, svgIncrease, svgDecrease
}