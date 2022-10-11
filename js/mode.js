function Mode({
    iconLight,
    iconDark,
    audio_On_Off,
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
    pathForest,
    cardRain,
    pathRain,
    cardCoffeeshop,
    pathCoffeeshop,
    cardFireplace,
    pathFireplace,
    rangeForestMode,
    rangeRainMode,
    rangeCoffeeshopMode,
    rangeFireplaceMode
}) {
    function light() {
        iconLight.classList.add('hide')
        iconDark.classList.remove('hide')
        audio_On_Off.play()
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
        pathForest.classList.add('cards-dark')
        cardRain.classList.add('cards-dark')
        pathRain.classList.add('cards-dark')
        cardCoffeeshop.classList.add('cards-dark')
        pathCoffeeshop.classList.add('cards-dark')
        cardFireplace.classList.add('cards-dark')
        pathFireplace.classList.add('cards-dark')
        rangeForestMode.classList.add('dark')
        rangeRainMode.classList.add('dark')
        rangeCoffeeshopMode.classList.add('dark')
        rangeFireplaceMode.classList.add('dark')
    }
    function dark() {
        iconLight.classList.remove('hide')
        iconDark.classList.add('hide')
        audio_On_Off.play()
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
        pathForest.classList.remove('cards-dark')
        cardRain.classList.remove('cards-dark')
        pathRain.classList.remove('cards-dark')
        cardCoffeeshop.classList.remove('cards-dark')
        pathCoffeeshop.classList.remove('cards-dark')
        cardFireplace.classList.remove('cards-dark')
        pathFireplace.classList.remove('cards-dark')
        rangeForestMode.classList.remove('dark')
        rangeRainMode.classList.remove('dark')
        rangeCoffeeshopMode.classList.remove('dark')
        rangeFireplaceMode.classList.remove('dark')
    }
    return {
        light, dark
    }
} export { Mode }