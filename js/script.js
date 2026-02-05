import { initDisplayCards, allOn } from './modules/displayCards.js';
import { toggleOff, removeCard } from './modules/cardFunctions.js';
import { filterCards } from './modules/filter.js';
import { toggleTheme } from './modules/toggleTheme.js';

async function init() {
  await initDisplayCards();
  toggleOff();
  removeCard();
  allOn();
  filterCards();
  toggleTheme();
}

init();
