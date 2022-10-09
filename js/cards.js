function Cards({
    cardForest, svgForest, audioForest,
    cardRain, svgRain, audioRain,
    cardCoffeeshop, svgCoffeeshop, audioCoffeeshop,
    cardFireplace, svgFireplace, audioFireplace,
}){
    function enableForest() {
        audioForest.play()
        audioForest.loop = true
        cardForest.classList.add('selected')
        svgForest.classList.add('selected')
        cardForest.classList.remove('cards-selected-dark')
        svgForest.classList.remove('cards-selected-dark')
    }
    function enableRain() {
        audioRain.play()
        audioRain.loop = true 
        cardRain.classList.add('selected')
        svgRain.classList.add('selected')
        cardRain.classList.remove('cards-selected-dark')
        svgRain.classList.remove('cards-selected-dark')
    }
    function enableCoffeeshop() {
        audioCoffeeshop.play()
        audioCoffeeshop.loop = true
        cardCoffeeshop.classList.add('selected')
        svgCoffeeshop.classList.add('selected')
        cardCoffeeshop.classList.remove('cards-selected-dark')
        svgCoffeeshop.classList.remove('cards-selected-dark')
    }
    function enableFireplace(){
        audioFireplace.play()
        audioFireplace.loop = true
        cardFireplace.classList.add('selected')
        svgFireplace.classList.add('selected')
        cardFireplace.classList.remove('cards-selected-dark')
        svgFireplace.classList.remove('cards-selected-dark')
    }

    function enableDarkForest() {
        audioForest.play()
        audioForest.loop = true
        cardForest.classList.remove('selected')
        svgForest.classList.remove('selected')
        cardForest.classList.add('cards-selected-dark')
        svgForest.classList.add('cards-selected-dark')
    }
    function enableDarkRain() {
        audioRain.play()
        audioRain.loop = true 
        cardRain.classList.remove('selected')
        svgRain.classList.remove('selected')
        cardRain.classList.add('cards-selected-dark')
        svgRain.classList.add('cards-selected-dark')
    }
    function enableDarkCoffeeshop() {
        audioCoffeeshop.play()
        audioCoffeeshop.loop = true
        cardCoffeeshop.classList.remove('selected')
        svgCoffeeshop.classList.remove('selected')
        cardCoffeeshop.classList.add('cards-selected-dark')
        svgCoffeeshop.classList.add('cards-selected-dark')
    }
    function enableDarkFireplace(){
        audioFireplace.play()
        audioFireplace.loop = true
        cardFireplace.classList.remove('selected')
        svgFireplace.classList.remove('selected')
        cardFireplace.classList.add('cards-selected-dark')
        svgFireplace.classList.add('cards-selected-dark')
    }

    function disableForest() {
        audioForest.pause()
        cardForest.classList.remove('selected')
        svgForest.classList.remove('selected')
        cardForest.classList.remove('cards-selected-dark')
        svgForest.classList.remove('cards-selected-dark')
    }
    function disableRain() {
        audioRain.pause()
        cardRain.classList.remove('selected')
        svgRain.classList.remove('selected')
        cardRain.classList.remove('cards-selected-dark')
        svgRain.classList.remove('cards-selected-dark')
    }
    function disableCoffeeshop() {
        audioCoffeeshop.pause()
        cardCoffeeshop.classList.remove('selected')
        svgCoffeeshop.classList.remove('selected')
        cardCoffeeshop.classList.remove('cards-selected-dark')
        svgCoffeeshop.classList.remove('cards-selected-dark')
        
    }
    function disableFireplace() {
        audioFireplace.pause()
        cardFireplace.classList.remove('selected')
        svgFireplace.classList.remove('selected')
        cardFireplace.classList.remove('cards-selected-dark')
        svgFireplace.classList.remove('cards-selected-dark')
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