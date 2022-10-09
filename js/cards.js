function Cards({
    cardForest, pathForest, audioForest,
    cardRain, pathRain, audioRain,
    cardCoffeeshop, pathCoffeeshop, audioCoffeeshop,
    cardFireplace, pathFireplace, audioFireplace,
}){
    function enableForest() {
        audioForest.play()
        audioForest.loop = true
        cardForest.classList.add('selected')
        pathForest.classList.add('selected')
        cardForest.classList.remove('cards-selected-dark')
        pathForest.classList.remove('cards-selected-dark')
    }
    function enableRain() {
        audioRain.play()
        audioRain.loop = true 
        cardRain.classList.add('selected')
        pathRain.classList.add('selected')
        cardRain.classList.remove('cards-selected-dark')
        pathRain.classList.remove('cards-selected-dark')
    }
    function enableCoffeeshop() {
        audioCoffeeshop.play()
        audioCoffeeshop.loop = true
        cardCoffeeshop.classList.add('selected')
        pathCoffeeshop.classList.add('selected')
        cardCoffeeshop.classList.remove('cards-selected-dark')
        pathCoffeeshop.classList.remove('cards-selected-dark')
    }
    function enableFireplace(){
        audioFireplace.play()
        audioFireplace.loop = true
        cardFireplace.classList.add('selected')
        pathFireplace.classList.add('selected')
        cardFireplace.classList.remove('cards-selected-dark')
        pathFireplace.classList.remove('cards-selected-dark')
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
    }
    function disableRain() {
        audioRain.pause()
        cardRain.classList.remove('selected')
        pathRain.classList.remove('selected')
        cardRain.classList.remove('cards-selected-dark')
        pathRain.classList.remove('cards-selected-dark')
    }
    function disableCoffeeshop() {
        audioCoffeeshop.pause()
        cardCoffeeshop.classList.remove('selected')
        pathCoffeeshop.classList.remove('selected')
        cardCoffeeshop.classList.remove('cards-selected-dark')
        pathCoffeeshop.classList.remove('cards-selected-dark')
        
    }
    function disableFireplace() {
        audioFireplace.pause()
        cardFireplace.classList.remove('selected')
        pathFireplace.classList.remove('selected')
        cardFireplace.classList.remove('cards-selected-dark')
        pathFireplace.classList.remove('cards-selected-dark')
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