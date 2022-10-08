function Mode({
    iconLight,
    iconDark,
    darkBody,
    darkContent,
    darkMinutes,
    darkTwoDots,
    darkSeconds,
    svgPlay,
    svgPause,
    svgStop,
    svgIncrease,
    svgDecrease,
    cardForest,
    svgForest,
    cardRain,
    svgRain,
    cardCoffeeshop,
    svgCoffeeshop,
    cardFireplace,
    svgFireplace
}) {
    function light() {
        iconLight.classList.add('hide')
        iconDark.classList.remove('hide')
        darkBody.background = "#121214"
        darkContent.background = "#121214"
        darkMinutes.classList.add('time-dark')
        darkTwoDots.classList.add('time-dark')
        darkSeconds.classList.add('time-dark')
        svgPlay.classList.add('controls-dark')
        svgPause.classList.add('controls-dark')
        svgStop.classList.add('controls-dark')
        svgIncrease.classList.add('controls-dark')
        svgDecrease.classList.add('controls-dark')
        cardForest.classList.add('cards-dark')
        svgForest.classList.add('cards-dark')
        cardRain.classList.add('cards-dark')
        svgRain.classList.add('cards-dark')
        cardCoffeeshop.classList.add('cards-dark')
        svgCoffeeshop.classList.add('cards-dark')
        cardFireplace.classList.add('cards-dark')
        svgFireplace.classList.add('cards-dark')
    }
    function dark() {
        iconLight.classList.remove('hide')
        iconDark.classList.add('hide')
        darkBody.background = "#FFFFFF"
        darkContent.background = "#FFFFFF"
        darkMinutes.classList.remove('time-dark')
        darkTwoDots.classList.remove('time-dark')
        darkSeconds.classList.remove('time-dark')
        svgPlay.classList.remove('controls-dark')
        svgPause.classList.remove('controls-dark')
        svgStop.classList.remove('controls-dark')
        svgIncrease.classList.remove('controls-dark')
        svgDecrease.classList.remove('controls-dark')
        cardForest.classList.remove('cards-dark')
        svgForest.classList.remove('cards-dark')
        cardRain.classList.remove('cards-dark')
        svgRain.classList.remove('cards-dark')
        cardCoffeeshop.classList.remove('cards-dark')
        svgCoffeeshop.classList.remove('cards-dark')
        cardFireplace.classList.remove('cards-dark')
        svgFireplace.classList.remove('cards-dark')
    }
    return {
        light, dark
    }
} export { Mode }