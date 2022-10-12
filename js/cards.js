function Cards({
    cardForest,
    pathForest,
    audioForest,
    cardRain,
    pathRain,
    audioRain,
    cardCoffeeshop,
    pathCoffeeshop,
    audioCoffeeshop,
    cardFireplace,
    pathFireplace,
    audioFireplace,
    rangeForest,
    rangeRain,
    rangeCoffeeshop,
    rangeFireplace,
    iconLight,
    rangeForestTurnColor,
    rangeRainTurnColor,
    rangeCoffeeshopTurnColor,
    rangeFireplaceTurnColor,
}){
    function enableForest() {
        audioForest.play()
        audioForest.loop = true
        cardForest.classList.add('selected')
        pathForest.classList.add('selected')
        cardForest.classList.remove('cards-selected-dark')
        pathForest.classList.remove('cards-selected-dark')
        rangeForestTurnColor.classList.add('white')
    }
    function enableRain() {
        audioRain.play()
        audioRain.loop = true 
        cardRain.classList.add('selected')
        pathRain.classList.add('selected')
        cardRain.classList.remove('cards-selected-dark')
        pathRain.classList.remove('cards-selected-dark')
        rangeRainTurnColor.classList.add('white')
    }
    function enableCoffeeshop() {
        audioCoffeeshop.play()
        audioCoffeeshop.loop = true
        cardCoffeeshop.classList.add('selected')
        pathCoffeeshop.classList.add('selected')
        cardCoffeeshop.classList.remove('cards-selected-dark')
        pathCoffeeshop.classList.remove('cards-selected-dark')
        rangeCoffeeshopTurnColor.classList.add('white')
    }
    function enableFireplace(){
        audioFireplace.play()
        audioFireplace.loop = true
        cardFireplace.classList.add('selected')
        pathFireplace.classList.add('selected')
        cardFireplace.classList.remove('cards-selected-dark')
        pathFireplace.classList.remove('cards-selected-dark')
        rangeFireplaceTurnColor.classList.remove('white')   
    }

    function enableDarkForest() {
        audioForest.play()
        audioForest.loop = true
        cardForest.classList.remove('selected')
        pathForest.classList.remove('selected')
        cardForest.classList.add('cards-selected-dark')
        pathForest.classList.add('cards-selected-dark')
    }
    function enableDarkRain() {
        audioRain.play()
        audioRain.loop = true 
        cardRain.classList.remove('selected')
        pathRain.classList.remove('selected')
        cardRain.classList.add('cards-selected-dark')
        pathRain.classList.add('cards-selected-dark')
    }
    function enableDarkCoffeeshop() {
        audioCoffeeshop.play()
        audioCoffeeshop.loop = true
        cardCoffeeshop.classList.remove('selected')
        pathCoffeeshop.classList.remove('selected')
        cardCoffeeshop.classList.add('cards-selected-dark')
        pathCoffeeshop.classList.add('cards-selected-dark')
    }
    function enableDarkFireplace(){
        audioFireplace.play()
        audioFireplace.loop = true
        cardFireplace.classList.remove('selected')
        pathFireplace.classList.remove('selected')
        cardFireplace.classList.add('cards-selected-dark')
        pathFireplace.classList.add('cards-selected-dark')
    }

    function disableForest() {
        audioForest.pause()
        cardForest.classList.remove('selected')
        pathForest.classList.remove('selected')
        cardForest.classList.remove('cards-selected-dark')
        pathForest.classList.remove('cards-selected-dark')
        rangeForest.value = '0.5'
        if (!iconLight.classList.contains('hide')){
            rangeForestTurnColor.classList.remove('white')   
        }
    }
    function disableRain() {
        audioRain.pause()
        cardRain.classList.remove('selected')
        pathRain.classList.remove('selected')
        cardRain.classList.remove('cards-selected-dark')
        pathRain.classList.remove('cards-selected-dark')
        rangeRain.value = '0.5'
        if (!iconLight.classList.contains('hide')){
            rangeRainTurnColor.classList.remove('white')   
        }
    }
    function disableCoffeeshop() {
        audioCoffeeshop.pause()
        cardCoffeeshop.classList.remove('selected')
        pathCoffeeshop.classList.remove('selected')
        cardCoffeeshop.classList.remove('cards-selected-dark')
        pathCoffeeshop.classList.remove('cards-selected-dark')
        rangeCoffeeshop.value = '0.5'
        if (!iconLight.classList.contains('hide')){
            rangeCoffeeshopTurnColor.classList.remove('white')   
        }
    }
    function disableFireplace() {
        audioFireplace.pause()
        cardFireplace.classList.remove('selected')
        pathFireplace.classList.remove('selected')
        cardFireplace.classList.remove('cards-selected-dark')
        pathFireplace.classList.remove('cards-selected-dark')
        rangeFireplace.value = '0.5'
        if (!iconLight.classList.contains('hide')){
            rangeFireplaceTurnColor.classList.remove('white')   
        }
    }

    return {
        enableForest,
        enableRain,
        enableCoffeeshop,
        enableFireplace,
        enableDarkForest,
        enableDarkRain,
        enableDarkCoffeeshop,
        enableDarkFireplace,
        disableForest,
        disableRain,
        disableCoffeeshop,
        disableFireplace
    }
} export { Cards }