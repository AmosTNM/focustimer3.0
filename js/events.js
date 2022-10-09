function Events({
    timer, controls,
    play, pause, stop, increase, decrease,
    cards,
    cardForest, cardRain, cardCoffeeshop, cardFireplace,
    audioForest, audioRain, audioCoffeeshop, audioFireplace,
    mode, iconLight, iconDark,
    rangeForest, rangeRain, rangeCoffeeshop, rangeFireplace
}) {    
    function eventsControls() {
        play.addEventListener('click', () => {
            controls.buttonPlay()
            timer.play()
        })
        pause.addEventListener('click', () => {
            controls.buttonPause()
            timer.pause()
        })
        stop.addEventListener('click', () => {
            controls.buttonStop()
            timer.stop()
            cards.disableForest()
            cards.disableRain()
            cards.disableCoffeeshop()
            cards.disableFireplace()
        })
        increase.addEventListener('click', () => {
            timer.increase()
        })
        decrease.addEventListener('click', () => {
            timer.decrease()
        })
    }
    function eventsCards() {
        cardForest.addEventListener('click', () => {
            if (audioForest.paused == true) {
                if (!iconLight.classList.contains('hide')) {
                    cards.enableForest()
                    cards.disableRain()
                    cards.disableCoffeeshop()
                    cards.disableFireplace()
                } else {
                    cards.enableDarkForest()
                    cards.disableRain()
                    cards.disableCoffeeshop()
                    cards.disableFireplace()
                }
            } else {
                cards.disableForest()    
                }
        })
        cardRain.addEventListener('click', () => {
            if (audioRain.paused == true) {
                if (!iconLight.classList.contains('hide')) {
                    cards.enableRain()
                    cards.disableForest()
                    cards.disableCoffeeshop()
                    cards.disableFireplace()
                } else {
                    cards.enableDarkRain()
                    cards.disableForest()
                    cards.disableCoffeeshop()
                    cards.disableFireplace()
                }
            } else {
                cards.disableRain()
            }
        })
        cardCoffeeshop.addEventListener('click', () => {
            if (audioCoffeeshop.paused == true) {
                if (!iconLight.classList.contains('hide')) {
                    cards.enableCoffeeshop()
                    cards.disableForest()
                    cards.disableRain()
                    cards.disableFireplace()              
                } else {
                    cards.enableDarkCoffeeshop()
                    cards.disableForest()
                    cards.disableRain()
                    cards.disableFireplace()
                }
            } else {
                cards.disableCoffeeshop()
            }
        })
        cardFireplace.addEventListener('click', () => {
            if (audioFireplace.paused == true) {
                if (!iconLight.classList.contains('hide')) {
                    cards.enableFireplace()
                    cards.disableForest()        
                    cards.disableRain()
                    cards.disableCoffeeshop()
                } else {
                    cards.enableDarkFireplace()
                    cards.disableForest()        
                    cards.disableRain()
                    cards.disableCoffeeshop()
                }
            } else {
                cards.disableFireplace()
            }
        })
    }
    function eventsMode() {
        iconLight.addEventListener('click', () => {
            mode.light()
            if (!audioForest.paused == true) {
                cards.enableDarkForest()
            }
            if (!audioRain.paused == true) {
                cards.enableDarkRain()
            }
            if (!audioCoffeeshop.paused == true) {
                cards.enableDarkCoffeeshop()
            }
            if (!audioFireplace.paused == true) {
                cards.enableDarkFireplace()
            }
        })
        iconDark.addEventListener('click', () => {
            mode.dark()
            if (!audioForest.paused == true) {
                cards.enableForest()
            }
            if (!audioRain.paused == true) {
                cards.enableRain()
            }
            if (!audioCoffeeshop.paused == true) {
                cards.enableCoffeeshop()
            }
            if (!audioFireplace.paused == true) {
                cards.enableFireplace()
            }
        })
    }
    function eventsRange() {
        rangeForest.addEventListener('change', () => {
            audioForest.volume = rangeForest.value
        })
        rangeRain.addEventListener('change', () => {
            audioRain.volume = rangeRain.value
        })
        rangeCoffeeshop.addEventListener('change', () => {
            audioCoffeeshop.volume = rangeCoffeeshop.value
        })
        rangeFireplace.addEventListener('change', () => {
            audioFireplace.volume = rangeFireplace.value
        })
    }
    return {
        eventsControls,
        eventsCards,
        eventsMode,
        eventsRange
    }
} export { Events }