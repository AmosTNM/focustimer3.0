import {
  displayMinutes,
  displaySeconds,
  numberMinutes,
  numberSeconds,
  countDown,
  play,
  pause,
  stop,
  increase,
  decrease,
  cardForest,
  cardRain,
  cardCoffeeshop,
  cardFireplace,
  pathForest,
  pathRain,
  pathCoffeeshop,
  pathFireplace,
  rangeForest,
  rangeRain,
  rangeCoffeeshop,
  rangeFireplace,
  rangeForestMode,
  rangeRainMode,
  rangeCoffeeshopMode,
  rangeFireplaceMode,
  audioForest,
  audioRain,
  audioCoffeeshop,
  audioFireplace,
  audioAlertTimer,
  audio_On_Off,
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
  svgDecrease
} from "./elements.js";
import { Controls } from "./controls.js";
import { Cards } from "./cards.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import { Mode } from "./mode.js";

const mode = Mode({
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
})
const controls = Controls({
  play,
  pause,
  displayMinutes,
  displaySeconds,
  numberMinutes,
  numberSeconds,
});
const cards = Cards({
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
  rangeFireplace
});
const timer = Timer({
  countDown,
  numberMinutes,
  numberSeconds,
  displayMinutes,
  displaySeconds,
  audioAlertTimer,
  controls,
  cards,
});
const events = Events({
  timer,
  controls,
  play,
  pause,
  stop,
  increase,
  decrease,
  cards,
  cardForest,
  cardRain,
  cardCoffeeshop,
  cardFireplace,
  audioForest,
  audioRain,
  audioCoffeeshop,
  audioFireplace,
  mode,
  iconLight,
  iconDark,
  rangeForest,
  rangeRain,
  rangeCoffeeshop,
  rangeFireplace
});

{ events.eventsControls(), events.eventsCards(), events.eventsMode(), events.eventsRange() }
